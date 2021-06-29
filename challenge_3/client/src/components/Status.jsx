import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const StatusContainer = styled.div`
margin: 30px 0;
`;

const Status = (props) => {
  return (
    <StatusContainer>
      Current Frame: { props.currentFrame <= 10 ? props.currentFrame : 'Nice! Bonus round!'}<br />
      Current Roll: {props.currentRoll}
    </StatusContainer>
  )
}

export default Status;
