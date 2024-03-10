import "./Story.scss";
import storyimage from "../../assets/image/story.jpg";

function Story() {
  return (
    <div className="story">
      <div className="story__wrapper">
        <div className="story__img-container">
          <img src={storyimage} alt="plant" className="story__img-tablet" />
        </div>
        <div className="story__disc-container">
          <h3 className="story__heading">Our Story</h3>
          <p className="story__txt">
            <span className="story__txt--highlight">WillGro</span> is a locally
            owned and operated wholesale distributor of orchid and plant media.
          </p>
          <p className="story__txt">
            Our product line is based on 20 years of commercial orchid growing
            experience in Canada.
          </p>
          <p className="story__txt">
            We have a complete product line to meet the needs of even the most
            sophisticated hobbyists; along with product care sheets and articles
            to help.
          </p>
        </div>
      </div>
      <img src={storyimage} alt="plant" className="story__img-mobile" />
    </div>
  );
}

export default Story;
