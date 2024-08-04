import { createUserWithEmailAndPassword, FacebookAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import Swal from 'sweetalert2'
import auth from "../firebase/firebase.config";

export  const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);
    const [loader , setLoader] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const handleGoogleLogin = (navigate , location) => {
        setLoader(true);
        return signInWithPopup(auth, googleProvider)
        .then(() => {
            navigate(location?.state ? location?.state : '/' )
            Swal.fire({
              title: "Good job!",
              text: "You have successfully logged into Google.",
              icon: "success",
            });
          })
          .catch((error) => {
            const errorMessage = error.message;
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: errorMessage,
            });
          });
      };
    const handleFacebookLogin = (navigate , location) => {
        setLoader(true);
        return signInWithPopup(auth, facebookProvider)
        .then(() => {
            navigate(location?.state ? location?.state : '/' )
            Swal.fire({
              title: "Good job!",
              text: "You have successfully logged into Google.",
              icon: "success",
            });
          })
          .catch((error) => {
            const errorMessage = error.message;
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: errorMessage,
            });
          });
      };

      const createAccount = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
      };
      const handleLoginAccount = (email , password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const handleLogout = () =>{
      signOut(auth)
      .then(()=>{
          Swal.fire({
              title: "Good job!",
              text: "You've been successfully logged out",
              icon: "success",
            });
      })
      .catch((error)=>{
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error?.message,
          });
      })
  }

      useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoader(false);
          });
          return () => {
            unSubscribe();
          };
    },[]);
    const userInfo ={user,loader,handleGoogleLogin , handleFacebookLogin , createAccount , handleLoginAccount , handleLogout}
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;