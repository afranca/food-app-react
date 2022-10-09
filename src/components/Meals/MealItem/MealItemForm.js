import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';
//import CartContext from '../../../store/cart-context';
//import { useContext } from 'react';
import { useRef, useState } from 'react';

const MealItemForm = (props) =>{

    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = (event) =>{
          // preventDefault() avoids the default behavious
        // which is a page reload
        event.preventDefault();

        // get value as String and converts to Number
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        

        if (enteredAmount.trim().length === 0 || 
            enteredAmountNumber < 1 || 
            enteredAmountNumber > 5){
                console.log("**invalid** enteredAmountNumber:"+enteredAmountNumber);
                setAmountIsValid(false);
                return;
        }

        // Calls function to add to Context (code is 
        // in a different component)
        props.onAddToCart(enteredAmountNumber);

    }
   
    return <form className={classes.form}  onSubmit={submitHandler}>
        <Input 
            ref={amountInputRef}
            label='Amount' 
            input={{
            id: 'amount_'+props.id,
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1'
        }}/>
        <button>+ Add</button>
        {!amountIsValid && <p>Please enter a valid amount [1-5].</p>}
    </form>

};

export default MealItemForm;
