"use client";

import Image from "next/image";
import logo from "@/public/assets/images/logo-devlinks-large.svg";
import Link from "next/link";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/lib/firebase";
import { useRouter } from "next/navigation";

export default function Home() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
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
    return null;
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();

    const error = validateCredentials(email, password);
    if (error) {
      console.log(error);
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/home");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen gap-8">
      <Image src={logo} alt="app logo" />
      <div className="bg-white rounded-lg p-8 w-[90%] md:w-[30rem]">
        <h1 className="text-darkGrey font-semibold text-4xl">Login</h1>
        <p className="text-grey">
          Add your details below to get back into the app
        </p>
        <form onSubmit={handleSignIn} className="flex flex-col my-10 gap-8">
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
              }  rounded-md p-2 bg-white border-2 focus:outline-none text-darkGrey text-sm focus:border-purple focus:border-2`}
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
              Password
            </label>
            <input
              type="password"
              id="password"
              className={`${
                passwordError !== "" ? "border-errorRed" : "border-borders"
              }  rounded-md p-2 bg-white border-2 focus:outline-none text-darkGrey text-sm focus:border-purple focus:border-2`}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="text-errorRed text-xs">{passwordError}</p>
          </div>
          <button className="bg-purple text-white rounded-md py-2 font-semibold hover:bg-purpleHover">
            Login
          </button>
          <p className="text-center text-grey">
            Don’t have an account?{" "}
            <Link className="text-purple" href="/create-account">
              Create account
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
}
