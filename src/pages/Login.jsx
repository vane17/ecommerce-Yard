import React, {useRef} from 'react';
import '../styles/Login.scss';
import logo from '../../public/assets/logos/logo_yard_sale.svg';

const Login = () => {
	const form = useRef(null); //porque no lo estamos inicializando con ningun elemento

	const handleSubmit = (event) => {

		event.preventDefault(); //para que no se ejecute accion ya que el boton esta dentro del formulario
		//quita relog y no manda parametros url
		const formData = new FormData(form.current); //trae los valores
		const data = {
			usename: formData.get('email'),
			password: formData.get('password'),
		}
		console.log(data)
	}

	return (
		<div className="Login">
			<div className="Login-container">
				<img src={logo} alt="logo" className="logothere" />

				<form action="/" className="form" ref = {form}>
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" name="email" placeholder="platzi@example.cm" className="input input-email" />
					
					<label htmlFor="password" className="label">Password</label>
					<input type="password" name="password" placeholder="*********" className="input input-password" />
					
					<button className="primary-button login-button" onClick={handleSubmit}>Log in</button>
					<a href="/">Forgot my password</a>
				</form>

				<button className="secondary-button signup-button">Sign up</button>
			</div>
		</div>
	);
}

export {Login};