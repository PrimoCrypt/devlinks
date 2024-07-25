/* eslint-disable react-hooks/rules-of-hooks */
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

const loginSchema = Yup.object({
  email: Yup.string()
    .email("Please enter valid email")
    .required("Can't be empty"),
  password: Yup.string()
    .required("Please check again")
    .min(6, "Please enter minimum if 6 characters for password"),
});

export const loginValidation = () =>
  useForm({
    resolver: yupResolver(loginSchema),
  });

const registerSchema = Yup.object({
  email: Yup.string().required("Can't be empty"),
  password: Yup.string()
    .required("Please check again")
    .min(6, "Please enter minimum if 6 characters for password"),
  cnfPassword: Yup.string()
    .required("Password must match")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});

export const registerValidation = () =>
  useForm({
    resolver: yupResolver(registerSchema),
  });
