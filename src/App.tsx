import { Route, Routes } from "react-router-dom";
import Signin from "./auth/pages/Signin";
import Signup from "./auth/pages/Signup";
import { AuthProvider } from "./auth/service/AuthService";

function App() {
  return (
    <Routes>
      <Route path="*" element={<p>Hello</p>} />
      <Route
        path="signin"
        element={
          <AuthProvider>
            <Signin />
          </AuthProvider>
        }
      />
      <Route path="signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
