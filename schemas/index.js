import * as yup from "yup";

const passwordRegExp = new RegExp(/^[A-Za-z]\w{7,14}$/);

export const registerSchema = yup.object().shape({
  name: yup.string().min(5).required("Please enter your name"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please enter your email"),
  password: yup
    .string()
    .matches(passwordRegExp, "Password must 7 characters long")
    .required("Please enter your password"),
  cPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Confirm password must be same with password")
    .required("Please enter password again for confirmation "),
});
