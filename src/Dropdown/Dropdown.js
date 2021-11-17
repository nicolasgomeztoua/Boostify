import React, { useState } from "react";
import "./Dropdown.css";
import ProdMenu from "../ProdMenu/ProdMenu";

const Dropdown = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      > 
      <ProdMenu/>
      </ul>
    </>
  );
};

export default Dropdown;
