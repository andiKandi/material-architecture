import { Page } from "../../components/Page/Page";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import EmailIcon from "@mui/icons-material/Email";
import "./Contact.scss";
import {
  ArchitectProps,
  Architect,
} from "../../components/Architect/Architect";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import Rick from "../../assets/rick.jpg";
import Morty from "../../assets/morty.webp";
import Stewie from "../../assets/stewie.png";
import React from "react";

const architects: ArchitectProps[] = [
  {
    name: "Rick Sanches",
    title: "Scientist",
    image: Rick,
    telephone: "+491792091572",
    email: "..",
  },
  {
    name: "Morty Smith",
    title: "Teenager",
    image: Morty,
    telephone: "+491792091572",
    email: "..",
  },
  {
    name: "Stewie Griffin",
    title: "Murderous Baby",
    image: Stewie,
    telephone: "+491792091572",
    email: "..",
  },
];

export const Contact = () => {
  return (
    <Page>
      <Box className="background">
        <Paper elevation={3} className="greeting">
          <h2>Willkommen!</h2>
          <p>
            Danke für Ihr Interesse. Wir freuen uns darauf Ihren Wünsche ein
            Zuhause zu bauen.
          </p>
          <address>
            <ul className="contact-info">
              <li className="contact-info__list-item">
                <EmailIcon className="contact-info__icon" />
                <a href="mailto:iskenderkaragoez@gmail.com">
                  Iskender Caliskan
                </a>
              </li>
              <li className="contact-info__list-item">
                <AddIcCallIcon className="contact-info__icon" />
                <a href="tel:+491792091572">+49 179 2091572</a>
              </li>
            </ul>
          </address>
        </Paper>
      </Box>
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
    </Page>
  );
};
