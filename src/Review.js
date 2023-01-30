import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkIndex = (index) => {
    if (index > people.length - 1) {
      return 0;
    } else if (index < 0) {
      return people.length - 1;
    } else {
      return index;
    }
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber++;
      return setIndex(checkIndex(randomNumber));
    } else {
      setIndex(checkIndex(randomNumber));
    }
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="">
        <div className="button-container">
          <button
            className="prev-btn"
            onClick={() => {
              setIndex(index > 0 ? index - 1 : people.length - 1);
            }}
          >
            <FaChevronLeft />
          </button>
          <button
            className="next-btn"
            onClick={() => {
              setIndex(index < people.length - 1 ? index + 1 : 0);
            }}
          >
            <FaChevronRight />
          </button>
        </div>
        <button className="random-btn" onClick={randomPerson}>
          surprise me
        </button>
      </div>
    </article>
  );
};

export default Review;
