import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState, useEffect } from 'react';
import { TableControl } from 'react-bootstrap-table-control';
const Statement=()=>{
  return <TableControl
    header={[
      { key: "id", name: "#" },
      { key: "DATETIME", name: "DATETIME" },
      { key: "AMOUNT", name: "AMOUNT" },
      { key: "TYPE", name: "TYPE" },
      { key: "DETAILS", name: "DETAILS" },
      { key: "BALANCE", name: "BALANCE" }
    ]}
    itens={[
      {  DATETIME: "", AMOUNT: "" ,TYPE:"",DETAILS:"" ,BALANCE:"",},
      
    ]}
  />
  
}

export default Statement