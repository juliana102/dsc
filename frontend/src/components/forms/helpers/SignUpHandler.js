import React from "react";
import { signUp } from "../../../utils/auth";

const SignUpHandler = () => {
    const [ email, setEmail ] = React.useState("");
    const [ pass, setPass ] = React.useState("");
    const [err, setErr] = React.useState(false);

    const handleEmail = e => setEmail(e.target.value);
    const handlePass = e => setPass(e.target.value);

    const handleSignUp = () => (
        signUp(email, pass).catch(() => setErr(true))
    );

    return{
        err,
        handleEmail,
        handlePass,
        handleSignUp
    }
};

export default SignUpHandler