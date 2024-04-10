const emailReg = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;

export const validateLogin = (loginData) => {
	const { email, senha } = loginData;

	if (!email || !senha) return false;

	return emailReg.test(email) && senha.length > 7;
};

export const validateRegister = (registerData) => {
	const { nome, email, senha } = registerData;

	if (!nome || !email || !senha) return false;

	return emailReg.test(email) && nome.length > 4 && senha.length > 7;
};
