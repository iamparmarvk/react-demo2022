import React, { Component } from "react";
import { ReactDOM } from "react-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const HeadLayout = () => {
  const imgstyle = {
    width: "550px",
    borderRadius: "20px",
  };
  const [quote, setQuote] = useState("");

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    axios
      .get("https://api.quotable.io/random")
      .then((response) => {
        console.log(response.data);
        setQuote(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getImage = () => {};
  return (
    <header className="bg-dark py-5">
      <div className="container px-5">
        <div className="row gx-5 align-items-center justify-content-center">
          <div className="col-lg-8 col-xl-7 col-xxl-6">
            <div className="my-5 text-center text-xl-start">
              {quote.author && (
                <h1 className="display-5 fw-bolder text-white mb-2">
                  {quote.author}
                </h1>
              )}

              {quote.content && (
                <p className="lead fw-normal text-white-50 mb-4">
                  {quote.content}
                </p>
              )}
              <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                <a
                  className="btn btn-primary btn-lg px-4 me-sm-3"
                  href="#"
                  onClick={getQuote}
                >
                  Random Quote
                </a>
                <a
                  className="btn btn-outline-light btn-lg px-4"
                  href="#"
                  onClick={getImage}
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
            <img
              src="https://wallpapercave.com/wp/wp2284572.jpg"
              alt="..."
              style={imgstyle}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeadLayout;
