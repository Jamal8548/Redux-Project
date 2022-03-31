import React from "react";
import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./productComponent.css";
const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const DeleteId = useSelector((state) => state.deleteProduct);
  console.log("jamal", DeleteId);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    if (DeleteId.data?.id === id) return null;
    return (
      <div style={{ marginBottom: 90 }} className="checkitout">
        <Link to={`/product/${id}`}>
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
                  ID:{id}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
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
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};
export default ProductComponent;
