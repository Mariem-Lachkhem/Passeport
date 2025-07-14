import React from "react";
import Login from "./Login";

const fakeCredentials = [
  { id: 1326183, password: "secret123" },
  { id: 1324834, password: "azerty456" },
  { id: 1111222, password: "mypassword" },
];

function App() {
  return (
    <div className="h-screen w-screen bg-gradient-to-tr from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center">
      <Login credentials={fakeCredentials} />
    </div>
  );
}

export default App;
