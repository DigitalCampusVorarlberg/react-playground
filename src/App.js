import './App.css';
import Navbar from "./components/Navbar/Navbar";

function App() {
    const items = [{title: "Start", url: "/"},{title: "Google", url: "https://google.at"}];

  return (
    <div className="App">
        <Navbar logoUrl="https://logoipsum.com/logo/logo-24.svg" menuItems={items} />
        <div>asdf</div>
    </div>
  );
}

export default App;
