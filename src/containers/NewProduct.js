import React, { useState } from "react";
import { create_product } from "../redux/actions/productActions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./productComponent.css";
function CreateProduct() {
  const dispatch = useDispatch();
  const [inputField, setInputField] = useState({
    Id: "",
    title: "",
    image: "",
    category: "",
    price: "",
  });

  const inputsHandler = (e) => {
    setInputField((inputField) => ({
      ...inputField,
      [e.target.name]: e.target.value,
    }));
  };

  function dispatcher() {
    dispatch(create_product(inputField));
  }

  return (
    <>
      <div className="FormCreation">
        <h3>Create An Entry below</h3>
        <div>
          <input
            type="text"
            name="Id"
            onChange={inputsHandler}
            placeholder="Enter Id"
            value={inputField.Id}
          />

          <br />
          <input
            type="text"
            name="title"
            onChange={inputsHandler}
            placeholder="Enter Title"
            value={inputField.title}
          />

          <br />

          <input
            type="text"
            name="image"
            onChange={inputsHandler}
            placeholder="Enter ImageLink"
            value={inputField.image}
          />

          <br />
          <input
            type="text"
            name="category"
            onChange={inputsHandler}
            placeholder="Enter Category"
            value={inputField.category}
          />
          <br />
          <input
            type="text"
            name="price"
            onChange={inputsHandler}
            placeholder="Enter Price"
            value={inputField.price}
          />

          <br />

          <button class="glow-on-hover" type="button" onClick={dispatcher}>
            Create it Now
          </button>
        </div>
      </div>
    </>
  );
}

export default CreateProduct;
