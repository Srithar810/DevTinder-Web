import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [emailId, setEmailId] = useState("test01@gmail.com");
  const [password, setPassword] = useState("Test@123");

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/login",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className=" flex justify-center my-10">
      <div className="card   bg-base-300  w-96">
        <div className="card-body">
          <h2 className="card-title">Login </h2>
          <div>
            npm install axios
            <fieldset className="fieldset ">
              <legend className="fieldset-legend">Email ID {emailId}</legend>
              <input
                type="text"
                value={emailId}
                className="input"
                placeholder="Enter Your Email ID"
                onChange={(e) => setEmailId(e.target.value)}
              />
            </fieldset>
          </div>
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Password</legend>
              <input
                type="text"
                value={password}
                className="input"
                placeholder="Enter Your Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </fieldset>
          </div>
          <div className="card-actions justify-center">
            <button className="btn" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
