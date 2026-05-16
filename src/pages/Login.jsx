import React from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); 

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(username,password);

        console.log("Envio");

        navigate('/home');

        
    };

    return (
        <div>
            <div className="container">

                <form onSubmit={handleSubmit}>

                    <h1>Acesse Suas Finanças</h1>

                    <div>
                        <input type="email" placeholder='E-mail' 
                        onChange={(e) => setUsername(e.target.value)} />
                        <FaUser className='Icon' />

                    </div>


                    <div>
                        <input type="password" placeholder='Senha' 
                        onChange={(e) => setPassword(e.target.value)} />
                        <FaLock className='Icon' />

                    </div>

                    <div className="recall-forget">
                        <label>
                            <input type="checkbox" />
                            Lembre de mim
                        </label>

                        <a href="#">Esqueceu a senha?</a>

                    </div>

                    <button>Entrar</button>

                    <div className="signup-link">
                        <p>Não tem uma conta? <a href="#">Registrar</a> </p>
                    </div>

                </form>

            </div>
        </div>
    )
}

export default Login
