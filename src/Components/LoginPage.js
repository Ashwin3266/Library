import { useNavigate } from "react-router-dom";

export default function Login_Page()
{
    const navigate = useNavigate();
    return(
        <div >
            <Input/>
            <div className="login-button">
                    <button onClick={()=>navigate('/')} className="login-button-anchor">Log In</button>
            </div>
        </div>
    );
}

function Input()
{
    return(
        <div className="input-box">
            <div className="input-alignment">
                <t1 className="email-text">Email</t1>
                <input type="text" placeholder="eg:john@gmail.com"></input>
            </div>
            <div className="input-alignment">
                <t1 className="password">Password</t1>
                <input type="text" placeholder="password"></input>
            </div>
        </div>
    )
}