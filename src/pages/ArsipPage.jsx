import { Component } from "react";
import { useSearchParams } from "react-router-dom";
import NoteItemList from "../components/NoteItemList";
import SearchNote from "../components/SearchNote";
import { getArchivedNotes, searchNotes } from "../utils/local-data";
import PropTypes from "prop-types";

function ArsipPageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  const title = searchParams.get("title");

  function changeSearchParams(keyword) {
    setSearchParams({ title: keyword });
  }

  return <ArsipPage onSearch={changeSearchParams} defaultKeyword={title} />;
}

class ArsipPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getArchivedNotes(),
      keyword: props.defaultKeyword || "",
    };

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(keyword) {
    this.setState({ keyword });

    this.props.onSearch(keyword);
  }

  render() {
    const notes = searchNotes(this.state.notes, this.state.keyword);

    return (
      <section className="archives-page">
        <div className="flex justify-between mx-2">
          <p className="content-center text-4xl font-bold text-center">
            Archived
          </p>
          <SearchNote onSearch={this.onSearch} />
        </div>
        <NoteItemList notes={notes} />
      </section>
    );
  }
}

ArsipPage.propTypes = {
  onSearch: PropTypes.func,
  defaultKeyword: PropTypes.string,
};

export default ArsipPageWrapper;
