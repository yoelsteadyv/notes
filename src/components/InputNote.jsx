/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { MdOutlineDone } from "react-icons/md";
import { Input } from "@material-tailwind/react";

class NoteInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onTitleChange(event) {
    this.setState({ title: event.target.value });
  }
  onInputHandler(event) {
    this.setState({ body: event.target.innerHTML });
  }

  onSubmitHandler() {
    this.props.addNote(this.state);
  }

  render() {
    return (
      <section className="min-h-[35rem] flex flex-col">
        <div className="px-16 md:px-24 pt-24 pb-10">
          <Input
            type="text"
            className=""
            variant="standard"
            label="Title"
            value={this.state.title}
            onChange={(e) => this.onTitleChange(e)}
          />
        </div>
        <div className="px-16 md:px-24 pt-24 pb-10">
          <div>
            <p>value</p>
          </div>
          <div
            className="add-new-page__input__body border-b border-black h-40"
            contentEditable
            data-placeholder=""
            label="value"
            onInput={(e) => this.onInputHandler(e)}
          />
        </div>
        <div className="flex justify-end">
          <div className="bottom-0 right-0 mb-4 mr-4 bg-black w-12 h-12 rounded-full flex items-center justify-center z-30">
            <button
              className="action"
              type="button"
              title="Save"
              onClick={this.onSubmitHandler}
            >
              <MdOutlineDone className="text-white text-3xl" />
            </button>
          </div>
        </div>
      </section>
    );
  }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
