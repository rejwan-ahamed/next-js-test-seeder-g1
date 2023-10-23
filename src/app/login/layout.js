"use client";
import { useRouter } from "next/navigation";

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <h1>rendering common layout part</h1>
      {children}
      <button onClick={() => router.push("/login")}>go back</button>
    </>
  );
};

export default Layout;
