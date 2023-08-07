import React from "react";
import { Avatar, Card, Button } from "flowbite-react";
import { BiTrash, BiEdit } from "react-icons/bi";
import { GridItemsProps } from "../../feature/Contact/types";
import "./grid-items.css";
import { setContactForm } from "../../reducers/contactForm";

const GridItems = ({
  data,
  setShowModal,
  dispatchDataForm,
}: GridItemsProps) => {
  return (
    <div className="grid__content">
      {data.map((item) => {
        return (
          <Card className="max-w-xs" key={item.id}>
            <Avatar
              alt="user_photo"
              img={item.photo === "N/A" ? undefined : item.photo}
              rounded
              size="lg"
            />
            <div className="text-center">
              <span className="contact__name">
                {`${item.firstName} ${item.lastName}`}
              </span>
              <p className="contact__subtitle">{`${item.age} years old`}</p>
            </div>
            <div className="grid__action">
              <Button id="delete" color="light">
                <BiTrash size={20} />
              </Button>
              <Button
                id="edit"
                color="light"
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  setShowModal(true);
                  dispatchDataForm(setContactForm(item));
                }}
              >
                <BiEdit size={20} />
              </Button>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default GridItems;
