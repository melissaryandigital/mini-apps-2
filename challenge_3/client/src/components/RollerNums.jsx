import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { times } from 'lodash';

const Table = styled.table`
  background-color:darkgray;
  font-size: 32px;
  color: white;
  border-collapse: collapse;
  margin-top: 30px;


  > * > tr > td {
    width: 20px;
    height: 60px;
    padding: 10px;
    cursor: pointer;
    border: 1px solid white;
  }
`;

const RollerNums = ({pinsLeft, handleClick, gameOver}) => {

  let boardFrames = [];
  _.times(pinsLeft + 1, (i) => {
    boardFrames.push(<td value={i} onClick={(e) => { handleClick(e); }}>{i}</td>);
  });

  return (
    <div>
      <h3>Pick number of pins to knock down:</h3>
    <Table>
      <thead>
      </thead>
      <tbody>
        <tr>
          {gameOver ? <button onClick={(e) => { location.reload(); }}>START NEW GAME</button> : boardFrames}
        </tr>
      </tbody>
    </Table>
    </div>
  )
}
export default RollerNums;