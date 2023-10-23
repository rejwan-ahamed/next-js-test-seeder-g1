"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [name, setname] = useState("Aline");
  const test = () => {
    setname("rahi");
  };
  return (
    <>
      <Link href={"/login"}>Login</Link>
      <Link href={"/about"}>About</Link>
      <Link href={"/about/aboutcollage"}>college</Link>
      <h2>user name is {name}</h2>
      <Test_data user="rahi"></Test_data>
      <h1>testing</h1>
      <button onClick={() => router.push("/about")}>Go to about</button>
      <button onClick={() => test()}>click me</button>
      <button onClick={()=>router.push("/about/aboutcollage")}>About college</button>
    </>
  );
}

const Test_data = (e) => {
  return (
    <>
      <h2>use name test data is is {e.user}</h2>;
    </>
  );
};
