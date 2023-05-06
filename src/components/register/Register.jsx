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
        console.log(`${userName} ${password} , ${email}` );
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
                if (data) {
                    sessionStorage.setItem("userName", userName)
                    navication('/complation')
                }
                else {
                    setSucceed(data)
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
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="formTitle">
                        What is your first name ?
                    </div>
                    <label>
                        First Name:
                        <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} className="govuk-input" required />
                    </label>
                    <br />
                    <label>
                        Middle Name (optional):
                        <input type="text" />
                    </label>
                    <br />
                    <label>
                        Surname:
                        <input type="text" required />
                    </label>
                    <br />
                    <div className="formTitle">
                        What is your Gender ?
                    </div>
                    <input type="radio" className='radioBtn' id="html" name="fav_language" value="HTML" />
                    <label htmlFor="html">Male</label><br />
                    <input type="radio" className='radioBtn' id="css" name="fav_language" value="CSS" />
                    <label htmlFor="css">Female</label><br />
                    <input type="radio" className='radioBtn' id="javascript" name="fav_language" value="JavaScript" />
                    <label htmlFor="javascript">Prefer not to say</label>

                    <div className="formTitle">
                        What is your data of birthday ?
                    </div>
                    <input type="date" required />
                    <div className="formTitle">
                        What is your addres ?
                    </div>
                    <br />
                    <label>
                        Address Line 1 :
                        <input type="text" required />
                    </label><br />
                    <label>
                        Address Line 2 (optional) :
                        <input type="text" />
                    </label><br />
                    <label>
                        Town of city :
                        <input type="text" required />
                    </label>
                    <br />
                    <label>
                        Postal Code
                        <input type="text" required />
                    </label>
                    <div className="formTitle">
                        Contact details
                    </div>
                    <br />
                    <label>
                        Contact Number :
                        <input type="text" required />
                    </label><br />
                    <label>
                        Email:
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="govuk-input" required />
                    </label><br />
                    <label>
                        Emergency Contact Number :
                        <input type="text" required />
                    </label><br />
                    <label>
                        Emergency Contact Name :
                        <input type="text" required />
                    </label>
                    <br />
                    <label>
                        Password:
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="govuk-input" required />
                    </label>


                    {/* <label>
                        User Name:
                        <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} className="govuk-input"  />
                    </label>
                    <br />
                    <label>
                        Password:
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="govuk-input" style={{ width: '100%', height: '70px', fontSize: '100px' }} />
                    </label>
                    <br />
                    <label>
                        Email:
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="govuk-input"  />
                    </label> */}

                    <label>
                        {succeed ? <p></p> : <p style={{ color: "red" }}>Password must include at least 1 uppercace, 1 lowercase and 1 symbol </p>}
                    </label>
                    <label>
                        <div className="formTitle">
                            Now Send your application
                        </div>
                        <button type='submit' className="submitBtn">Register
                        </button>
                    </label>
                    <div className="buttons">
                        <Link to='/selectRole' className="button1">
                            Go back
                        </Link>
                        <Link to='/login' className="button1">
                            Go Login
                        </Link>
                    </div>

                </form>
            </div>
        </div>

    )
}
