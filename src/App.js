import React, { useEffect, useState } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { DataProvider } from "./GlobalState";

import Axios from "axios";
import Home from "./Pages/Home/Home";
import UserAPI from "./API/UserAPI";

function App() {
  const [token, setToken] = useState(false);
	const [user, setUser] = useState(null);
	const [authenticated, isAuthenticated] = useState(false);
	const [loading, setLoading] = useState(false);
  const [isLoggedIn] = UserAPI(token).isLoggedIn;
	const [isAdmin] = UserAPI(token).isAdmin;

  const test = user + authenticated + isAdmin + isLoggedIn + setUser + isAuthenticated + setLoading
  console.log(test)

	useEffect(() => {
		const firstLogin = localStorage.getItem("firstLogin");
		if (firstLogin) {
			const refreshToken = async () => {
				const res = await Axios.get("/user/refresh_token");
				setToken(res.data.accesstoken);

				setTimeout(() => {
					refreshToken();
				}, 10 * 60 * 1000);
			};

			refreshToken();
		}
	}, []);

  return (
    <>
    {loading ? <h1>Loading...</h1> : null}
			<BrowserRouter>
				<Switch>
					<DataProvider>
            <Route exact path="/" render={() => <Home />} />
          </DataProvider>
				</Switch>
			</BrowserRouter>
		</>
  );
}

export default App;
