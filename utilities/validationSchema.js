import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  name: yup
    .string()
    .required("name is required")
    .max(50),
  email: yup
    .string()
    .email("must be an email")
    .required("email is required")
    .max(50),
  message: yup.string().required("message is required").max(750),
});
