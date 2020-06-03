import React, {useEffect} from "react";
import { useForm } from "react-hook-form";
import axios from "axios";



const NewShopComponent = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
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
    }

    useEffect(() => {
        const script = document.createElement("script");
        script.src   = "https://zipaddr.github.io/zipaddra.js"
        script.charset  = "UTF-8";
        script.async = true;
        document.body.append(script);
    });


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                {errors.shopName && "店名の入力は必須です。"}<br />
                店名　　　<input type="text" name="shopName" ref={register({ required: true })} /><br />
                
                {errors.AddressNumber && "郵便番号の入力は必須です。"}<br />
                郵便番号　<input type="text" name="zipcode1" id="zipcode1" placeholder="例：101" ref={register({ required: true })} /> - <input type="text" name="zipcode2" id="zipcode2" placeholder="例：0021" ref={register({ required: true })} /><br />
                
                {errors.prefecture && "都道府県の入力は必須です。"}<br />
                都道府県　<select name="prefecture" id="prefecture" size="1" ref={register({ required: true })}>
                            <option value="">---選択</option>
                            <option value="1">北海道</option>
                            <option value="2">青森県</option>
                            <option value="3">岩手県</option>
                            <option value="4">宮城県</option>
                            <option value="5">秋田県</option>
                            <option value="6">山形県</option>
                            <option value="7">福島県</option>
                            <option value="8">茨城県</option>
                            <option value="9">栃木県</option>
                            <option value="10">群馬県</option>
                            <option value="11">埼玉県</option>
                            <option value="12">千葉県</option>
                            <option value="13">東京都</option>
                            <option value="14">神奈川県</option>
                            <option value="15">新潟県</option>
                            <option value="16">富山県</option>
                            <option value="17">石川県</option>
                            <option value="18">福井県</option>
                            <option value="19">山梨県</option>
                            <option value="20">長野県</option>
                            <option value="21">岐阜県</option>
                            <option value="22">静岡県</option>
                            <option value="23">愛知県</option>
                            <option value="24">三重県</option>
                            <option value="25">滋賀県</option>
                            <option value="26">京都府</option>
                            <option value="27">大阪府</option>
                            <option value="28">兵庫県</option>
                            <option value="29">奈良県</option>
                            <option value="30">和歌山県</option>
                            <option value="31">鳥取県</option>
                            <option value="32">島根県</option>
                            <option value="33">岡山県</option>
                            <option value="34">広島県</option>
                            <option value="35">山口県</option>
                            <option value="36">徳島県</option>
                            <option value="37">香川県</option>
                            <option value="38">愛媛県</option>
                            <option value="39">高知県</option>
                            <option value="40">福岡県</option>
                            <option value="41">佐賀県</option>
                            <option value="42">長崎県</option>
                            <option value="43">熊本県</option>
                            <option value="44">大分県</option>
                            <option value="45">宮崎県</option>
                            <option value="46">鹿児島県</option>
                            <option value="47">沖縄県</option>
                            <option value="99">海外</option>
                        </select><br />
                
                {errors.city && "市町村の入力は必須です。"}<br />
                市町村　　<input type="text" name="city" ref={register({ required: true })} /><br />
                
                {errors.block && "番地の入力は必須です。"}<br />
                番地　　　<input type="text" name="address" id="address" ref={register({ required: true })} /><br />
                
                <br />
                建物　　　<input type="text" name="building" ref={register} /><br />

                <input type="submit"/>
            </form>
        </>
    )
}

export default NewShopComponent;