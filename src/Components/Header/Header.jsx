import React from "react";
import { ReactComponent as Logo } from "../../Assets/logo.svg";
import HeaderContactUs from "../HeaderContactUs/HeaderContactUs";
import styles from "./Header.module.css";
import Navbar from "../Navbar/Navbar"

const Header = () => {
  return (
      <div className={styles.wrapper}>
        <Logo/>
        <Navbar/>
        <HeaderContactUs />
      </div>
  );
};

export default Header;
