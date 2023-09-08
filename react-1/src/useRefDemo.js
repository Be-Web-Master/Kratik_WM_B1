import { useRef, useEffect, useState } from "react";




export const UseRefDemo = () => {
  // cons
  const [toggle,setToggle] = useState(false);

  const countRef = useRef(0);
  useEffect(() => {
    if(countRef.current){
      countRef.current.innerText=0;
    }
  }, []);
  let localCOunt = 0;

  console.log(countRef.current.innerText);

  return (
    <div>
      <div ref={countRef}> {countRef.current.innerText}</div>
      <button
        onClick={() => {
          countRef.current.value = countRef.current.innerText++;
          // countRef.current.innerText = Number(countRef.current.innerText)+1
          // setCount(count + 1);
          setToggle(!toggle);
        }}
      >
        +
      </button>
    </div>
  );
};
