import React from "react";
import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import "./productComponent.css";
function NewProductImplementation() {
  const data = useSelector((state) => state.createIT);
  console.log("check it", { data });
  if (data == 0) return console.log(true);
  const { id, image, title, price, category } = data;

  return (
    <>
      {Object.keys(data).length === 1 ? null : (
        <div className="checkitout">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="440"
                image={image}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  ID:0
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price:{price}$
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Category:{category}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      )}
    </>
  );
}

export default NewProductImplementation;
