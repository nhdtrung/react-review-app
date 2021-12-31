import React from "react";

function Header({ text }) {
  return (
    <header>
      <div className="container">
        <h1>{text}</h1>
      </div>
    </header>
  );
}

// in case no props passed
Header.defaultProps = {
  text: "Feedback App",
};

export default Header;
