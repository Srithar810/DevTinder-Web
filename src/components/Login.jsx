import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [emailId, setEmailId] = useState("test01@gmail.com");
  const [password, setPassword] = useState("Test@123");
  const dispatch = useDispatch();
  const navigate =useNavigate();

  const handleLogin = async () => {

    try {
      const res = await axios.post(
        BASE_URL+"/login",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );
      // console.log(res.data);
      dispatch(addUser(res.data));
      navigate("/feed")
     
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
            
            <fieldset className="fieldset ">
              <legend className="fieldset-legend">Email ID </legend>
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
