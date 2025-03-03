import React from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Product(){
    const navigate = useNavigate();
    const [goToProduct, setGotoProduct] = useState(() => {
        return false;
    });
    return (
        <div>
            <div>Product here</div>
            <button onClick={() => {navigate("/product/create")}}>Add Product</button>
            <Link to={"/product/detail/100"}>
                <button>Product - Deatil - 100</button>
            </Link>
            {goToProduct && <Navigate to="/product/detail/10"/>}
            <button onClick={() => {
                setGotoProduct({goToProduct: true})
            }}>
            Negative to Product 10
            </button>
        </div>
        

    )
}
export default Product