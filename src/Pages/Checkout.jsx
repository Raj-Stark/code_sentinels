import React, { useState } from "react";
import { useLocation } from "react-router";

const Checkout = () => {
  const { state } = useLocation();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const [submitArray, setSubmitArray] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (state) {
      const userObj = {
        name: userData.name,
        email: userData.email,
        address: userData.address,
        checkOutData: state,
      };
      setSubmitArray([...submitArray, userObj]);

      console.log(submitArray);
    } else {
      console.log("No Cart Item Found");
    }
  };

  return (
    <div className=" flex flex-col items-center">
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col space-y-4  w-[300px] border-2 border-black "
      >
        <input
          className=" p-2 border-2 border-black"
          type="text"
          value={userData.name}
          placeholder="Enter Name"
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
        <input
          className=" p-2  border-2 border-black"
          type="email"
          value={userData.email}
          placeholder="Enter Email"
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <input
          className=" p-2  border-2 border-black"
          type="text"
          value={userData.address}
          placeholder="Enter Address"
          onChange={(e) =>
            setUserData({ ...userData, address: e.target.value })
          }
        />
        <button type="submit" className=" px-2 py-2 bg-green-500">
          Submit
        </button>
      </form>
      {submitArray.length > 0 && (
        <div className=" flex mt-6 ">
          <h1>Checkout Done : `${JSON.stringify(submitArray)}`</h1>
        </div>
      )}
    </div>
  );
};

export default Checkout;
