import React, { useState } from 'react';
import './Login.css';
import logo from './amazon_PNG21.png';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                if (auth) {
                    history.push('/');
                }
            })
            .catch(err => {
                alert(err.message);
            })
    }
    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                if (auth) {
                    history.push('/');
                }
            })
            .catch(err => {
                alert(err.message);
            })
    }
    return (
        <div className="login">
            <Link to="/">
                <img src={logo} className="login__img" />
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button type="submit" className="login__button" onClick={signIn}>Sign In</button>
                </form>
                <p>
                    By signing0in you agree to Arvik Amazon Clone's condition
                    of Use Sale. Please
                    see our Policiy Notice , our Cookie Notice and our Interest-Based Ads Notice.

                </p>
                <p>Clone by Arvik :-)</p>
                <button className="register__button" onClick={register}>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
