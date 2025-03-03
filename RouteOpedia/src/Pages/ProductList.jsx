import React from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function ProductList(){
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={() => {navigate("/product/create")}}>Add Product</button>
        </div>
    )
} 
export default ProductList