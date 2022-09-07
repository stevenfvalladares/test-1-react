import React, { useEffect } from "react";

/* import of the main styles of material UI and its components */
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

/* destructuring prosp in component */
function MyApi({ users, search }) {
	

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
		const orderedData = data.sort((a, b) => a.login > b.login ? 1: -1); 
		console.log(data);
		users(orderedData);
	};

	return (
		<div className="container-sm">
			<div className="d-flex flex-column justify-content-center align-items-center">
				{search.map((user) => (
					<List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper"}} key={user.login}>
						<ListItem alignItems="flex-start">
							<ListItemAvatar>
								<Avatar alt="Remy Sharp" src={user.avatar_url} />
							</ListItemAvatar>
							<ListItemText
								primary={user.login}
								secondary={
									<React.Fragment>
										<Typography
											sx={{ display: "inline" }}
											component="span"
											variant="body2"
											color="text.primary"
										>
											<i className="bi bi-link-45deg"> </i>
											<a
												href={user.html_url}
												target="_blank"
												className="text-decoration-none"
											>
												{user.html_url}
											</a>
										</Typography>
										<br />
										<i className="bi bi-people-fill"> </i>
										{user.followers_url.length} followers - {user.following_url.length}{" "}
										following
									</React.Fragment>
								}
							/>
						</ListItem>
						<Divider variant="inset" component="li" />
					</List>
				)).sort()}
			</div>
		</div>
	);
}

export default MyApi;
