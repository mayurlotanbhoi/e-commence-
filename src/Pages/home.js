import React from "react";
import { Electronics, Fashion, TVsAppliances } from "../Components/HomeProDB";
import {
  Banners1,
  underPrice,
  pairs1,
  pairs2,
  BannerCards,
} from "../Components/BannerDB";
import {
  NavBar,
  SubNavBar,
  HomeSlider,
  HomePruduct,
  Banner,
  BannerCard,
  Footer,
} from "../Components/index";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#f1f3f6", width: "100vw", height: "100%" }}>
      {/* <NavBar />
      <SubNavBar /> */}
      <HomeSlider />
      <HomePruduct Electronics={Electronics} />
      <Banner banner={Banners1} />
      <HomePruduct Electronics={Fashion} />
      <Banner banner={Banners1} />
      <BannerCard banner={BannerCards} />
      <HomePruduct Electronics={TVsAppliances} />
      <Banner banner={underPrice} />
      <Banner banner={Banners1} />
      <BannerCard banner={BannerCards} />
      <HomePruduct Electronics={Fashion} />
      <HomePruduct Electronics={TVsAppliances} />
      <Banner banner={pairs1} />
      <Banner banner={pairs2} />
      <BannerCard banner={BannerCards} />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
