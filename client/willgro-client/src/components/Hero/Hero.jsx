import heroImg from "../../assets/image/plants-hero.png";

import "./Hero.scss";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__wrapper">
        <div className="hero__img-box">
          <img src={heroImg} alt="hero" className="hero__img" />
        </div>
        <div className="hero__disc-box">
          <h3 className="hero__heading">Let's plant seeds together</h3>
          <p className="hero__text">
            Grow beautiful plants all year long with our specialty blended plant
            media!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
