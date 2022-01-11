import React from "react";
import styled from "styled-components";
import './styles.css';
import { useHistory } from "react-router";
import { FaSignOutAlt } from 'react-icons/fa'




const Submitbutton = styled.button`
  width: 200px;
  height: 70px;
  color: white;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all,240ms ease-in-out;
  background: rgb(131,58,180);
background: linear-gradient(90deg, rgba(131,58,180,1) 0%, 
rgba(69,120,176,0.5886729691876751) 100%, 
rgba(252,176,69,1) 100%);

  &:hover{
   filter: brightness(1.03);
  }
`;

function Homepage() {
  const history=useHistory();
  const opennotes = (
    ) =>{
      history.push("/notes");
    };
  const opencalendar = (
    ) =>{
        history.push("/calendar");
      };
  
  const opentodo = (
    ) =>{
         history.push("/todolist");
      };

  const signout = (
    ) =>{
          history.push("/");
      };
  
  return(
    <div id="div">

  <div className="homepageheader">
   One Workspace
  </div>
  
  <div className="noteheader">
   <Submitbutton onClick={opennotes}> Notes </Submitbutton>
    <br/>
  </div>
  
  <div className="calendarheader">
   <Submitbutton onClick={opencalendar}> Calendar </Submitbutton>
    <br/>
  </div>
  
  <div className="todoheader">
   <Submitbutton onClick={opentodo}> Todo List</Submitbutton>
    <br/>
  </div>
  
  <FaSignOutAlt className="signout-icon  fa-2xl" onClick={signout}/>
 </div>
 );
}

export default Homepage;