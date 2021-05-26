import React from 'react';

const Search = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input type="text" id="query" name="query" placeholder="Enter your search term" value={props.query} onChange={props.handleChange} />
      <input type="submit" value="Submit" />
    </form>
  )
}

export default Search;
