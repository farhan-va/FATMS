import { idText, validateLocaleAndSetLanguage } from "typescript";
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, Submitbutton, P } from "./common";
import { Signupform } from "./signup";
import { AccountContext } from "./accountcontext";
import { Redirect } from "react-router-dom";


export function SignupValidation(values) {

    let errors = {};

    if (!values.name.trim()) {
        errors.name="Name is required."
    }
    if (!values.email) {
        errors.email = "Email is required."
    } else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = "Email is invalid."
    } else if(
        values.email==="farhan@mail.com"
        ||values.email==="palesha@mail.com"
        ||values.email==="megha@mail.com") {
        errors.email = "User already exists."
    }
    if (!values.password) {
        errors.password = "Password is required."
    } else if(values.password.length < 5) {
        errors.password = "Password must be longer than 5 characters."
    }
    if (!values.confpassword) {
        errors.confpassword = "Password confirmation is required."
    } else if(values.password !== values.confpassword) {
        errors.confpassword = "Passwords do not match."
    }
    // if (!errors) {
    //     return <Redirect to='/homepage'/>
    // }
    return errors;
}

export default SignupValidation;