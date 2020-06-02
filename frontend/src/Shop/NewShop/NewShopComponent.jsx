import React from "react";
import axios from "axios";



const NewShopComponent = () => {
    const submit = () => {
        
        const qs = require("qs");
        axios.post("http://localhost:3001/shops",qs.stringify({shop: {shop_name: "aaaaaaa"}}))

        .then(response => {
            const data = response.data;
            console.log(data);
        })
        .catch(data => {
            console.log(data);
        })
    }
    return (
        <div>
            店名<input type="text"></input>
            住所<input type="text"></input>
            営業日<input type="text"></input>
            定休日<input type="text"></input>

            <input 
            type="submit"
            onClick={() => submit()}
            ></input>
        </div>
    )
}

export default NewShopComponent;