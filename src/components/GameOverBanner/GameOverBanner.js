import React from "react";

function GameOverBanner({ status, numOfGuess, answer }) {
  return (
    <>
      {status === "won" && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>
              {numOfGuess === 1 ? "1 guess" : `${numOfGuess} guesses`}
            </strong>
            .
          </p>
        </div>
      )}
      {status === "lost" && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default GameOverBanner;
