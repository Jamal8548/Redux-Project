import React, { useState } from "react";
import { deleteProduct } from "../redux/actions/productActions";
import { useDispatch } from "react-redux";
import "./productComponent.css";
function DeleteProduct() {
  //   const Deletedata = useSelector((state) => state.deleteProduct);
  //   console.log("I am king", Deletedata);
  const dispatch = useDispatch();
  const [inputField, setInputField] = useState({
    Id: "",
  });

  const inputsHandler = (e) => {
    setInputField(() => ({
      [e.target.name]: e.target.value,
    }));
  };

  function dispatcher() {
    dispatch(deleteProduct(inputField.Id));
    console.log("jamal", inputField);
  }

  return (
    <>
      <div className="FormCreation">
        <h3>Delete An Entry below</h3>
        <input
          type="text"
          name="Id"
          onChange={inputsHandler}
          placeholder="Enter Id"
          value={inputField.Id}
        />
        <div>
          <button class="glow-on-hover" type="button" onClick={dispatcher}>
            Delete it Now
          </button>
        </div>
      </div>
    </>
  );
}

export default DeleteProduct;
