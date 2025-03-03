import React from "react";
import { useParams } from "react-router-dom";
function CryptoDetail(){
    const {cryptoSymbol, id} = useParams(); // lay tu url
    return (
        <div>
            <h4>CryptoDetail</h4>
            <p>Symbo: {cryptoSymbol}</p>
            <p>Id: {id}</p>
        </div>
    );
}
export default CryptoDetail