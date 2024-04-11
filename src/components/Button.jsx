import { IoMdArchive } from "react-icons/io";
import { MdUnarchive } from "react-icons/md";
import PropTypes from "prop-types";

function ArchiveButton({ id, archived, isArchived }) {
  if (archived) {
    return (
      <button
        className="action bottom-0 right-0 mb-4 mr-4 bg-black w-12 h-12 rounded-full flex items-center justify-center z-30"
        type="button"
        title="UnArchive"
        onClick={() => isArchived(id)}
      >
        <MdUnarchive className="text-3xl text-white" />
      </button>
    );
  }

  return (
    <button
      className="action bottom-0 right-0 mb-4 mr-4 bg-black w-12 h-12 rounded-full flex items-center justify-center z-30"
      type="button"
      title="Archive"
      onClick={() => isArchived(id)}
    >
      <IoMdArchive className="text-3xl text-white" />
    </button>
  );
}

ArchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  isArchived: PropTypes.func.isRequired,
};

export default ArchiveButton;
