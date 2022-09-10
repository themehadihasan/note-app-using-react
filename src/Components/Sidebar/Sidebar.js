import React, { useState } from 'react';
import '../Sidebar/Sidebar.css';

export default function Sidebar(props) {
  const colors = ["#fff673", "#bcfc7f", "#b0fffa", "#d5c1ff", "#ffd29e"]
  const [listOpen, setListOpen] = useState(false);

  return (
    <div className='sidebar'>
      <i class='bx bxs-plus-circle' onClick={() => setListOpen(!listOpen)}></i>
      <ul className={`sidebar-list ${listOpen?"sidebar-list-active":""}`}>
      {
        colors.map((item, index) => (
            <li key={index} className='sidebar-list-item' style={{backgroundColor: item}} onClick={() => props.addNote(item)}/>
        ))
      }
      </ul>
    </div>
  )
}
