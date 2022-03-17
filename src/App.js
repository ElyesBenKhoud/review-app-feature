import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} setFeedback={setFeedback} />
      </div>
    </>
  );
}

export default App;
