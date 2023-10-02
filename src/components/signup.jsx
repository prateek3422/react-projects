import React from "react";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import { Input, Button } from "./index.js";
const signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();

  const signup = async (data) => {
    setError("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const userData = await authService.getUser();
        if (userData) {
          dispatch(login(userData));
        }
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="flex items-center justify-center">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign up to create account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(signup)}>
          <Input
            lable="Full Name"
            placeholder="Enter your Full Name"
            {...register("name", {
              required: true,
            })}
          />

          <Input
            lable=" email"
            palaceholder="Enter your email"
            type="email"
            {...register("email", {
              required: true,
              matchPattern: (value) =>
                /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/gm.test(
                  value
                ) || "Email address must be a valid adress",
            })}
          />

          <Input
            lable="Password"
            placeholder="Enter your password"
            {...register("password", {
              required: true,
            })}
          />
          <Button type="submit">Create Account</Button>
          
        </form>
      </div>
    </div>
  );
};

export default signup;
