"use client";

import Image from "next/image";
import logo from "@/public/assets/images/logo-devlinks-large.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/lib/firebase";

export default function CreateAccount() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmed, setConfirmed] = useState("");
  const router = useRouter();

  const validateCredentials = (
    email: string,
    password: string
  ): string | null => {
    if (!email) {
      setEmailError("Can't be empty.");
    }
    if (!password) {
      setPasswordError("Password is required.");
    }
    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
    }
    return null;
  };

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    const error = validateCredentials(email, password);
    if (error) {
      console.log(error);
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, confirmed);
      console.log("User created successfully");
      router.push("/home");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen gap-8">
      <Image src={logo} alt="app logo" />
      <div className="bg-white rounded-lg p-8 w-[90%] md:w-[30rem]">
        <h1 className="text-darkGrey font-semibold text-4xl">Create account</h1>
        <p className="text-grey">Let’s get you started sharing your links! </p>
        <form onSubmit={handleCreateUser} className="flex flex-col my-10 gap-8">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className={`${
                emailError !== "" ? "text-errorRed" : "text-darkGrey"
              } text-xs`}
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              className={`${
                emailError !== "" ? "border-errorRed" : "border-borders"
              }  rounded-md p-2 bg-white border-2 focus:outline-none text-darkGrey text-sm`}
              placeholder="e.g. alex@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="text-errorRed text-xs">{emailError}</p>
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className={`${
                passwordError !== "" ? "text-errorRed" : "text-darkGrey"
              } text-xs`}
            >
              Create password
            </label>
            <input
              type="password"
              id="password"
              className={`${
                passwordError !== "" ? "border-errorRed" : "border-borders"
              }  rounded-md p-2 bg-white border-2 focus:outline-none text-darkGrey text-sm`}
              placeholder="At least 8 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="text-errorRed text-xs">{passwordError}</p>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="confirmPassword" className="text-darkGrey text-xs">
              Confirm password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="border-borders rounded-md p-2 bg-white border-2 focus:outline-none text-darkGrey text-sm"
              placeholder="At least 8 characters"
              value={confirmed}
              onChange={(e) => setConfirmed(e.target.value)}
            />
          </div>

          <p className="text-grey text-sm">
            Password must contain at least 8 characters
          </p>

          <button className="bg-purple text-white rounded-md py-2 font-semibold">
            Create new account
          </button>
          <p className="text-center text-grey">
            Already have an account?{" "}
            <Link className="text-purple underline" href="/">
              Login
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
}
