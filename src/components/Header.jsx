import logo from "../assets/logo.png";
import { useState } from "react";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between items-center shadow-lg w-[100%]">
      <img src={logo} className=" w-16 " />
      <div className="flex">
        <ul className="flex justify-between mx-4 ">
          <li>
            <FontAwesomeIcon icon="fa-solid fa-xmark" />
          </li>
          <li className="m-4 "></li>
          <li className="m-4 ">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="m-4 ">Home</li>
          <li className="m-4 ">About Us</li>
          <li className="m-4 ">Contact Us</li>
          <li className="m-4 ">Cart</li>

          <button
            className="bg"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
