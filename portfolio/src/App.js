import './App.css';
import TextCode from "./resources/atoms/animations/text_code/TextCode";
import FullHeader from "./resources/organisems/full-header/Object";

function App() {
  return (
    <div className="App" style={mainStyle}>
        <FullHeader/>
        <TextCode text='Hello you, welcome to my portfolio!' speed={2}/>
    </div>
  );
}

export default App;

const mainStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    minHeight: "100vh",
    width: "100vw",
    background: '#07000E'
}