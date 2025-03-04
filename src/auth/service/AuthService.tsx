import { createContext, ReactNode, useState } from "react";
import { User } from "../types/User";
import axios from "axios";

interface AuthContextType {
  user: User | null;
  signin: (username: string, password: string) => Promise<void>;
  signup: (username: string, password: string) => Promise<void>;
  signout: () => void;
  upd: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const tokenKey = "delivers_token";

  const me = async () => {
    await axios
      .get("/auth/me")
      .then((r) => setUser(r.data))
      .catch((e) => {
        setUser(null);
        console.error(e);
      });
  };

  const signin = async (username: string, password: string) => {
    const response = await axios.post("/auth/login", { username, password });
    localStorage.setItem(tokenKey, response.data.token);
    axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
    await me();
  };

  const signup = async (username: string, password: string) => {
    const response = await axios.post("/auth/register", { username, password });
    localStorage.setItem(tokenKey, response.data.token);
    axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
    await me();
  };

  const upd = async () => {
    const token = localStorage.getItem(tokenKey);
    if (token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      try {
        await me();
      } catch (error) {
        console.error(`Failed to fetch user: ${error}`);
      }
    }
  };

  const signout = async () => {
    setUser(null);
    localStorage.removeItem(tokenKey);
  };

  return (
    <AuthContext.Provider value={{ user, signin, signup, signout, upd }}>
      {children}
    </AuthContext.Provider>
  );
};
