import { useRef } from "react";

export default function ScrollToSection() {
  const specificRef = useRef();

  const data = [
    {
      label: "First Card",
      style: {
        width: "100%",
        height: "600px",
        background: "red",
      },
    },
    {
      label: "Second Card",
      style: {
        width: "100%",
        height: "600px",
        background: "grey",
      },
    },
    {
      label: "Third Card",
      style: {
        width: "100%",
        height: "600px",
        background: "blue",
      },
    },
    {
      label: "Fourth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "green",
      },
    },
    {
      label: "Fifth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "orange",
      },
    },
  ];

  function handleScrollToSection() {
    specificRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div>
      <h1>Scroll to a particular section</h1>
      <button style={{fontSize: "20px",padding:"10px"}} onClick={handleScrollToSection}>Click To Scroll to a specific location based on Ref</button>
      {data.map((dataItem, index) => (
        <div ref={index === 3 ? specificRef : null} style={dataItem.style}>
          <h3>{dataItem.label}</h3>
        </div>
      ))}
    </div>
  );
}