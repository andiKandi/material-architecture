import React from "react";
import "./Architect.scss";

export interface ArchitectProps {
  name: string;
  title: string;
  image: string;
  telephone: string;
  email: string;
}

const Architect: React.FC<ArchitectProps> = ({
  name,
  telephone,
  email,
  title,
  image,
}) => {
  return (
    <div className="architect">
      <img className="architect__picture" src={image} alt={name} />
      <p>{name}</p>
      <p>{title}</p>
    </div>
  );
};

interface ArchitectsProps {
  architects: ArchitectProps[];
}

export const Architects: React.FC<ArchitectsProps> = ({ architects }) => {
  return (
    <div className="architects">
      {architects.map((architect) => {
        return (
          <Architect
            key={architect.name}
            name={architect.name}
            title={architect.title}
            image={architect.image}
            telephone={architect.telephone}
            email={architect.email}
          />
        );
      })}
    </div>
  );
};
