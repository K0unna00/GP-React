import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function Login() {
    let navication = useNavigate()

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [succeed, setSucceed] = useState(true);




    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://localhost:44370/account/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                UserName: userName,
                Password: password
            })

        }).then(res => res.json())
            .then(data => {
                if (!data) setSucceed(data);
                else {
                    sessionStorage.setItem("userName",userName)
                    navication('/')
                }
            })
    }

    return (
        <div>
            <div className="navbar">
                <div className="left-nav">GOV.UK</div>
                <div className="center-nav">GP Service</div>
            </div>
            <div className="blue-strip"></div>

            <h4 className="header-text">
                <br></br> <br></br>
                <br></br>Enter Your Login Details

            </h4>
            <div className="text-center">
                <form onSubmit={handleSubmit}>
                    <label>
                        User Name:
                        <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} className="govuk-input" style={{ width: '100%', height: '70px', fontSize: '24px' }} />
                    </label>
                    <br />
                    <label>
                        Password:
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="govuk-input" style={{ width: '100%', height: '70px', fontSize: '100px' }} />
                    </label>
                    <br />
                    <label>
                        {succeed ? <p></p> : <p style={{ color: "red" }}>Username or password is not correct</p>}
                    </label>
                    <div className="buttons">
                        <Link to='/' className="button1">
                            Go back
                        </Link>
                        <Link to='/register' className="button1">
                            Go Register
                        </Link>
                        <button type='submit' className="button1" disabled={userName === '' || password === ''}>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
