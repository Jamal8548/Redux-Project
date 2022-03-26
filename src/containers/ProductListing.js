import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../redux/actions/productActions";
const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  console.log(products);
  return (
    <div className="ui grid container" style={{ marginTop: 80 }}>
      <ProductComponent />
    </div>
  );
};
export default ProductListing;

