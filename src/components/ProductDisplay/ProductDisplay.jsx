import React, {useContext} from "react";
import './ProductDisplay.css';
import {ShopContext} from "../../context/BarContext";
const ProductDisplay = (props) => {
    const product = props.product[0];
    const {addToCart,url} = useContext(ShopContext);

    const displayIngredients = (text) => {
        const ingredients = text.split(',');
        const ingredientsList = ingredients.map((ingredient, index) => {
            return <li key={index}>{ingredient.trim()}</li>;
        });
        return (
            <ul>
                {ingredientsList}
            </ul>
        );
    }

    return(
        <div className='productdisplay'>
            <div className='productdisplay-left'>
                <div className='productdisplay-img'>
                    <img className='productdisplay-main-img' src={url+'/images/'+product.image} alt=''/>
                </div>
            </div>
            <div className='productdisplay-right'>
                <h1>{product.name}</h1>
                <div className='productdisplay-right-price'>
                    {product.price} руб.
                </div>
                <div className='productdisplay-right-ingridients'>
                    {/*<h2>Ингридиенты:</h2>
                    {displayIngredients(product.description)}*/}
                    {product.description}
                </div>
                <button onClick={()=>{addToCart(product._id)}}>Добавить в корзину</button>
            </div>
        </div>
    );
}

export default ProductDisplay;