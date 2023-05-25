import React from "react";
import './index.css'
import axios from "axios";

function MainPage()
{
    const [products, setProducts] = React.useState([]);
    React.useEffect(
        function() {
            axios.get("https://71e616d0-915f-4bda-aaa6-9ba62f3473c2.mock.pstmn.io/products")
                .then(function (result) {
                    const products = result.data.products;
                    setProducts(products);

                    //console.log(result);
                }).catch(function (error) {
                console.error('에러 발생 : ', error);
            });
        },[]);

    return (
        <div>
            <div id="header">
                <div id="header-area">
                    <img src="images/icons/bside_logo.png"/>
                </div>
            </div>
            <div id ="body">
                <div id="banner">
                    <img src="images/banners/bn1.png"/>
                </div>
                <h1>진행중 캠페인</h1>
                <div id="campaign-list">
                    {
                        products.map(function (product, index){
                            return (
                                <div className="campaign-card">
                                    <div>
                                        <img className="campaign-img" src={product.imageUrl}/>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div id="footer"></div>
        </div>
    );
}
export default MainPage;