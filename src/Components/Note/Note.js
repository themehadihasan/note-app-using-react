import React from 'react'
import '../Note/Note.css';

let timer = 500, timeout;
export default function Note(props) {

    const formateDate = (value) => {
        if(!value) return "";
        const date = new Date(value);
        const monthNames = [
            "January", "Febraury", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
        ]

        let hrs = date.getHours();
        let amPm = hrs < 12 ? "AM" : "PM";
        // hrs = hrs ? hrs : "12";
        // hrs = hrs > 12 ? (hrs = (-12) - hrs) : hrs;

        let minute = date.getMinutes();
        minute = minute < 10 ? "0" + minute : minute;

        let day = date.getDate();
        const month = monthNames[date.getMonth()];

        return `${hrs}:${minute} ${amPm}, ${day} ${month}`;
    }

    const debounce = (func) => {
        clearTimeout(timeout);
        timeout = setTimeout(func, timer);
    }

    const updateText = (text, id) => {
        debounce(() => props.updateText(text, id));
    }
    
  return (
    <div className='note' style={{backgroundColor:props.note.color}}>
        <textarea className='note-text' maxlength="150" defaultValue={props.note.text} onChange={(e) => updateText(e.target.value, props.note.id)}/>
        <div className='note-bottom'>
        <p>{formateDate(props.note.time)}</p>
        <i class='bx bx-trash' onClick={() => props.deleteNote(props.note.id)}></i>
        </div>
    </div>
  )
}
