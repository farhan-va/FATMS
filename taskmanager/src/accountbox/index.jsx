import React from "react";
import {useState} from 'react';
import styled from "styled-components";
//import {AccountBox} from "./"
import { Loginform } from "./loginform";
import { motion } from "framer-motion";
import { AccountContext } from "./accountcontext";
import { Signupform } from "./signup";



const BoxContainer = styled.div`
   width: 400px;
   min-height: 550px;
   display: flex;
   flex-direction: column;
   border-radius: 19px;
   background-color: #282c34;
   box-shadow: 0 0 2px rgba(15,15,15,0.28);
   position: relative;
   overflow: hidden;
`;

const TopContainer = styled.div`
   width: 100%;
   height: 250px;
   display: flex;
   flex-direction: column;
   justify-content: flex-end;
   padding: 0 1.8em;
   padding-bottom: 5em;
`; 



const BackDrop = styled(motion.div)`
   width: 160%;
   height: 550px;
   position: absolute;
   display: flex;
   flex-direction: column;
   border-radius: 50%;
   top: -290px;
   left: -100px;
   background: rgb(131,58,180);
   background: linear-gradient(
   90deg, 
   rgba(131,58,180,1) 0%, 
   rgba(253,29,29,1) 50%, 
   rgba(252,176,69,1) 100%
   );
`;

const HeaderContainer = styled.div`
   width: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.h2`
   font-size: 33px;
   font-weight: 600;
   line-height: 1.24;
   color: #fff;
   z-index: 10;
   margin: 0;
`;

const Stext = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 15px;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
`;

const Innercontainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
`;

const backdropVariant = {
   expanded: {
      width:"233%",
      height: "1050px",
      borderRadius: "20%"
   },
   collapsed:{
      width: "160%",
      height: "550px",
      borderRadius: "50%"

   },
};

const expandingtransition ={
   type: "spring",
   duration: 2.3,
   stiffness: 30,
};


export function AccountBox(props){
 const [isExpanded, setExpanded] = useState(false);
 const[active,setActive] =useState("signin");


 const playTransition = () => {
    setExpanded(true);
    setTimeout(() => {
       setExpanded(false);
    },expandingtransition.duration *1000-1500);
 }
 const switchtosignup=()=>{
   playTransition();
   setTimeout(() => {
      setActive("signup");
   }, 400);
   
};

const switchtosignin=()=>{
   playTransition();
   setTimeout(() => {
      setActive("signin");
   }, 400);
   
};
 

 const contextValue ={switchtosignup,switchtosignin};
 
 
 return (
 <AccountContext.Provider value={contextValue}>
 <BoxContainer>
  <TopContainer>
   <BackDrop 
   initial= {false} 
   animate={isExpanded ? "expanded" : "collapsed"} 
   variants={backdropVariant}
   transition= {expandingtransition} />
   { active === "signin" && (<HeaderContainer>
      <Header>Welcome</Header>
      <Header>Back</Header>
      <Stext>Please Log-in to continue</Stext>
   </HeaderContainer>
   )}
   { active === "signup" && (<HeaderContainer>
      <Header>Create</Header>
      <Header>Account</Header>
      <Stext>Please sign up to continue</Stext>
   </HeaderContainer>
   )}
  </TopContainer>
  <Innercontainer>
     {active === "signin" && <Loginform/>}
     {active === "signup" && <Signupform/>}
  </Innercontainer>
 </BoxContainer>
 </AccountContext.Provider>
 );
};

export default AccountBox;