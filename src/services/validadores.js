const emailReg = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;

export const validateLogin = (email, password) => {
	return emailReg.test(email) && password.length > 7;
};

export const validateRegister = (nome, email, password, confirmPassword) => {
	return (
		emailReg.test(email) &&
		nome.length > 4 &&
		password.length > 7 &&
		confirmPassword == password
	);
};
