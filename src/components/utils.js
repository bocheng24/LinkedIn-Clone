export const validPassword = (password, confPassword) => {
    return password.length > 0 && confPassword.length > 0 && password === confPassword
}

export const validInput = input => {
    return input.length > 0
}

