import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Table = styled.table`
  background-color:blue;
  font-size: 32px;
  color: white;

  > * > tr > th {
    font-size: 14px;
  }

  > * > tr > td {
    border: 1px solid lightgray;
    width: 40px;
    height: 60px;
    padding: 10px;
  }

  > * > tr > td > div > span {
    border: 1px solid lightgray;
    padding: 3px;
    font-size: 14px;
  }
`;

const Scoreboard = ({score}) => {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>7</th>
            <th>8</th>
            <th>9</th>
            <th>10</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><div><span>{score[0].r1}</span><span>{score[0].r2}</span></div>{score[0].cumulative}</td>
            <td><div><span>{score[1].r1}</span><span>{score[1].r2}</span></div>{score[1].cumulative}</td>
            <td><div><span>{score[2].r1}</span><span>{score[2].r2}</span></div>{score[2].cumulative}</td>
            <td><div><span>{score[3].r1}</span><span>{score[3].r2}</span></div>{score[3].cumulative}</td>
            <td><div><span>{score[4].r1}</span><span>{score[4].r2}</span></div>{score[4].cumulative}</td>
            <td><div><span>{score[5].r1}</span><span>{score[5].r2}</span></div>{score[5].cumulative}</td>
            <td><div><span>{score[6].r1}</span><span>{score[6].r2}</span></div>{score[6].cumulative}</td>
            <td><div><span>{score[7].r1}</span><span>{score[7].r2}</span></div>{score[7].cumulative}</td>
            <td><div><span>{score[8].r1}</span><span>{score[8].r2}</span></div>{score[8].cumulative}</td>
            <td><div><span>{score[9].r1}</span><span>{score[9].r2}</span></div>{score[9].cumulative}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Scoreboard;
