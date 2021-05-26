import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import $ from 'jquery';
import Search from './components/Search.jsx';
import EventList from './components/EventList.jsx';
import css from './styles/styles.css';

window.React = React;

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: `http://localhost:3000/events?_page=1`,
      data: [],
      query: '',
      page: 0,
      pageCount: 10
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  loadEventsFromServer(query, page) {

    let searchQuery = this.state.url;

    if (!page) {
      let page = this.state.page;
    }

    if (query) {
      searchQuery = `http://localhost:3000/events?q=${query}&_page=${page}`;
    }

    $.ajax({
      url: searchQuery,
      dataType: 'json',
      type: 'GET',

      success: (data) => {
        this.setState({
          data: data,
          page: page || 1
        });
      },

      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString()); // eslint-disable-line
      },
    });
  }

  componentDidMount() {
    this.loadEventsFromServer();
  }

  handleSubmit(e) {
    e.preventDefault();
    let searchQuery = e.target.value;
    this.setState({ query: searchQuery }, () => {
      this.loadEventsFromServer(searchQuery, 1);
    });
  }

  handleChange(e) {
    let searchQuery = e.target.value;
    this.setState({ query: searchQuery }, () => {
      this.loadEventsFromServer(searchQuery, this.state.page);
    });
  }

  handlePageClick = (data) => {
    let selected = data.selected + 1;

    this.setState({ page: selected }, () => {
      this.loadEventsFromServer(selected);
    });
  };

  render() {
    return (

      <div className="eventsBox">
        <h1>Historical Events Finder</h1>
        <Search query={this.state.query} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <EventList data={this.state.data} />
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      </div>
    );
  }
}

export default App;