import React, { useState, useEffect } from "react";

function MyApi() {
	const [gitHubUsers, setGitHubUsers] = useState([]);

	useEffect(() => {
		fetchGitHubUsers();
	}, []);

	const fetchGitHubUsers = async () => {
		const url = "https://api.github.com/users";
		const response = await fetch(url, {
			method: "GET",
			headers: new Headers({ Accept: "application/vnd.github+json" }),
		});
		const data = await response.json();
		console.log(data);
	};

	return <></>;
}

export default MyApi;
