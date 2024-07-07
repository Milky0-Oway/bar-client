import React, {useContext} from "react";
import './FoodCategory.css'
import {ShopContext} from "../../context/BarContext";
import Item from "../../components/Item/Item";
import MenuCategories from "../../components/MenuCategories/MenuCategories";

const FoodCategory = (props) => {
    const {allProducts} = useContext(ShopContext);
    return(
        <div className='food-category'>
            {/*<div className='foodcategory-sort'>
                Sort by <img src='' alt=''/>
            </div>*/}
            <MenuCategories/>
            <div className='foodcategory-products'>
                {allProducts.map((item, i)=>{
                    if(props.category === item.category){
                        return <Item key={i} id={item._id} name={item.name} image={item.image} price={item.price}/>
                    }
                    else{
                        return null;
                    }
                })}
            </div>
        </div>
    );
}

export default FoodCategory;