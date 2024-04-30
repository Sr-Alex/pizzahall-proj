const emailReg = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;

export const validateLogin = (email, password, Toast = {}) => {
	const emailRes = emailReg.test(email);
	const passwordRes = password.length > 7;

	if (Toast) {
		if (!email || !emailRes) Toast.warn("Email Inválido.", "top");
		if (!passwordRes) Toast.warn("A senha deve ter pelo menos um carácter numérico", "top");
	};

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