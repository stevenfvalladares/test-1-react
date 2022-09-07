import React, { useState, useEffect } from "react";

/* import of the main styles of material UI and its components */
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

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

	return (
		<div className="container-sm">
			<div className="d-flex flex-column justify-content-center align-items-center">
				<List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
					<ListItem alignItems="flex-start">
						<ListItemAvatar>
							<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
						</ListItemAvatar>
						<ListItemText
							primary="Brunch this weekend?"
							secondary={
								<React.Fragment>
									<Typography
										sx={{ display: "inline" }}
										component="span"
										variant="body2"
										color="text.primary"
									>
										Ali Connors
									</Typography>
									{" — I'll be in your neighborhood doing errands this…"}
								</React.Fragment>
							}
						/>
					</ListItem>
					<Divider variant="inset" component="li" />
				</List>
			</div>
		</div>
	);
}

export default MyApi;
