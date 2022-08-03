import { useState } from "react";

function Main() {
  // State for the challenge #3
  const [open, setOpen] = useState(false);

  const[user, setUser] = useState({
    review: "",
    email: "",
    username: "",
    consistency: 0,
    colour: 0,
    logo: 0,
    bestFeatures: [],
    worstFeatures: [],
    timeSpent: [],
  })

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <div className="answer"> 
       <h2>{user.username} said:</h2>
       <p> What would you say that are the best feautures of your duck?</p>
       <ul>
        {user.bestFeatures.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
       </ul>

        <p> What would you say that are the worst feautures of your duck?</p>
        <ul>
        {user.worstFeatures.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
        </ul>

        <p> How do you rate your rubber duck consistency?</p>
        <p>{user.consistency}</p>

        <p> How do you rate your rubber duck colour?</p>
        <p>{user.colour}</p>

        <p> How do you rate your rubber duck logo?</p>
        <p>{user.logo}</p>

        <p> How much time do you spend with your rubber duck?</p>
        <ul>
        {user.timeSpent.map((time, index) => (
          <li key={index}>{time}</li>
        ))}
        </ul>

        <p> What do you think about your rubber duck?</p>
        <p>{user.review}</p>
        </div>
      </section>
      <section className="main__form">
        <form
          className="form"
          onSubmit={(event) => {
            event.preventDefault();
        
            let newUser={
              review: event.target.comment.value,
              email: event.target.emailinput.value,
              username: event.target.name.value,
              consistency:  document.querySelector('input[name="consistency"]:checked').value,
              colour: document.querySelector('input[name="color"]:checked').value,
              logo: document.querySelector('input[name="color"]:checked').value,
              bestFeatures: [...document.querySelectorAll('input[name="worst"]:checked')].map((input) => input.value),
              worstFeatures: [...document.querySelectorAll('input[name="worst"]:checked')].map((input) => input.value),
              timeSpent: [...document.querySelectorAll('input[name="timespent"]:checked')].map((input) => input.value)
            }
            setUser(newUser);
          }}
        >
          <h2>Tell us what you think about your rubber duck!</h2>
          <h3>
            What would you say that are the best feautures of your rubber duck?
          </h3>
          <ul className="form__group">
            <li>
              <label>
                <input
                  type="checkbox"
                  name="feauture"
                  value="It's yellow!"
                ></input>
                It's yellow!
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="feauture"
                  value="It's squeaks!"
                ></input>
                It's squeaks!
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="feauture"
                  value="It's has a logo"
                ></input>
                It has a logo!
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="feauture" value="It's big"></input>
                It's big!
              </label>
            </li>
          </ul>

          <h3>
            What would you say that are the worst bits of your rubber duck?
          </h3>
          <ul className="form__group">
            <li>
              <label>
                <input type="checkbox" name="worst" value="It's yellow"></input>
                It's yellow!
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="worst"
                  value="It's squeaks"
                ></input>
                It's squeaks!
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="worst"
                  value="It has a logo"
                ></input>
                It has a logo!
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="worst" value="It's big"></input>
                It's big!
              </label>
            </li>
          </ul>
          <h3>How do you rate your rubber duck consistency?</h3>
          <ul className="form__group radio">
            <li>
              <input
                type="radio"
                id="number1"
                name="consistency"
                value="1"
              ></input>
              <label htmlFor="number1"> 1</label>
            </li>
            <li>
              <input
                type="radio"
                id="number2"
                name="consistency"
                value="2"
              ></input>
              <label htmlFor="number2"> 2</label>
            </li>
            <li>
              <input
                type="radio"
                id="number3"
                name="consistency"
                value="3"
              ></input>
              <label htmlFor="number3"> 3</label>
            </li>
            <li>
              <input
                type="radio"
                id="number4"
                name="consistency"
                value="4"
              ></input>
              <label htmlFor="number4"> 4</label>
            </li>
          </ul>
          <h3>How do you rate your rubber duck color?</h3>
          <ul className="form__group radio">
            <li>
              <input type="radio" id="color1" name="color" value="1"></input>
              <label htmlFor="color1"> 1</label>
            </li>
            <li>
              <input type="radio" id="color2" name="color" value="2"></input>
              <label htmlFor="color2"> 2</label>
            </li>
            <li>
              <input type="radio" id="color3" name="color" value="3"></input>
              <label htmlFor="color3"> 3</label>
            </li>
            <li>
              <input type="radio" id="color4" name="color" value="4"></input>
              <label htmlFor="color4"> 4</label>
            </li>
          </ul>
          <h3>How do you rate your rubber duck logo?</h3>
          <ul className="form__group radio">
            <li>
              <input type="radio" id="logo1" name="logo" value="1"></input>
              <label htmlFor="logo1"> 1</label>
            </li>
            <li>
              <input type="radio" id="logo2" name="logo" value="2"></input>
              <label htmlFor="logo2"> 2</label>
            </li>
            <li>
              <input type="radio" id="logo3" name="logo" value="3"></input>
              <label htmlFor="logo3"> 3</label>
            </li>
            <li>
              <input type="radio" id="logo4" name="logo" value="4"></input>
              <label htmlFor="logo4"> 4</label>
            </li>
          </ul>
          <h3>How do you like to spend time with your rubber duck?</h3>
          <ul className="form__group">
            <li>
              <label>
                <input type="checkbox" name="timespent" value="Swiming"></input>
                Swimming
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="timespent" value="Bathing"></input>
                Bathing
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="timespent"
                  value="Chatting"
                ></input>
                Chatting
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="timespent"
                  value="I don't like to spend time with it."
                ></input>
                I don't like to spend time with it.
              </label>
            </li>
          </ul>
          <label>What else have you got to say about your rubber duck?</label>
          <textarea className="textarea" name="comment"></textarea>

          <label htmlFor="NameInput">
            Put your name here (if you feel like it):
          </label>
          <input
            type="textarea"
            className="textarea"
            id="NameInput"
            name="name"
            
          ></input>

          <label htmlFor="Email">Leave us your email pretty please??</label>
          <input
            type="textarea"
            className="textarea"
            id="Email"
            name="emailinput"
          ></input>

          <button className="form__submit">Submit Survey!</button>
        </form>
      </section>
    </main>
  );
}

export default Main;
