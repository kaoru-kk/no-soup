
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Form from "../../FormComponent/Form";
import Input from "../../FormComponent/Input";
import Address from "../../Address/ShopAddressComponent";

export default function Forms(){
    const onSubmit = (data) =>{
        const qs = require("qs");
        console.log(data);
        const params = qs.stringify({shop: {
                                            shop_name: data.shopName,
                                            address_number: data.zipcode1 + data.zipcode2 ,
                                            prefecture: data.prefecture,
                                            city: data.city,
                                            block: data.address,
                                            building: data.building
                                        }})
        axios.post("http://localhost:3001/shops",params)

        .then(response => {
            const data = response.data;
            console.log(data);
        })
        .catch(data => {
            console.log(data);
        })
    };

    return (
        <>
            <h1>店舗情報入力</h1>
            <Form onSubmit={onSubmit}>
            <span>お店の名前</span>
            <Input name="shopName" />
            <Address name="Address" />
            <Input type="submit" value="Submit" />
            </Form>
        </>
    );
}