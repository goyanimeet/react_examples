import React, { useState } from "react";

const App = () => {
  const [data, setValue] = useState({
    firstname: "virani",
    lastname: "raj",
    password: "1234",
    email: "raj@gmail.com",
    phoneno: "234343355",
    gender: "male",
    city: "surat",
  });
  console.log(data);

  const formData = (e) => {
    const { id, value } = e.target;
    setValue({ ...data, [id]: value });
    console.log("change id :", id);
    console.log("change field :", value);
  };

  // exapmle of Usestate hook
  // const [data, setData] = useState({
  //   name: "demo",
  //   email: "vkiads@gmail",
  // });
  // console.log(data, "data");
  // const handleState = (e) => {
  //   const { name, value } = e.target;
  //   setData({ ...data, [name]: value });
  //   setData({ ...data, [email]: value });
  // };
  return (
    <>
      <h1 className="text-center text-4xl italic">log in form</h1>
      <div className="flex items-center justify-center p-10">
        <form action="" className="border-2 w-1/2 p-5 rounded-xl">
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            className="border-1 w-full  my-3 p-2 rounded-3xl"
            id="firstname"
            value={data.firstname}
            placeholder="Enter your first name"
            required
            onChange={(e) => formData(e)}
          />
          <br />
          <label htmlFor="lastname">last Name</label>
          <input
            type="text"
            className="border-1  w-full  p-2 rounded-3xl  my-3"
            id="lastname"
            value={data.lastname}
            placeholder="Enter your lastname"
            required
            onChange={(e) => formData(e)}
          />
          <br />
          <label htmlFor="password">password</label>
          <input
            type="password"
            className="border-1  w-full  p-2 rounded-3xl  my-3"
            id="password"
            value={data.password}
            placeholder="Enter your password"
            required
            onChange={(e) => formData(e)}
          />
          <br />
          <label htmlFor="email">email</label>
          <input
            type="email"
            className="border-1  w-full p-2 rounded-3xl  my-3"
            id="email"
            value={data.email}
            placeholder="Enter your email"
            required
            onChange={(e) => formData(e)}
          />
          <br />
          <label htmlFor="phoneno">phoneno</label>
          <input
            type="number"
            className="border-1  w-full p-2 rounded-3xl  my-3"
            id="phoneno"
            value={data.phoneno}
            placeholder="Enter your phoneno"
            required
            onChange={(e) => formData(e)}
          />
          <label htmlFor="radio">gender:</label>
          <input
            type="radio"
            name="gender"
            id="gender"
            value="male"
            onChange={(e) => formData(e)}
          />
          male
          <input
            type="radio"
            name="gender"
            id="gender"
            value="female"
            onChange={(e) => formData(e)}
          />
          female
          <br />
          <label htmlFor="city">city : </label>
          <select
            name="city"
            id="city"
            placeholder="select city"
            value={data.city}
            onChange={(e) => formData(e)}
            className="border-1 px-8 py-1 rounded-xl"
          >
            <option value="select city">select city</option>
            <option value="surat" id="">
              surat
            </option>
            <option value="bavnager">bavnager</option>
            <option value="rajkot">rajkot</option>
            <option value="vadodara">vadodara</option>
            <option value="vapi">vapi</option>
          </select>
          <br />
          <button
            className="submit border-2 my-3 px-5 py-3 w-full rounded-4xl"
            onClick={(e) => formData(e)}
            id="submit"
          >
            submit
          </button>
        </form>

        <input type="text " />

        {/* example od useState */}
        {/* <input
        type="text"
        name="name"
        value={data.name}
        onChange={(e) => handleState(e)}
      />
      <input
        type="email"
        name="email"
        value={data.email}
        onChange={(e) => handleState(e)}
      /> */}
      </div>
    </>
  );
};

export default App;
