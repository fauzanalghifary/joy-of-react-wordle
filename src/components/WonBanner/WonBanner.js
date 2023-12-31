import React from "react";
import Banner from "../Banner";

function WonBanner({ numOfGuess }) {
  return (
    <Banner status="happy">
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>
            {numOfGuess === 1 ? "1 guess" : `${numOfGuess} guesses`}
          </strong>
          .
        </p>
      </div>
    </Banner>
  );
}

export default WonBanner;
