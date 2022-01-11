import React from 'react';
import { Redirect } from "react-router";

export function ToLogin() {
    return <Redirect to='/login'/>;
}

export default ToLogin;