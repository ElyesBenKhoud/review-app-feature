import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete")) {
      //delete the item with the id clicked from the feedback array
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm />
        <FeedbackStats feedback={feedback} />
        <FeedbackList
          feedback={feedback}
          setFeedback={setFeedback}
          handleDelete={deleteFeedback}
        />
      </div>
    </>
  );
}

export default App;
