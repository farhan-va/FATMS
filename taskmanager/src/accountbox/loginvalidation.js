import { idText, validateLocaleAndSetLanguage } from "typescript";
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, Submitbutton, P } from "./common";
import { Signupform } from "./signup";
import { AccountContext } from "./accountcontext";
import { Redirect } from "react-router-dom";


export function LoginValidation(values) {
    
    let errors = {};

    if (!values.email) {
        errors.email = "Email is required."
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email is invalid."
    } else if (
        values.email !== "farhan@gmail.com"
        && values.email !== "palesha@gmail.com"
        && values.email !== "megha@gmail.com") {
        errors.email = "User not found."
    }
    if (!values.password) {
        errors.password = "Password is required."
    } else if (
        (values.email==="farhan@mail.com"&&values.password!=="nahraf")
        || (values.email === "palesha@mail.com" && values.password !== "ahselap")
        || (values.email === "megha@mail.com" && values.password !== "ahgemm")) {
            errors.password = "Wrong password."
        }
    
    // if (!errors) {
    //     return <Redirect to='/homepage'/>
    // }
    return errors;
}

export default LoginValidation;