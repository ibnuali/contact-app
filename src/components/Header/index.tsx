import { Button } from "flowbite-react";
import React from "react";
import { BsPersonPlus } from "react-icons/bs";
import "./header.css";
import { HeaderProps } from "../types";
import { resetContactForm } from "../../reducers/contactForm";

const Header = (props: HeaderProps) => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__title">Contact App</div>
        <div className="header__actions">
          <Button
          data-testid="create-button"
            color="info"
            id="create"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              props.setModalName(e.currentTarget.id);
              props.setShowModal(true);
              props.dispatchDataForm(resetContactForm());
            }}
          >
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
