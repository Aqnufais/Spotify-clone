import React from 'react';
import "./Login.css"
import { loginUrl } from './Spotify';

function Login() {
    return (
        <>
        <div className="login">
            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_Green.png" alt="Spotify_logo" />
            <a href={loginUrl}>Login with Spotify</a>
        </div>
        </>

    )
}

export default Login