import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'

function Checkout() {
  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <img 
                className='checkout__ad'
                src='https://thumbs.dreamstime.com/b/workteam-analyzing-graphs-using-calculator-panoramic-banner-office-218608054.jpg'
                alt='ad was here!!'
            />
            <div>
                <h2 className='checkout__title'>Your shopping basket</h2>
            </div>
        </div>
        <div className='checkout__right'>
            <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout