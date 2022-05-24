import React, { useState } from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'

function ExpenseItem(props) {
    // title is the first value, and setTitle is the updating function returned by useState
    const [title] = useState(props.title);  // react hooks

    // const clickHandler = () => {
    //     setTitle('Updated');
    //     console.log(title);
    // } 

    return (
        <Card className='expense-item'>
            <div><ExpenseDate date={props.date}/></div>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
            {/* <button onClick={clickHandler}>Change Title</button> */}
        </Card>
    );
}

export default ExpenseItem;