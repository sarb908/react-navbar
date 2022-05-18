import React from "react";
import Logo from "./Logo";
import Button from "./Button";
import Link from "./link";
import Style from "./Nav.module.css";
const NavBar = (props) => {
  let links = ["Services", "Projects", "About"];

  return (
    <div className={Style.nav}>
      <Logo logo="LOGOBAKERY" />
      <div className={Style.link}>
        {links.map((linkss) => (
          <Link link={linkss} />
        ))}
      </div>
      <Button content="Contact" />
    </div>
  );
};
export default NavBar;
