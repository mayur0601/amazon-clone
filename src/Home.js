import React from "react";
import "./Home.css";
import Home_img from "./amazon_prime.png";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img className="home_image" src={Home_img} alt="not loaded" />

        <div className="home_row">
          <Product
            id="1234"
            title="the lean startup"
            price={675.75}
            image="https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            id="3456"
            title="Usha Janome Dream Stitch Automatic Zig-Zag Electric Sewing Machine (White And Blue)"
            price={9999.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81XT7EZvdBL._SL1500_.jpg"
            rating={3}
          />
        </div>
        <div className="home_row">
          <Product
            id="3458"
            title="Echo Dot (3rd Gen) – New and improved smart speaker with Alexa (Grey)"
            image="https://images-na.ssl-images-amazon.com/images/I/61RyEv5mnNL._SL1100_.jpg"
            rating={4}
            price={3000}
          />
          <Product
            id="345678"
            title="Apple Watch Series 5 (GPS + Cellular, 44mm) - Space Gray Aluminium Case with Black Sport Band"
            image="https://images-na.ssl-images-amazon.com/images/I/71fp5ankbqL._SL1500_.jpg"
            rating={4}
            price={20000}
          />
          <Product
            id="344576"
            title="Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz 9th Gen Intel Core i7) - Space Grey"
            image="https://images-na.ssl-images-amazon.com/images/I/71L2iBSyyOL._SL1500_.jpg"
            rating={4}
            price={199000.99}
          />
        </div>
        <div className="home_row">
          <Product
            id="343456"
            title="Mi TV 4X 138.8 cm (55 Inches) Ultra HD Android LED TV (Black)"
            image="https://images-na.ssl-images-amazon.com/images/I/71TnQAWM2tL._SL1500_.jpg"
            rating={4}
            price={25000.98}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
