import { useState } from "react";

 const InputForm = (props) => {
  let {rcCount, children} = props;
  console.log(children);

  // rcCount = 10;

    const [inputValue, setInputValue] = useState("");
  
    // console.log("3", { inputValue});
  
    return (
      <form>
        <div>Count is a form {rcCount}</div>
        {children}
        <input
          type="text"
          onChange={(e) => {
            // console.log("1", { inputValue });
            setInputValue(e.target.value);
            // console.log("2", { inputValue });
          }}
          value={inputValue}
        />
        {/* {console.log("4", { inputValue })} */}
        <div>{inputValue}</div>
        <input type="submit" />
      </form>
    );
  };


  export {InputForm};