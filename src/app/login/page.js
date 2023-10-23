import Link from "next/link";

export default function Login() {
  return (
    <>
      <h1>This is a login page</h1>
      <Link href={"login/studentLogin"}>Student login</Link>
      <Link href={"login/teacherLogin"}>Teacher login</Link>
    </>
  );
}
