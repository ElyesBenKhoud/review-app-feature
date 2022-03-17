import Card from "./shared/Card";
import propTypes from "prop-types";
import { FaTimes } from "react-icons/fa";

const FeedbackItem = ({ item, handleDelete }) => {
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => handleDelete(item.id)}>
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

FeedbackItem.propTypes = {
  item: propTypes.object.isRequired,
};

export default FeedbackItem;
