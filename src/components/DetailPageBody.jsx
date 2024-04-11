import parser from "html-react-parser";
import { showFormattedDate } from "../utils";
import PropTypes from "prop-types";
// import DetailPageAction from "./DetailPageAction";

function DetailPageBody({ note }) {
  return (
    <section className="min-h-[25rem] w-auto">
      <h3 className="mx-24 mt-24 text-5xl">{note.title}</h3>
      <p className="mx-24 mt-3 text-gray-600">
        {showFormattedDate(note.createdAt)}
      </p>
      <div className="mx-24 mt-6 mb-24 text-xl">{parser(note.body)}</div>
    </section>
  );
}

DetailPageBody.propTypes = {
  note: PropTypes.object.isRequired,
};

export default DetailPageBody;
