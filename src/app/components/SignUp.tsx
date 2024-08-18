"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
import axios from "axios";

interface SignupFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function SignIn() {
  const [error, setError] = React.useState<string | null>(null);
  const { data: session } = useSession();
  const router = useRouter();
  const form = useForm<SignupFormValues>();
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = form;

  const onSubmit = async (data: SignupFormValues) => {
    try {
      const response = await axios.post(
        "https://akil-backend.onrender.com/signup",
        data
      );
      console.log(response.status);
      if (response.status === 200) {
        // Signup successful
        router.push(`/verification?email=${encodeURIComponent(data.email)}`);
      }
    } catch (error) {
      // Handle signup error
      setError((error as any).response?.data?.message || (error as any).message);
      console.error(
        "Signup error:",
        (error as any).response?.data?.message || (error as any).message
      );
    }
  };

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session, router]);

  return (
    <main className="flex justify-center itmes-center p-8">
      <div className="w-full max-w-xl py-6 px-10 sm:px-28 bg-white border rounded-border-rad flex flex-col items-center justify-center">
        <div className="font-black text-custom-color text-custome-size0 sm:text-custome-size1">
          Sign Up Today!
        </div>
        <div className="flex flex-col items-center w-full my-6 space-y-4">
          <button
            onClick={() => signIn("google")}
            className="bg-white text-blue-900 hover:bg-gray-50 border rounded-custom-rad0 w-full py-2 px-4 flex items-center justify-center shadow-sm"
          >
            <FcGoogle className="mr-3 size-5" />
            <span className="text-custom-color font-semibold">
              Sign Up with Google
            </span>
          </button>
          <button
            onClick={() => signIn("github")}
            className="bg-white text-blue-900 hover:bg-gray-50 border rounded-custom-rad0 w-full py-2 px-4 flex items-center justify-center shadow-sm"
          >
            <SiGithub className="mr-3 size-5" />
            <span className="text-custom-color font-semibold">
              Sign Up with Github
            </span>
          </button>
        </div>
        <section className="flex justify-center items-center space-x-1 mb-4 font-epilogue text-gray-600 w-full">
          <span className="bg-gray-400 w-3/12 h-px"></span>
          <div className="text-center">Or Sign Up with Email</div>
          <span className="bg-gray-400 w-3/12 h-px"></span>
        </section>
        <form
          className="space-y-6 w-full"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              className={`mt-1 block w-full px-3 py-2 border rounded-custom-rad0 ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              type="text"
              id="name"
              placeholder="Enter your full name"
              {...register("name", {
                required: {
                  value: true,
                  message: "Your Full Name is required.",
                },
              })}
            />
            <p className="mt-2 text-sm text-red-600">{errors.name?.message}</p>
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className={`mt-1 block w-full px-3 py-2 border rounded-custom-rad0 ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              type="email"
              id="email"
              placeholder="Enter email adress"
              {...register("email", {
                required: { value: true, message: "Email is required." },
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Invalid email format.",
                },
              })}
            />
            <p className="mt-2 text-sm text-red-600">{errors.email?.message}</p>
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className={`mt-1 block w-full px-3 py-2 border rounded-custom-rad0 ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              type="password"
              id="password"
              placeholder="Enter password"
              {...register("password", {
                required: { value: true, message: "Password is required." },
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long.",
                },
              })}
            />
            <p className="mt-2 text-sm text-red-600">
              {errors.password?.message}
            </p>
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              className={`mt-1 block w-full px-3 py-2 border rounded-custom-rad0 ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              type="password"
              id="confirmPassword"
              placeholder="Enter password"
              {...register("confirmPassword", {
                required: {
                  value: true,
                  message: "Confirm Password is required.",
                },
                validate: (value) =>
                  value === form.getValues("password") ||
                  "Passwords do not match.",
              })}
            />
            <p className="mt-2 text-sm text-red-600">
              {errors.confirmPassword?.message}
            </p>
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <section>
            <button
              type="submit"
              className="w-full bg-custom-color2 hover:bg-blue-600 text-white 
              font-bold py-2 px-4 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 
              focus:ring-opacity-50 transition ease-in-out duration-300"
            >
              Submit
            </button>
          </section>
          <section className="w-full text-custome-size font-epilogue text-gray-400">
            <div>
              Already have an account?{" "}
              <Link href="/signin" className="text-blue-800">
                Log In
              </Link>
            </div>
            <p className="mt-6">
              By clicking 'Continue', you acknowledge that you have read and
              accepted our{" "}
              <span className="text-blue-800">Terms of Service</span> and{" "}
              <span className="text-blue-800">Privacy Policy</span>.
            </p>
          </section>
        </form>
      </div>
    </main>
  );
}
