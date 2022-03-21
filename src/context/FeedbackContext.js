import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    { id: 1, text: "this item is review1 from context API", rating: 10 },
    { id: 2, text: "this item is review2 from context API", rating: 5 },
    { id: 3, text: "this item is review3 from context API", rating: 4.5 },
  ]);

  const [feedbackEdit, setfeedbackEdit] = useState({
    item: {},
    edit: false,
  });
  //deleting feedback
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete")) {
      //delete the item with the id clicked from the feedback array
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  //adding feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
  //set the item tp be updated
  const editFeedback = (item) => {
    setfeedbackEdit({
      item,
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
