import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [feedbackEdit, setfeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    FetchFeedback();
  }, []);

  //fetch feedback

  const FetchFeedback = async () => {
    const response = await fetch(
      "http://localhost:5000/feedback?_sort=id&_order=desc"
    );
    const data = await response.json();
    //store the data coming from json server into feedback array
    setFeedback(data);
    setIsLoading(false);
  };

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

  //update feedback lfunction
  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };
  return (
    <FeedbackContext.Provider
      //pass states & func
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
        isLoading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
