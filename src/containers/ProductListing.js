import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../redux/actions/productActions";
import NewProductImplementation from "./NewProductImplementation";
import CreateProduct from "./NewProduct";
import DeleteProduct from "./deleteProduct";
const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  console.log(products);
  return (
    <div>
      <CreateProduct />
      <DeleteProduct />
      <h3 style={{ textAlign: "center", marginTop: 50 }}>
        Click any of the items from below for more details
      </h3>
      <div className="ui grid container" style={{ marginTop: 40 }}>
        <NewProductImplementation />
        <ProductComponent />
      </div>
    </div>
  );
};
export default ProductListing;
