import { Page } from "../../components/Page/Page";
import Handshake from "../../assets/handshake.webp";

export const Contact = () => {
  return (
    <Page>
      <div>
        <img
          className="background"
          src={Handshake}
          alt=""
          role="presentation"
        />
      </div>
    </Page>
  );
};
