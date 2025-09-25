import React from "react";

const TextDecoration = ({ text, textBg, textSm }) => {
  return (
    <div className="relative  font-karla">
      <h1
        className={`absolute  text-${textSm} lg:text-${textBg} font-medium tracking-wider text-black top-0 left-0  z-10  `}
      >
        {text}
      </h1>
      <h1
        className={`absolute text-${textSm} lg:text-${textBg} font-medium tracking-wider text-orange-100 top-1 left-1 `}
        // style={{ WebkitTextStroke: "2px #f5f5f5" }}
      >
        {text}
      </h1>
    </div>
  );
};

export default TextDecoration;
