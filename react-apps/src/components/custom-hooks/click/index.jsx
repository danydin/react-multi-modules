import { useRef, useState } from "react";
import useOutsideClick from "./logic";

export default function OnClickOutside() {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  useOutsideClick(ref, () => setShowContent(false));

  return (
    <div style={{height:"60vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
      {showContent ? (
        <div ref={ref}>
          <h1>This is a random content</h1>
          <p>
            Please click outside of this to close this. It won't close if you
            click inside of this content
          </p>
        </div>
      ) : (
        <button style={{fontSize:"20px", padding:"20px" }} onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
}