import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { ImageListItemBar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import News from "../../assets/news.jpg";
import Project_1 from "../../assets/project_1.jpeg";
import Project_2 from "../../assets/project_2.jpg";
import Project_3 from "../../assets/project_3.jpg";
import Project_4 from "../../assets/project_4.jpg";
import Project_5 from "../../assets/project_5.jpg";

export const NewsProjects = () => {
  function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

  const itemData = [
    {
      img: News,
      title: "News",
      subtitle: "Learn about our current endeavours",
      rows: 2,
      cols: 2,
    },
    {
      img: Project_1,
      title: "Project: Feel the wave",
      subtitle: "@Iskender Caliskan",
    },
    {
      img: Project_2,
      title: "Project: Glas cubes",
      subtitle: "@Iskender Caliskan",
    },
    {
      img: Project_3,
      title: "Project: Spirals",
      subtitle: "@Iskender Caliskan",
      cols: 2,
    },
    {
      img: Project_4,
      title: "Project: Close to Water",
      subtitle: "@Iskender Caliskan",
      rows: 2,
      cols: 2,
    },
    {
      img: Project_5,
      title: "Project: Cellular Living",
      subtitle: "@Iskender Caliskan",
      rows: 2,
      cols: 2,
    },
  ];

  return (
    <ImageList
      sx={{ width: "auto", height: "auto" }}
      variant="quilted"
      cols={4}
      rowHeight={250}
      gap={15}
    >
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <img
            {...srcset(item.img, 250, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.subtitle}
            actionIcon={
              <IconButton
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
