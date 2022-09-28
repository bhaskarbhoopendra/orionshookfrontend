import { useState } from "react";

export default function ProfileComponent() {
  const [name, setName] = useState("Your Name");
  const [designation, setDesignation] = useState("Your Designation");
  const [id, setId] = useState("Your Id");
  const [email, setEmail] = useState("Your Email");

  return (
    <>
      <div className="card">
        <div className="upper-container">
          <div className="image-container">
            <img
              src="https://cdn.theorg.com/883525c1-a37d-4d07-b9c7-6f330cc05098_small.png"
              alt=""
              height="100px"
              width="100px"
            />
          </div>
        </div>
        <div className="lower-container">
          <h4>{name}</h4>
          <p>{designation}</p>
          <p>{id}</p>
          <p>{email}</p>
        </div>
      </div>
    </>
  );
}
