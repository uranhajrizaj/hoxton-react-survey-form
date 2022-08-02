import { useState } from "react";

function Main() {
  // State for the challenge #3
  const [open, setOpen] = useState(false);

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="main__form">
        <form className="form">
          <h2>Tell us what you think about your rubber duck!</h2>
         <h3>What would you say that are the best feautures of your rubber duck?</h3>
         <ul className="form__group">
            <li>
              <label>
                <input type="checkbox"></input>
                 It's yellow!
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox"></input>
                 It's squeaks!
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox"></input>
                 It has a logo!
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox"></input>
                 It's big!
              </label>
            </li>
          </ul>

         <h3>What would you say that are the worst bits of your rubber duck?</h3>
         <ul className="form__group">
            <li>
              <label>
                <input type="checkbox"></input>
                 It's yellow!
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox"></input>
                 It's squeaks!
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox"></input>
                 It has a logo!
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox"></input>
                 It's big!
              </label>
            </li>
          </ul>
         <h3>How do you rate your rubber duck consistency?</h3>
         <ul className="form__group radio">
            <li>
              <input type="radio" id="number1" name="number"></input>
              <label htmlFor="number1"> 1</label>
            </li>
            <li>
              <input type="radio" id="number2" name="number"></input>
              <label htmlFor="number2"> 2</label>
            </li>
            <li>
              <input type="radio" id="number3" name="number"></input>
              <label htmlFor="number3"> 3</label>
            </li>
            <li>
              <input type="radio" id="number4" name="number"></input>
              <label htmlFor="number4"> 4</label>
            </li>
          </ul>
         <h3>How do you rate your rubber duck color?</h3>
         <ul className="form__group radio">
            <li>
              <input type="radio" id="color1" name="color"></input>
              <label htmlFor="color1"> 1</label>
            </li>
            <li>
              <input type="radio" id="color2" name="color"></input>
              <label htmlFor="color2"> 2</label>
            </li>
            <li>
              <input type="radio" id="color3" name="color"></input>
              <label htmlFor="color3"> 3</label>
            </li>
            <li>
              <input type="radio" id="color4" name="color"></input>
              <label htmlFor="color4"> 4</label>
            </li>
          </ul>
         <h3>How do you rate your rubber duck logo?</h3>
         <ul className="form__group radio">
            <li>
              <input type="radio" id="logo1" name="logo"></input>
              <label htmlFor="logo1"> 1</label>
            </li>
            <li>
              <input type="radio" id="logo2" name="logo"></input>
              <label htmlFor="logo2"> 2</label>
            </li>
            <li>
              <input type="radio" id="logo3" name="logo"></input>
              <label htmlFor="logo3"> 3</label>
            </li>
            <li>
              <input type="radio" id="logo4" name="logo"></input>
              <label htmlFor="logo4"> 4</label>
            </li>
          </ul>
         <h3>How do you like to spend time with your rubber duck?</h3>
         <ul className="form__group">
            <li>
              <label>
                <input type="checkbox"></input>
                 Swimming
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox"></input>
                 Bathing
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox"></input>
                 Chatting
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox"></input>
                 I don't like to spend time with it.
              </label>
            </li>
          </ul>
          <label>What else have you got to say about your rubber duck?</label>
          <textarea  className="textarea" ></textarea>
          <label>Put your name here (if you feel like it):</label>
          <input type="textarea" className="textarea"></input>
          <label>Leave us your email pretty please??</label>
          <input type="textarea" className="textarea"></input>
          <button className="form__submit">Submit Survey!</button>
        </form>
       
      </section>
    </main>
  );
}

export default Main;
