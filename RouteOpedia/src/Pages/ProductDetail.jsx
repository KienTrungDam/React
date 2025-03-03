import React from "react";
import { useParams } from "react-router-dom";
function ProductDetail(){
    const {productid} = useParams();
    return (
        <div>
            <h1>Product detail</h1>
            <h2>id: {productid}</h2>
        </div>
    )
}
export default ProductDetail