/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { showFormattedDate } from "../utils";
import PropTypes from "prop-types";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

// function NoteItem({ id, title, createdAt, body }) {
//   return (
//     <article className="note-item">
//       <h3 className="note-item__title">
//         <Link to={`/notes/${id}`}>{title}</Link>
//       </h3>
//       <p className="note-item__createdAt">{showFormattedDate(createdAt)}</p>
//       <p className="note-item__body">{body}</p>
//     </article>
//   );
// }

// Fungsi untuk membatasi jumlah kata dalam teks
const limitWords = (text, limit) => {
  const words = text.split(" ");
  if (words.length > limit) {
    return words.slice(0, limit).join(" ") + "...";
  }
  return text;
};

export function NoteItem({ id, title, createdAt, body }) {
  // Batasi jumlah kata dalam teks catatan
  const limitedBody = limitWords(body, 20); // Menggunakan batas 20 kata
  return (
    <Card className=" w-96">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography className="mb-2 text-xs">
          {showFormattedDate(createdAt)}
        </Typography>
        <Typography>{limitedBody}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Link
          to={`/notes/${id}`}
          className="text-light-blue-700 hover:text-light-blue-400"
        >
          Read More
        </Link>
      </CardFooter>
    </Card>
  );
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default NoteItem;
