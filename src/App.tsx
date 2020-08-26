import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import Main from "./components/Main";
import GuestMain from "./components/GuestMain";

function App() {
  const JWT_EXPIRY_TIME = 24 * 3600 * 1000;
  const [isLoggined, setIsLoggined] = useState(false);

  const onLogin = async () => {
    axios
      .post("http://localhost:3001/auth", null, { withCredentials: true })
      .then(onLoginSuccess)
      .catch((err) => {
        setIsLoggined(false);
      });
  };

  const onLoginSuccess = (response: AxiosResponse): void => {
    if (response.data.status) {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`;
      setTimeout(onLogin, JWT_EXPIRY_TIME - 60000);
      setIsLoggined(true);
    }
  };

  useEffect(() => {
    onLogin();
  });

  if (isLoggined) return <Main />;
  else {
    return <GuestMain />;
  }
}

export default App;
