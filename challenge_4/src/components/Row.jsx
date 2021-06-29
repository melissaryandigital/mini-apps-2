import React from 'react';

const Row = ({ row, rowNum, revealCell }) => (

  <li className={`row row_${rowNum}`} key={`${rowNum + 1}`}>

    {row.map((col, i) => (
      <div className={`col col_${i}`}>
        <div className={`cell ${col.revealed ? 'revealed' : ''} ${col.mine}`} onClick={() => { revealCell(rowNum, i);}}>{col.marker}</div>
      </div>
    ))}

  </li>

);

export default Row;
