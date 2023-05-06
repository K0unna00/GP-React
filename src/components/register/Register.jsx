import React, { useState } from 'react'
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
    let navication = useNavigate()

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [succeed, setSucceed] = useState(true);


    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://localhost:44370/account/register', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                UserName: userName,
                Password: password,
                Email: email
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
                <br></br>Enter Your Registration Details

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
                        Email:
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="govuk-input" style={{ width: '100%', height: '70px', fontSize: '24px' }} />
                    </label>
                    <label>
                        {succeed ? <p></p> : <p style={{ color: "red" }}>Password must include at least 1 uppercace, 1 lowercase and 1 symbol </p>}
                    </label>
                    <div className="buttons">
                        <Link to='/' className="button1">
                            Go back
                        </Link>
                        <Link to='/login' className="button1">
                            Go Login
                        </Link>
                        <button type='submit' className="button1" disabled={userName === '' || password === ''}>Register
                        </button>
                    </div>

                </form>
            </div>
        </div>

    )
}
