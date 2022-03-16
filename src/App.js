import "./App.css";
import FeedbackItem from "./components/FeedbackItem";
import Header from "./components/Header.jsx";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackItem />
      </div>
    </>
  );
}

export default App;
