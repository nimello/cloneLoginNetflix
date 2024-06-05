/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import './index.css';

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [botaoClicado, setBotaoClicado] = useState(false);

  const validEmail = "nimello@gmail.com";
  const validPassword = "senha123";

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
    setBotaoClicado(!botaoClicado);
  };

  useEffect(() => {
    if (botaoClicado) {
      if (email === validEmail && password === validPassword) {
        alert('Login bem-sucedido');
        console.log('Login bem-sucedido');
      } else {
        alert('Dados incorretos. Tente novamente.')
        console.log('Dados incorretos. Tente novamente.');
      }
      setBotaoClicado(false);
    }
  },[botaoClicado, email, password]);

  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
          <h1>Entrar</h1>
          <div className='input-field'>
            <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='input-field'>
            <input type="password" placeholder='Senha' onChange={(e) => setPassword(e.target.value)} />
          </div>

          <button onClick={() => setBotaoClicado(true)}>Entrar</button>

          <div className='recall-forget'>
            <label>
              <input type='checkbox' />
              Lembre-se de mim
            </label>
            <a href="#">Precisa de ajuda?</a>
          </div>

          <div className='signup-link'>
            <p>Novo por aqui? <a href="#"><strong>Assine agora.</strong></a></p>
          </div>
        </form>
      </div>
  );
}

export default Login