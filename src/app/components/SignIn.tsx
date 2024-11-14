"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import axios from "axios";

interface FormValue {
  email: string;
  password: string;
}

export default function SignIn() {
  const { data: session } = useSession();
  const [response, setResponse] = React.useState<any>(null);
  const router = useRouter();

  const { formState, handleSubmit, register } = useForm<FormValue>();
  const { errors } = formState;

  const onSubmit = async (data: FormValue) => {
    const response = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (response?.error) {
      console.error("Sign-in error:", response.error);
      setResponse({ error: response.error });
    } else {
      router.push("/");
    }
  };

  if (session) {
    console.log("Access token:", session);
  }

  return (
    <main className="flex justify-center itmes-center min-h-screen p-6 bg-[url('./assets/background01.jpg')] bg-cover bg-center">
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm"></div>
      <div className="relative z-10 w-full max-w-xl py-6 px-8 sm:px-28 bg-white/60 border rounded-border-rad flex flex-col items-center justify-center">
        <div className="font-black text-custom-color text-custome-size0 sm:text-custome-size1">
          Welcome Back,
        </div>
        <section className="flex justify-between items-center space-x-1 my-5 font-epilogue text-gray-500 w-full">
          <span className="bg-gray-400 w-3/12 h-px"></span>
          <span className="bg-gray-400 w-3/12 h-px"></span>
        </section>
        <form
          className="space-y-6 w-full"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <section>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email Adress
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
          </section>
          <section>
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
          </section>
          <section>
            {response?.error && (
              <p className="text-left mb-2 text-red-600">{response.error}. Wrong email or password</p>
            )}
            <button
              type="submit"
              className="w-full bg-custom-color2 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition ease-in-out duration-300"
            >
              Log In
            </button>
          </section>
          <section className="w-full text-custome-size font-epilogue text-white">
            <div>
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-blue-800">
                Sign Up
              </Link>
            </div>
          </section>
        </form>
      </div>
    </main>
  );
}
