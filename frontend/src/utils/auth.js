import { ref, firebaseAuth } from "../firebase/config"

export const saveUser = user => (
    ref.child(`users/${user.uid}/info`)
        .set({
            email: user.email,
            uid: user.uid
        })
        .then(() => user)
);

//If user does not have an account this function will allow them to sign up with firebase.
export const signup = (email, pass) => (
    firebaseAuth().createUserWithEmailAndPassword(email, pass)
        .then(saveUser)
);

//Allows the user to log in with their email and password which is already in firebase.
export const login = (email, pass) => (
    firebaseAuth().signInWithEmailAndPassword(email, pass)
);

//Allows user to reset password by sending temp via email.
export const resetPass = email => (
    firebaseAuth().sendPasswordResetEmail(email)
);

//Self explanatory.
export const logout = () => (
    firebaseAuth().signOut()
);