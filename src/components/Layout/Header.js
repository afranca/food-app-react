import React from "react";
import mealsImage from '../../assets/meals.jpeg';
import classes from "./Header.module.css";
import HeadCartButton from './HeadCartButton';

const Header = props => {
    return <React.Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeadCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='table full of delicious foods'/>
        </div>

    </React.Fragment>
};

export default Header;