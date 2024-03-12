export const isEmail = ({ value, label }: any) => {
    let error = ''
    const isValid = value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
    if (!value) error = `${label} is required`
    else if (!isValid) error = `Enter valid Email ${label}`
    return error
}

export const isMobileNo = ({ value, label }: any) => {
    let error = ''
    if (!value) error = `${label} is required`
    else if (value.length != 10) error = `${label} should be 10 digits`
    else if (!value.match(/^(\+\d{1,3}[- ]?)?\d{10}$/)) error = `Valid ${label} is required`
    return error
}

export const isUsername = ({ value }: any) => {
    let error = ''
    if (!value) error = `email or mobile number is required`
    else if (parseInt(value) > 0) error = isMobileNo({ value, label: "Mobile no" })
    else error = isEmail({ value, label: "Email id" })
    return error
}