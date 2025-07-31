import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import "./card.scss";
import { Button } from "@mui/material";

type ActionAreaCardProps = {
  image: string;
  title: string;
  infotext: string;
  link?: string;
  technologies?: string;
};

export default function ActionAreaCard({
  image,
  title,
  infotext,
  link,
}: ActionAreaCardProps) {
  return (
    <Card
      sx={{ borderRadius: 0, boxShadow: 10, objectFit: "cover" }}
      onClick={() => link && window.open(link, "_blank")}
      className="card"
    >
      <CardActionArea>
        <CardMedia component="img" image={image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {infotext}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
