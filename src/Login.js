import React from 'react'
import './assets/css/login.css';
export default function Login() {
    return (
        <>

   <body class="login_body">
    <div class="login_section">
          <h2>Login Page</h2><br />
            <div class="login">
                <form id="login" method="get" action="login.php">
                    <label><b>User Name
                    </b>
                    </label>
                    <input type="text" name="Uname" id="Uname" placeholder="Username" />
                    <br /><br />
                    <label><b>Password
                    </b>
                    </label>
                    <input type="Password" name="Pass" id="Pass" placeholder="Password" />
                    <br /><br />
                    <input type="button" name="log" id="log" value="Log In Here" />
                    <br /><br />
                    <input type="checkbox" id="check" />
                    <span>Remember me</span>
                    <br /><br />
                    Forgot <a href="#">Password</a>
                </form>
            </div>



          </div>
    </body>



        </>
    )
}
