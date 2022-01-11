import React from 'react';
import "./tdstyles.css";
//import Todoform from './tdcomponent/todoform';
import Todolist from './tdcomponent/todolist';

export default function Todomod() {
  return (
    <div id ="div" className="to-dolist">
      
      <Todolist/>
    </div>
  );
}
