import React from 'react';

import { PasswordForgetForm } from '../PasswordForget';
import { withAuthorization } from '../Session';

import PasswordChangeForm from '../PasswordChange';

const AccountPage = () => {
	<div>
		<h1></h1>
		<PasswordForgetForm />
		<PasswordChangeForm />
	</div>
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);