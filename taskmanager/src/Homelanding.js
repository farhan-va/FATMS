import React from 'react';
import { Redirect } from "react-router";

export function ToHome() {
    return <Redirect to='/homepage' />;
}

export default ToHome;