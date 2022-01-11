import React, { useState, useContext, useEffect } from "react";
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, Submitbutton, P } from "./common";
import { Marginer } from "../marginer/marginer";
import { AccountContext } from "./accountcontext";
import {BrowserRouter as Router} from "react-router-dom"; 
import { useHistory } from "react-router-dom";
import ToLogin from "../loginlanding";
import LoginValidation from "./loginvalidation";
import ToHome from "../Homelanding";
//import homepage from "../home/homepage";




export function Loginform(){
  const history = useHistory();
  const movetohome = () => {
      history.push("/homepage");
    }
  const [values, setValuesReg] = useState({

    email: "",
    password: ""

  }); 
  const [errors, setErrors] = useState({});
  const [dataiscorrect, setdataiscorrect] = useState(false);


  const handleChange = (event) => {
    setValuesReg({
      ...values,
      [event.target.name]: event.target.value,
    })
  };

  const handleFormSubmit = () => {
    setdataiscorrect(true);setErrors(LoginValidation(values));
    // (Object.entries(errors).length === 0) {
  };

  useEffect(()=>{
    if (Object.keys(errors).length === 0 && dataiscorrect){
      movetohome();
    }
  }, [errors]);
  // ToHome();

  const {switchtosignup}= useContext(AccountContext);


 return (<Router>
   <BoxContainer>
     <FormContainer>
       <Input type="email" placeholder="Email" name="email" value={values.email} onChange={handleChange}/>
       {errors.email && <P className="error">{errors.email}</P>}
       <br/> 
       <Input type="password" placeholder="Password" name="password" value={values.password} onChange={handleChange}/>
       {errors.password && <P className="error">{errors.password}</P>}
      </FormContainer>
      <Marginer direction="vertical" margin={10}/>
      <MutedLink href="#"> Forgot your password</MutedLink>
      <Marginer direction="vertical" margin="1.6em"/>
      <Submitbutton  onClick={handleFormSubmit} type="submit" href=" /home/homepage">Sign in</Submitbutton>
      <Marginer direction="vertical" margin="1em"/>
      <MutedLink href="/signup"> Don't have an account?<BoldLink href="/signup" onClick= {ToLogin()} > Sign up</BoldLink></MutedLink>
    </BoxContainer>
    </Router>
 );
}

