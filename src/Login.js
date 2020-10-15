import React from 'react';
import './Login.css';
import {auth , provider } from './firebase';
import {actionTypes} from './reducer';
import {useStateValue} from './StateProvider';



function Login(){
    const [state , dispatch] = useStateValue();

    const signIn =()=> {
        auth
        .signInWithPopup(provider)
        .then(result =>{
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,

            })
        })
        .catch(error => alert(error.message));

        


    };


    return(
        <div className="login">
            <div className="login_logo">
            <img 
               src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
               alt=""
            />

            <img 
            src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
            alt=""
            />

            </div>
            <button type="submit" onClick={signIn}>
                Sign In
            </button>

        </div>
    );
}
export default Login;
