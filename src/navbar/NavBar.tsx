import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth/service/AuthService";
import { MenuItem, Select } from "@mui/material";
import { MdExitToApp } from "react-icons/md";

const NavBar = () => {
  const authContext = useContext(AuthContext);
  const [mode, setMode] = useState("Customer");

  if (!authContext) {
    return null;
  }

  const { user, signout } = authContext;

  if (!user) {
    return null;
  }

  const customerMenuItems = [
    { path: "/", label: "Главная" },
    { path: "/order", label: "Заказ" },
    { path: "/history", label: "История" },
    { path: "/profile", label: "Профиль" },
  ];

  const senderMenuItems = [
    { path: "/", label: "Главная" },
    { path: "/warehouse", label: "Склад" },
    { path: "/goods", label: "Товары" },
    { path: "/history", label: "История" },
    { path: "/profile", label: "Профиль" },
  ];

  const menuItems = mode === "Customer" ? customerMenuItems : senderMenuItems;

  return (
    <nav>
      <div className="flex justify-between items-center py-5 px-5 min-w-screen shadow-md">
        <ul className="flex flex-row">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className="px-5 py-2 mx-2 rounded-md border-black hover:bg-black hover:text-white hover:shadow-md"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="right-0">
          {
            <Select
              value={mode}
              onChange={(e) => setMode(e.target.value as string)}
              variant="standard"
              label="Режим"
            >
              <MenuItem value="Customer">Получатель</MenuItem>
              <MenuItem value="Sender">Отправитель</MenuItem>
            </Select>
          }
          <button
            onClick={signout}
            className="text-2xl mx-10 px-2 py-2 rounded-md border-black hover:bg-black hover:text-white hover:shadow-md"
          >
            <MdExitToApp />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
