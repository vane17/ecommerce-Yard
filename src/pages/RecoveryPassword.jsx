import React from 'react';
import '../styles/RecoveryPassword.scss';
import logo from '../../public/assets/logos/logo_yard_sale.svg';

const PasswordRecovery = () => {
	return (
		<div className="PasswordRecovery">
			<div className="PasswordRecovery-container">
				<img src= {logo} alt="logo" className="logofour" />
				<h1 className="titleName">Password recovery</h1>
				<p className="subtitle">Inform the email address used to create your account</p>
				<form action="/" className="form">
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" id="email" className="input input-email" />
					<input type="submit" value="Confirm" className="primary-button login-button" />
				</form>
			</div>
		</div>
	);
}

export {PasswordRecovery};