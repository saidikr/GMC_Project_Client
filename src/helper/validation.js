import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup
    .string()
    .required("No password provided")
    .min(8, "Password is too short - should be 8 chars minimum"),
});

export const productSchema = yup.object({
  title : yup.string().min(9).max(60).required(),
  price : yup
      .number()
      .label('Rate')
      .required(),
  description : yup.string().required(),
  category : yup.string().required(),
  rating : yup
      .number()
      .label('Rate')
      .required(),
  quantity: yup.string().required(),
  image:yup.mixed().test("required","you need to provide" ,(file)=>{
    if(file) return true;
    return false
  })
});

