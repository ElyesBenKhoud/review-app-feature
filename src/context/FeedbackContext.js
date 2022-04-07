import { createContext, useState, useEffect } from "react";

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
    //using proxy
    const response = await fetch("/feedback?_sort=id&_order=desc");
    const data = await response.json();
    //store the data coming from json server into feedback array
    setFeedback(data);
    setIsLoading(false);
  };
  //adding feedback
  const addFeedback = async (newFeedback) => {
    const response = await fetch("/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });
    const data = await response.json();
    setFeedback([data, ...feedback]);
  };

  //deleting feedback
  const deleteFeedback = async (id) => {
    if (window.confirm("Are you sure you want to delete")) {
      await fetch(`/feedback/${id}`, { method: "DELETE" });

      //delete the item with the id clicked from the feedback array
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  //set the item tp be updated
  const editFeedback = (item) => {
    setfeedbackEdit({
      item,
      edit: true,
    });
  };
  //update feedback lfunction
  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updItem),
    });
    const data = await response.json();
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
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
