import useWindowResize from "./logic";

export default function WindowResize() {
  const windowSize = useWindowResize();
  const { width, height } = windowSize;

  return (
    <div style={{height: "60vh"}}>
      <h1>Use Window resize Hook</h1>
      <p>Width is {width}</p>
      <p>Height is {height}</p>
    </div>
  );
}