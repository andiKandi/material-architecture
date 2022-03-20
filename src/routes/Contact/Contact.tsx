import { Page } from "../../components/Page/Page";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import EmailIcon from "@mui/icons-material/Email";
import "./Contact.scss";
import {
  ArchitectProps,
  Architects,
} from "../../components/Architect/Architect";

import Rick from "../../assets/rick.jpg";
import Morty from "../../assets/morty.webp";
import Stewie from "../../assets/stewie.png";

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
    title: "Morderous Baby",
    image: Stewie,
    telephone: "+491792091572",
    email: "..",
  },
];

export const Contact = () => {
  return (
    <Page>
      <div className="background">
        <div className="greeting">
          <h2>Willkommen!</h2>
          <p>
            Danke für Ihr Interesse. Wir freuen uns darauf Ihren Wünsche ein
            Zuhause zu bauen.
          </p>
          <address>
            <ul className="contact-info">
              <li>
                <EmailIcon className="contact-info__icon" />
                <a href="mailto:iskenderkaragoez@gmail.com">
                  Iskender Caliskan
                </a>
              </li>
              <li>
                <AddIcCallIcon className="contact-info__icon" />
                <a href="tel:+491792091572">+49 179 2091572</a>
              </li>
            </ul>
          </address>
        </div>
      </div>
      <Architects architects={architects} />
    </Page>
  );
};
