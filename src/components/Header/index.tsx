import { Button } from "flowbite-react";
import React from "react";
import { BsPersonPlus } from "react-icons/bs";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__title">Contact App</div>
        <div className="header__actions">
          <Button color="info" id="create">
            <div className="header__actions__create">
              <BsPersonPlus size={18} />
              <span className="hidden md:block">Create Contact</span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
