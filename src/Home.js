import React from "react";
import "./Home.css";

import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE_XSite_3000x1200_PV_en-GB._CB409516232_.jpg"
        alt=""
      />

      <div className="home__row">
        <Product
          id="1"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/51WIKlio9qL._SY346_.jpg"
        />
        <Product
          id="2"
          title="The Boring Startup: How Constant Innovation Creates Radically Successful Business Paperback"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/51WIKlio9qL._SY346_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="3"
          title="Tribe of Mentors: How Constant Innovation Creates Radically Successful Business Paperback"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/51WIKlio9qL._SY346_.jpg"
        />
        <Product
          id="4"
          title="Storyworthy: How Constant Innovation Creates Radically Successful Business Paperback"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/51WIKlio9qL._SY346_.jpg"
        />
        <Product
          id="5"
          title="Principles: How Constant Innovation Creates Radically Successful Business Paperback"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/51WIKlio9qL._SY346_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="6"
          title="Zero to One: How Constant Innovation Creates Radically Successful Business Paperback"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/51WIKlio9qL._SY346_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
