const { default: Link } = require("next/link");

const StudentList = () => {
  return (
    <>
      <ul>
        <li>
          <Link href={"studentList/1"}>Anil</Link>
        </li>
        <li>
          <Link href={"studentList/2"}>Hader</Link>
        </li>
        <li>
          <Link href={"studentList/3"}>Asoka</Link>
        </li>
        <li>
          <Link href={"studentList/4"}>Gogo</Link>
        </li>
      </ul>
    </>
  );
};

export default StudentList;
