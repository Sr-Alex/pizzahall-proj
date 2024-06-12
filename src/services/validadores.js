const emailReg = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;

export const validateLogin = (data) => {
	const { email, password } = data;

	if ((!email, !password)) return false;

	const emailRes = emailReg.test(email);
	const passwordRes = password.length > 7;

	return emailRes && passwordRes;
};

export const validateRegister = (nome, email, password, confirmPassword) => {
	return (
		emailReg.test(email) &&
		nome.length > 4 &&
		password.length > 7 &&
		confirmPassword == password
	);
};
