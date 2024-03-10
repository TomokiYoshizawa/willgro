import "./Partner.scss";
import artKnapp from "../../../src/assets/logos/art-knapp-logo.jpg";
import crawfords from "../../../src/assets/logos/crawfords-logo.jpg";
import jonsPlant from "../../../src/assets/logos/jons-plant-factory-logo.jpg";
import potters from "../../../src/assets/logos/potters-logo.jpg";
import southlandsNursery from "../../../src/assets/logos/southlands-nursery-logo.jpg";
import vancouverOrchid from "../../../src/assets/logos/vancouver-orchid-society.jpg";

function Partner() {
  //   eventually plan to retreive all image data from own API if I have time
  return (
    <div className="partner">
      <h2 className="partner__header">Our Partners</h2>
      <div className="partner__container">
        <img className="partner__img" src={potters} alt="partner" />
        <img className="partner__img" src={artKnapp} alt="partner" />
        <img className="partner__img" src={vancouverOrchid} alt="partner" />
        <img className="partner__img" src={crawfords} alt="partner" />
        <img className="partner__img" src={southlandsNursery} alt="partner" />
        <img className="partner__img" src={jonsPlant} alt="partner" />
      </div>
    </div>
  );
}

export default Partner;
