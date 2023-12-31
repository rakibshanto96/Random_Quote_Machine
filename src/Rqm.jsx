import React, { useState } from "react";
import { data } from "./data";
function Rqm() {
  const prevState = data[Math.floor(Math.random() * data.length)];

  const [state, setState] = useState(prevState);
  return (
    <div className="container">
      <div>
        <div className="col">
          <div id="quote-box">
            <h1 id="text">
              <i className="fa fa-quote-left"></i> {state.quote}
            </h1>
            <h5 id="author">- {state.author}</h5>
            <div className="button">
              <a
                id="tweet-quote"
                href="https://twitter.com/intent/tweet"
                target="_top"
              >
                <i class="fa-brands fa-square-x-twitter fa-2xl"></i>
              </a>
              <button
                id="new-quote"
                onClick={() =>
                  setState(data[Math.floor(Math.random() * data.length)])
                }
              >
                New Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rqm;
