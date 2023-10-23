"use client";
const { default: Link } = require("next/link");

const Students = ({ params }) => {
  return (
    <>
      <h1>Dynamic student details</h1>
      <h3>User access ID: {params.student}</h3>
      {console.log(params.student)}
    </>
  );
};

export default Students;
