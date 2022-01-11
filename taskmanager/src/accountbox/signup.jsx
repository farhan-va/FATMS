import React, { useState, useContext } from "react";
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, Submitbutton, P } from "./common";
import {Marginer} from "../marginer/marginer";
import { AccountContext } from "./accountcontext";
import { useHistory, Redirect } from "react-router-dom";
import SignupValidation from './signupvalidation';
import ToLogin from "../loginlanding";

export function Signupform() {
  const history= useHistory();
  // const movetohome = () => {
  //     history.push("/homepage");
  //   }
  const movetosignin = () => {
      history.push("/login");
    }
  const movetosuccess = () => {
    history.push("/success");
  }

  
  const [errors, setErrors] = useState({});

  const [values, setValuesReg] = useState({
    name: "",
    email: "",
    password: "",
    confpassword: ""
  });

  const handleChange = (event) => {
    setValuesReg({
      ...values,
      [event.target.name]: event.target.value,
    })
  };

  const handleFormSubmit = () => {
    setErrors(SignupValidation(values));
    if(Object.entries(errors).length===0) {
      movetosuccess();
    }
  };

return <BoxContainer>
    <FormContainer>
      <div className="name">
        <Input
          type="text"
          placeholder="Name"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        {errors.name && <P className="error">{errors.name}</P>}
      </div>
      <Input
        type="email"
        placeholder="Email"
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      {errors.email && <P className="error">{errors.email}</P>}
      <Input
        type="password"
        placeholder="Password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      {errors.password && <P className="error">{errors.password}</P>}
      <Input
        type="password"
        placeholder="Confirm Password"
        name="confpassword"
        value={values.confpassword}
        onChange={handleChange}
      />
      {errors.confpassword && <P className="error">{errors.confpassword}</P>}
    </FormContainer>
    <Marginer direction="vertical" margin={10} />

    <Submitbutton onClick={handleFormSubmit} type="submit">Sign up</Submitbutton>
    <Marginer direction="vertical" margin="1em" />
    <MutedLink href="/login"> Already have an account? <BoldLink href="/login" onClick={ToLogin()} >Sign in</BoldLink></MutedLink>
  </BoxContainer>
}

export default Signupform;