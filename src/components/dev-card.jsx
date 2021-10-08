import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function DevCard({ profile }) {
  return (
    <Card sx={{ maxWidth: 345, textAlign: "center" }}>
      <Link to={`/users/${profile.githubUsername}`}>
        <CardMedia
          component="img"
          image={
            profile.photo ??
            "https://avatars.githubusercontent.com/u/9919?s=200&v=4"
          }
          alt={`${profile.github} GitHub headshot`}
        />
      </Link>

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {profile.githubUsername ?? "Your name here"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {"Open Source Dev"}
        </Typography>
      </CardContent>
      <CardActions style={{ justifyContent: "space-evenly" }}>
        {profile.githubUrl && (
          <Button
            size="small"
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Button>
        )}
        {profile.linkedinUrl && (
          <Button
            size="small"
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Button>
        )}
        {profile.siteUrl && (
          <Button
            size="small"
            href={profile.siteUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Site
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
