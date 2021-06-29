import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const StatusContainer = styled.div`
margin: 30px 0;
`;

const Status = (props) => {



  return (
    <StatusContainer>
      <h3>{props.gameOver ? 'GAME OVER' : 'Game on!'}</h3>
      <p>Current Frame: { props.currentFrame <= 10 ? props.currentFrame : 'Nice! Bonus round!'}<br />
      Current Roll: {props.currentRoll}</p>
    </StatusContainer>
  )
}

export default Status;
