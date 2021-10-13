import React, { useState } from "react";
import { useHistory } from "react-router";

const Chat = () => {
  const [username, setUsername] = useState("");
  const history = useHistory();
  console.log(username);
  return (
    <>
      <div className="w-full h-screen">
        <div className="h-screen flex items-center justify-center w-full">
          <div className="">
            <label
              className="block text-gray-700 text-sm font-medium mb-2 text-white"
              htmlFor="username">
              Enter Your Name :
            </label>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="your name"
                value={username}
                onChange={e => {
                  setUsername(e.target.value);
                }}
              />
            </div>

            <button
              onClick={() =>
                history.push({
                  pathname: "/chatroom",
                  state: { username: username }
                })
              }
              className="disabled:opacity-50 bg-tertiary hover:bg-tertiary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              disabled={username !== "" ? false : true}>
              Go!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
