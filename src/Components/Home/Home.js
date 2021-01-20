import React from "react";
import Product from "../Product/Product";
import "./Home.css";

function Home({ title, price, rating, img }) {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/GWphase3/V4/Phase3_Unrec_PC_Hero_ENGLISH_1X._CB417898155_.jpg"
                />

                <div className="home__row">
                    <Product
                        id="2434554"
                        title="Apple iPhone 11 Pro Max (512GB) - Space Grey"
                        price="1899"
                        rating="5"
                        img="https://m.media-amazon.com/images/I/61tuQdl2yLL._AC_UY218_.jpg"
                    />
                    <Product
                        id="4546569"
                        title="OnePlus 8 Pro (Onyx Black 12GB RAM+256GB Storage)"
                        price="799"
                        rating="4"
                        img="https://images-eu.ssl-images-amazon.com/images/I/41XZvmPDumL._AC_US160_FMwebp_QL70_.jpg"
                    />
                    <Product
                        title="One Arranged Murder Kindle Edition"
                        price="120"
                        rating="4"
                        img="https://m.media-amazon.com/images/I/51bEZsKtMzL.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="24346546"
                        title="Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz 9th Gen Intel Core i7) - Space Grey"
                        price="1699"
                        rating="5"
                        img="https://m.media-amazon.com/images/I/71L2iBSyyOL._AC_UY218_.jpg"
                    />

                    <Product
                        title="Canon EOS 1500D 24.1 Digital SLR Camera (Black) with EF S18-55 is II Lens, 16GB Card and Carry Case"
                        price="699"
                        rating="5"
                        img="data:image/webp;base64,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"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="0867854"
                        title="Samsung 189 cm (75 inches) 4K Ultra HD Smart LED TV UA75TU8000KXXL (Black) (2020 Model)"
                        price="2000"
                        rating="5"
                        img="https://images-na.ssl-images-amazon.com/images/I/917QAUQorDL._SL1500_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="2434554"
                        title="Apple Watch Series 5 (GPS + Cellular, 44mm) - Space Gray Aluminium Case with Black Sport Band"
                        price="999"
                        rating="4"
                        img="https://m.media-amazon.com/images/I/71fp5ankbqL._AC_UL320_.jpg"
                    />
                    <Product
                        id="4546569"
                        title="OnePlus 8 Pro (Onyx Black 12GB RAM+256GB Storage)"
                        price="799"
                        rating="4"
                        img="https://images-eu.ssl-images-amazon.com/images/I/41XZvmPDumL._AC_US160_FMwebp_QL70_.jpg"
                    />
                    <Product
                        id="45463339"
                        title="Samsung Galaxy S10 (Black, 8GB RAM, 128GB Storage)"
                        price="1299"
                        rating="4"
                        img="https://images-na.ssl-images-amazon.com/images/I/61UVx2wvzOL._SY741_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="2434554"
                        title="adidas Men's Hellion Z M Running Shoes"
                        price="120"
                        rating="3"
                        img="https://images-na.ssl-images-amazon.com/images/I/91r7GKRRxcL._UX500_.jpg"
                    />
                    <Product
                        id="4546569"
                        title="OnePlus 8 Pro (Onyx Black 12GB RAM+256GB Storage)"
                        price="799"
                        rating="4"
                        img="https://images-eu.ssl-images-amazon.com/images/I/41XZvmPDumL._AC_US160_FMwebp_QL70_.jpg"
                    />
                    <Product
                        title="One Arranged Murder Kindle Edition"
                        price="120"
                        rating="4"
                        img="https://m.media-amazon.com/images/I/51bEZsKtMzL.jpg"
                    />
                    <Product
                        id="4546569"
                        title="OnePlus 8 Pro (Onyx Black 12GB RAM+256GB Storage)"
                        price="799"
                        rating="4"
                        img="https://images-eu.ssl-images-amazon.com/images/I/41XZvmPDumL._AC_US160_FMwebp_QL70_.jpg"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
