import React from 'react';

const EventList = (props) => {

  console.log('props are ', props.data);
  // render() {
  let eventNodes = props.data.map(function (event, index) {
    return (
      <tr>
        <td key={index} style={{ fontWeight: "bold" }}>{event.date}</td>
        <td>{event.description}</td>
      </tr>
    )
  });

  return (
    <table>
      <thead>
        <th>Date</th>
        <th>Description</th>
      </thead>
      <tbody>{eventNodes}</tbody>
    </table>
  );
}

export default EventList;

