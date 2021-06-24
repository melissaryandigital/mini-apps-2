import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Table = styled.table`
  background-color:black;
  font-size: 32px;
  color: white;
  border: border-collapse;

  > * > tr > td {k
    width: 20px;
    height: 60px;
    padding: 10px;
    cursor: pointer;
  }
`;

const RollerNums = (props) => {
  return (
    <Table>
      <thead>
      </thead>
      <tbody>
        <tr>
          <td value="0" onClick={(e) => { props.handleClick(e); }}>0</td>
          <td value="1" onClick={(e) => { props.handleClick(e); }}>1</td>
          <td value="2" onClick={(e) => { props.handleClick(e); }}>2</td>
          <td value="3" onClick={(e) => { props.handleClick(e); }}>3</td>
          <td value="4" onClick={(e) => { props.handleClick(e); }}>4</td>
          <td value="5" onClick={(e) => { props.handleClick(e); }}>5</td>
          <td value="6" onClick={(e) => { props.handleClick(e); }}>6</td>
          <td value="7" onClick={(e) => { props.handleClick(e); }}>7</td>
          <td value="8" onClick={(e) => { props.handleClick(e); }}>8</td>
          <td value="9" onClick={(e) => { props.handleClick(e); }}>9</td>
          <td value="10" onClick={(e) => { props.handleClick(e); }}>10</td>
        </tr>
      </tbody>
    </Table>
  )
}
export default RollerNums;