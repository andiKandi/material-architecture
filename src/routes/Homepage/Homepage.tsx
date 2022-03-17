import * as React from "react";
import { Page } from "../../components/Page/Page";
import "./Homepage.scss";
import { NewsProjects } from "./NewsProjects";
import { Citation } from "../../components/Citation/Citation";

const citation = {
  saying: '"Damit Ihre Wünsche ein Zuhause finden."',
  author: "Iskender Caliskan",
};

export const Homepage: React.FC = () => {
  return (
    <Page>
      <NewsProjects />
      <Citation saying={citation.saying} author={citation.author} />
    </Page>
  );
};
