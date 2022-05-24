import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img
                className='home__image'
                src="https://m.media-amazon.com/images/I/6177-8UXEiL._SX1500_.jpg"
                alt='banner'
            />
            <div className='home__row'>
                <Product 
                    id='12321341'
                    title='The Lean Startup:How Constant Innovation
                    Creates Radically Successful Businesses
                    Paperback' 
                    price={29.99}
                    image='https://1.bp.blogspot.com/-T-d3JPMr-Uk/UPshLuidy6I/AAAAAAAAFbU/vOiHd0qgnC4/s1600/lean-startup_book-cover.jpeg'
                    rating={3} 
                    />
                <Product
                    id="49538094"
                    title="Kenwood kMix Stand Mixer for
                    Baking, Stylish Kitchen Mixer with
                    K-beater, Dough Hook and Whisk, 5 Litre
                    Glass Bowl"
                    price={239.0}
                    rating={4}
                    image="https://www.toptopdeal.co.uk/wp-content/uploads/2021/04/toptopdeal-uk-Kenwood-0W20011139-kMix-Stand-Mixer-for-Baking-Stylish-Kitchen-Mixer-with-K-beater-768x768.jpg" 
                    />
            </div>
            <div className='home__row'>
            <Product
                id="4903850"
                title="Samsung LC49RG90SSUXEN 49 Curved LED Gaming Monitor"
                price={199.99}
                rating-3
                image="https://images.samsung.com/is/image/samsung/be-curved-qled-monitor-c49rg9-lc49rg90ssuxen-dynamicsilver-158147792?$PD_GALLERY_JPG$"
            />
            <Product
                id="23445930"
                title="Amazon Echo(3rd generation)|Smart speaker with Alexa,Charcoal Fabric"
                price={98.99}
                rating={5}
                image="https://1.bp.blogspot.com/-hZXOnpf7_AU/Xt9HOhbz8EI/AAAAAAAAAcI/EO0vJa-ZDqgDqn7f9IEQOmh0dPX9wLk6gCK4BGAsYHg/s1100/7128HRanJgL._SL1100_.jpg"
            />
            <Product
                id="3254354345"
                title="New Apple iPad Pro(12.9-inch,Wi-Fi,128GB)Silver(4th Generation)"
                price={598.99}
                rating={4}
                image="https://www.luluhypermarket.com/medias/1696929-01.jpg-515Wx515H?context=bWFzdGVyfGltYWdlc3w5MTU1MnxpbWFnZS9qcGVnfGltYWdlcy9oYzMvaGI0L2gwMC85NDM1NzIyMDg4NDc4LmpwZ3xmOTk0NGQ1MzBkN2I3N2ExOGU1MmUzMWFlNGZjYjJiZTMwN2MwYjAwODc1ZThiYjQxY2MzOTlkMDcyZDE3NzU1"
                />
            </div>
            <div className='home__row'>
            <Product
                id="90829332"
                title="Beats by Dr. Dre Studio2 Wireless Headphones MHAJ2AM/B B&H Photo"
                price={864.98}
                rating={5}
                image="https://www.bhphotovideo.com/images/images2500x2500/beats_by_dr_dre_900_00198_01_studio_wireless_headphones_matte_1016367.jpg"
            />
            </div>
        </div>
    </div>
  )
}

export default Home