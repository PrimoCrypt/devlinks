/* eslint-disable react-hooks/rules-of-hooks */
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

const loginSchema = Yup.object({
  email: Yup.string().email("Enter valid email").required("Can't be empty"),
  password: Yup.string()
    .required("Please check again")
    .min(6, "min. of 6 characters"),
});

export const loginValidation = () =>
  useForm({
    resolver: yupResolver(loginSchema),
  });

const registerSchema = Yup.object({
  email: Yup.string().required("Can't be empty"),
  password: Yup.string()
    .required("Please check again")
    .min(6, "min. of 6 characters"),
  cnfPassword: Yup.string()
    .required("Password must match")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});

export const registerValidation = () =>
  useForm({
    resolver: yupResolver(registerSchema),
  });
