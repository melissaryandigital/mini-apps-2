import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import $ from 'jquery';

window.React = React;

export class EventList extends Component {

  render() {
    let eventNodes = this.props.data.map(function (event, index) {
      return (
        <div>
          <div key={index}></div>
          <div>{event.description}</div>
          <div style={{fontWeight:"bold"}}>{event.date}</div>
        </div>
      )
    });

    return (
      <div id="project-comments" className="commentList">
        <ul>{eventNodes}</ul>
      </div>
    );
  }
}

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      page: 0,
      pageCount: 10
    };
  }

  loadEventsFromServer(page) {
    $.ajax({
      url: `http://localhost:3000/events?&_page=${page}`,
      dataType: 'json',
      type: 'GET',

      success: (data) => {
        console.log(data);
        this.setState({
          data: data,
          page: page
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

  handlePageClick = (data) => {
    let selected = data.selected + 1;
    console.log(selected);

    this.setState({ page: selected }, () => {
      this.loadEventsFromServer(selected);
    });
  };

  render() {
    return (
      <div className="commentBox">
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