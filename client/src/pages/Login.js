import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Sawo from "sawo";
import login from "../assets/login.svg";
// For localhost
const API_KEY = "c226814e-7ea0-48d0-909a-c05fd6ee58b7";
// server = "bf9b6c3d-3a10-4c85-ad24-307404a438d1";
// localhost = "";

const LoginPage = () => {
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);
  const [payload, setPayload] = useState({});
  const history = useHistory();
  useEffect(() => {
    var config = {
      containerID: "sawo-container",
      identifierType: "email",
      apiKey: API_KEY,
      onSuccess: (payload) => {
        console.log("Payload : " + JSON.stringify(payload));
        setUserLoggedIn(true);
        setPayload(payload);
      },
    };
    let sawo = new Sawo(config);
    sawo.showForm();
  }, []);
  console.log(payload);
  if (isUserLoggedIn) {
    history.push("/about");
  }
  return (
    <>
      <div className="h-screen flex items-center justify-center w-full ">
        <div>
          <div
            id="sawo-container"
            style={{ height: "25vh", width: "25rem" }}
          ></div>
        </div>
        <div className="">
          <div className="ml-40 mt-80 opacity-80">
            {" "}
            <img src={login} alt="login" height="300px" width="450px" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
