import { Component } from "react";
import { useSearchParams } from "react-router-dom";
import HomePageAction from "../components/HomePageAction";
import NoteItemList from "../components/NoteItemList";
import SearchNote from "../components/SearchNote";
import { getActiveNotes, searchNotes } from "../utils/local-data";
import PropTypes from "prop-types";

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  const title = searchParams.get("title");

  function changeSearchParams(keyword) {
    setSearchParams({ title: keyword });
  }

  return <HomePage onSearch={changeSearchParams} defaultKeyword={title} />;
}

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getActiveNotes(),
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
      <section className="homepage">
        <div className="flex justify-between mx-2">
          <p className="content-center text-4xl font-bold text-center">Notes</p>
          <SearchNote onSearch={this.onSearch} />
        </div>

        <NoteItemList notes={notes} />
        <HomePageAction />
      </section>
    );
  }
}

HomePage.propTypes = {
  onSearch: PropTypes.func,
  defaultKeyword: PropTypes.string,
};

export default HomePageWrapper;
