import { Page } from "../../components/Page/Page";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import "./Contact.scss";

export const Contact = () => {
  return (
    <Page>
      <div className="background">
        <div className="greeting">
          <h2>Willkommen!</h2>
          <p>
            Danke für Ihr Interesse. Wir freuen uns darauf Ihre Wünsche mit uns
            zu realisieren.
          </p>
          <address>
            <ul className="contact-info">
              <li>
                <a href="mailto:iskenderkaragoez@gmail.com">
                  Iskender Caliskan
                </a>
              </li>
              <li className="">
                <AddIcCallIcon />
                <a href="tel:+491792091572">+49 179 2091572</a>
              </li>
            </ul>
          </address>
        </div>
      </div>
    </Page>
  );
};
