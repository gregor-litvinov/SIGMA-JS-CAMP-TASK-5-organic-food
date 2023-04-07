import "../header/Presentation.scss";
import MyButton from "../button/Btn";

function Presentation() {
  return (
    <>
      <div className="presentationwrapper">
        <div className="container">
          <div className="prasentation-info">
            <h4>100% Natural Food</h4>
            <h2>Choose the best healthier way of life</h2>
            <MyButton>Explore now</MyButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default Presentation;
