import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { times } from 'lodash';

const Table = styled.table`
  background-color:blue;
  border: 2px solid white;
  padding:10px;
  font-size: 32px;
  color: white;

  > * > tr > th {
    font-size: 14px;
    height: 30px;
  }

  > * > tr > td {
    border: 1px solid lightgray;
    width: 60px;
    height: 60px;
    padding: 10px;
  }

  > * > tr > td > div {
    float: right;
  }

  > * > tr > td > div > span {
    border: 1px solid lightgray;
    padding: 3px;
    font-size: 18px;
  }
  > * > tr > td > p {
    padding-top: 30px;

  }

`;

const Scoreboard = ({score}) => {

  let frameHeaders = [];
  _.times(10, (i) => {
    frameHeaders.push(<th>{i + 1}</th>);
  });

  let frameScoreHolders = [];
  _.times(10, (i) => {
    frameScoreHolders.push(<td><div><span>{score[i].r1}</span><span>{score[i].r2}</span></div><p>{score[i].frameScore}</p></td>);
  });


  return (
    <div>
      <Table>
        <thead>
          <tr>
            {frameHeaders}
          </tr>
        </thead>
        <tbody>
          <tr>
            {frameScoreHolders}
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Scoreboard;
