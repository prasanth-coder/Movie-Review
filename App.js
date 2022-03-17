import "./styles.css";
import { useState, useEffect } from "react";
import Star from "./Star";
import movie from "./movie";
import Button from "./Button";
import Rating from "./Rating";
function App() {
  var btnLeft = "<";
  var btnRigth = ">";
  var [index, setIndex] = useState(0);
  const [content, setContent] = useState("");
  const [rating, setRating] = useState("");
  const [mark, setMark] = useState("");
  const { id, name, starring, image, budget, desc } = movie[index];
  const [toggles1, setToggles1] = useState(false);
  const [toggles2, setToggles2] = useState(false);
  const [toggles3, setToggles3] = useState(false);
  const [toggles4, setToggles4] = useState(false);
  const [toggles5, setToggles5] = useState(false);
  useEffect(() => {
    ratingCalc();
  });

  const leftSlider = () => {
    if (index <= 0) {
      index = movie.length;
      setIndex(--index);
    } else {
      setIndex(--index);
    }
    offToggle();
  };
  const rightSlider = () => {
    if (index >= movie.length - 1) {
      index = -1;
      setIndex(++index);
    } else {
      setIndex(++index);
    }
    offToggle();
  };

  const star1 = () => {
    if (toggles1) {
      setToggles1(false);
      setToggles2(false);
      setToggles3(false);
      setToggles4(false);
      setToggles5(false);
    } else {
      setToggles1(true);
    }
  };
  const star2 = () => {
    if (toggles2) {
      setToggles2(false);
      setToggles3(false);
      setToggles4(false);
      setToggles5(false);
    } else {
      setToggles1(true);
      setToggles2(true);
    }
  };
  const star3 = () => {
    if (toggles3) {
      setToggles3(false);
      setToggles4(false);
      setToggles5(false);
    } else {
      setToggles1(true);
      setToggles2(true);
      setToggles3(true);
    }
  };
  const star4 = () => {
    if (toggles4) {
      setToggles4(false);
      setToggles5(false);
    } else {
      setToggles1(true);
      setToggles2(true);
      setToggles3(true);
      setToggles4(true);
    }
  };
  const star5 = () => {
    if (toggles5) {
      setToggles5(false);
    } else {
      setToggles1(true);
      setToggles2(true);
      setToggles3(true);
      setToggles4(true);
      setToggles5(true);
    }
  };

  const ratingCalc = () => {
    if (toggles5) {
      setRating("Excellent");
      setMark("5");
    } else if (toggles4) {
      setRating("Good");
      setMark("4");
    } else if (toggles3) {
      setRating("Average");
      setMark("3");
    } else if (toggles2) {
      setRating("Decent");
      setMark("2");
    } else if (toggles5) {
      setRating("Worst");
      setMark("1");
    } else {
      setRating("");
      setMark("");
    }
  };

  const calculation = () => {
    if (toggles1 || toggles2 || toggles3 || toggles4 || toggles5) {
      return true;
    }
  };
  function offToggle() {
    setToggles1(false);
    setToggles2(false);
    setToggles3(false);
    setToggles4(false);
    setToggles5(false);
    setRating("");
    setMark("");
    setContent("");
  }

  const submitBtn = () => {
    console.log(content);
    console.log(rating);
    console.log(mark);
    if (rating === "" || content === "" || mark === "") {
      alert("fill the section");
      return;
    } else {
      alert("Thank you");
    }
    offToggle();
  };

  return (
    <>
      <div className="layout">
        <div>
          <h1>Movie Review Page</h1>
        </div>
        <div className="slider">
          <Button classname="sliderBtn" name={btnLeft} onclick={leftSlider} />
          <img src={image} alt="valimai" />
          <Button classname="sliderBtn" name={btnRigth} onclick={rightSlider} />
        </div>
        <div>
          <h1>{name}</h1>
        </div>
        <div>
          <h2>Starring : {starring}</h2>
        </div>
        <div>
          <h2>Budget : {budget}</h2>
        </div>
        <div className="desc">
          <h2>Write Review</h2>
          <h4>{desc}</h4>
        </div>
        <div>
          <h2>Movie Review</h2>
          <textarea
            rows="7"
            cols="80"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="icons">
          <Star classname={toggles1 && "bgYellow"} onclick={star1} />
          <Star classname={toggles2 && "bgYellow"} onclick={star2} />
          <Star classname={toggles3 && "bgYellow"} onclick={star3} />
          <Star classname={toggles4 && "bgYellow"} onclick={star4} />
          <Star classname={toggles5 && "bgYellow"} onclick={star5} />
          <h2>{calculation && rating}</h2>
          <h3> {calculation && mark}/5</h3>
        </div>
        <div>
          <Button
            name="submit review"
            classname="submitBtn"
            onclick={submitBtn}
          />
        </div>
      </div>
    </>
  );
}
export default App;
