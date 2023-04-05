import MyButton from "../batton/Btn";
import './Subscribe.scss';


function Subscribe() {
  return (
    <>
         <div class="subscribe">
          <h2 class="title">
           Subscribe to our Newsletter

          </h2>
          <div class="contact">
            <div><input type="text" placeholder="Your Email Address" /></div>
            <MyButton variant="dark">Subscribe</MyButton>
          </div>
        </div>
    </>
  );
}

export default Subscribe;






