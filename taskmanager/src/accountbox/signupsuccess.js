import React, { useContext } from 'react';
import "../App.css";
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, Submitbutton, P } from "./common";
import { useHistory } from "react-router-dom";
import ToLogin from '../loginlanding';

export function SignupFormSuccess() {
    
    const history = useHistory();

    const movetosignin = () => {
        history.push("/login");
    }

    return (
        <div className="container">
            <div className="app-wrapper">
                <h1 className="form-success">Account Created!</h1>
                <MutedLink href="/login">Login<BoldLink href="/login" onClick={movetosignin()} > here</BoldLink></MutedLink>
            </div>
        </div>
    );
};

export default SignupFormSuccess;