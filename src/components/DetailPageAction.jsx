import { FaRegTrashAlt } from "react-icons/fa";
import PropTypes from "prop-types";
import Button from "./Button";

function DetailPageAction({ id, archived, isArchived, onDelete }) {
  return (
    <div className="flex">
      <Button id={id} archived={archived} isArchived={isArchived} />
      <button
        className="action bottom-0 right-0 mb-4 mr-4 bg-black w-12 h-12 rounded-full flex items-center justify-center z-30"
        type="button"
        title="Delete"
        onClick={() => onDelete(id)}
      >
        <FaRegTrashAlt className="text-white text-2xl font-black" />
      </button>
    </div>
  );
}

DetailPageAction.propTypes = {
  id: PropTypes.string.isRequired,
  isArchived: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  archived: PropTypes.bool.isRequired,
};

export default DetailPageAction;
