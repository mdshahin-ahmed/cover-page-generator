import "./App.css";
import { useAppContext } from "./context/useAppContext";

function App() {
  const test = useAppContext();
  console.log(test);
  return (
    <>
      <h1>Alhamdulillah</h1>
    </>
  );
}

export default App;
