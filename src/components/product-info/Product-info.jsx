import MyButton from "../button/Btn";
import './Product-info.scss';


function InfoProduct() {
  return (
    <>
      <div className="InfoProduct-wrap">
        <div className="InfoProduct-container">
          <div className="InfoProduct-bl left">
            <div className="bl-wrap">
                  <MyButton variant="white">Organic Juice</MyButton>
            </div>
          </div>
          <div className="InfoProduct-bl center">
            <div className="bl-wrap">
               <MyButton variant="white">Organic Food</MyButton>
            </div>
          </div>
          <div className="InfoProduct-bl right">
            <div className="bl-wrap">
                <MyButton variant="white">Nuts Cookis</MyButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoProduct;