import React from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];


const Calender = () => {
    const [value, onChange] = useState<Value>(new Date());
  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  )
}

export default Calender;