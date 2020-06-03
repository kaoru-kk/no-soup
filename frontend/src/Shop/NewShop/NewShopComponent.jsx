import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";



const NewShopComponent = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        const qs = require("qs");
        const params = qs.stringify({shop: {
                                            shop_name: data.shopName,
                                            address_number: data.AddressNumber,
                                            prefecture: data.prefecture,
                                            city: data.city,
                                            block: data.block,
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
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                {errors.shopName && "店名の入力は必須です。"}<br />
                店名　　　<input type="text" name="shopName" ref={register({ required: true })} /><br />
                
                {errors.AddressNumber && "郵便番号の入力は必須です。"}<br />
                郵便番号　<input type="text" name="AddressNumber" ref={register({ required: true })} /><br />
                
                {errors.prefecture && "都道府県の入力は必須です。"}<br />
                都道府県　<input type="text"name="prefecture" ref={register({ required: true })} /><br />
                
                {errors.city && "市町村の入力は必須です。"}<br />
                市町村　　<input type="text" name="city" ref={register({ required: true })} /><br />
                
                {errors.block && "番地の入力は必須です。"}<br />
                番地　　　<input type="text" name="block" ref={register({ required: true })} /><br />
                
                <br />
                建物　　　<input type="text" name="building" ref={register({ required: true })} /><br />

                <input type="submit"/>
            </form>
        </>
    )
}

export default NewShopComponent;