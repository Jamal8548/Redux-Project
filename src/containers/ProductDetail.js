import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeselectedProduct,
  fetchProduct,
} from "../redux/actions/productActions";
const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { id, title, image, price, category } = product;
  console.log("jamal", product);
  const dispatch = useDispatch();
  const { productId } = useParams();

  useEffect(() => {
    if (productId && productId !== "") dispatch(fetchProduct(productId));
    return () => {
      dispatch(removeselectedProduct());
    };
  }, [productId]);

  return (
    <>
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div style={{ marginTop: 50 }}>
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
};
export default ProductDetail;
