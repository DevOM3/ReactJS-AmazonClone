import './Home.css';
import React from 'react';
import Product from './Product';

const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />

                <div className="home__row">
                    <Product
                        id="1234567891"
                        title="Acer Nitro 5 Intel Core i5-10300H 15.6-inch Full HD IPS 1920 x 1080 144Hz Display Gaming Notebook (8GB Ram/1TB HDD + 256GB SSD/Windows 10 Home/GTX 1650Ti Graphics/Obsidian Black/2.3 kgs), AN515-55"
                        price={700}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/71%2BkGr%2B5LrL._SL1500_.jpg"
                    />
                    <Product
                        id="1234567892"
                        title="Apple iPhone 11 Pro Max (512GB) - Space Grey"
                        price={1499}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/61tuQdl2yLL._SL1024_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="1234567893"
                        title="Samsung Galaxy Note 20 Ultra 5G (Mystic Black, 12GB RAM, 256GB Storage) with No Cost EMI/Additional Exchange Offers"
                        price={999}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/81frwlzRG5L._SL1500_.jpg"
                    />
                    <Product
                        id="1234567894"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi + Cellular, 1TB) - Silver (4th Generation)"
                        price={1299}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/81sL%2Bb9%2BCtL._SL1500_.jpg"
                    />
                    <Product
                        id="1234567895"
                        title="No Doubt Gaming PC Computer AMD Ryzen 5 (32 GB RAM DDR4/ 1TB Hard Disk/240GB SSD/ 8GB Graphics Card) (Gaming PC) (OC Gaming GDDR5 8GB Graphics Card, 3 RGB Cooling Fans)"
                        price={799}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/71mwrBp2YsL._SL1500_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="1234567896"
                        title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
                        price={1599}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/81vlA84pg6L._SL1500_.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;
