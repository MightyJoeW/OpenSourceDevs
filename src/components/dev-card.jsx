import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { GitHub, LinkedIn, Language } from "@mui/icons-material";
import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import { useEffect } from "react/cjs/react.development"
const disabledLink = {
  pointerEvents: "none",
};

const enabledLink = {
  pointerEvents: "auto",
};

export default function DevCard({ profile }) {
  const location = useLocation();
  // you can add an image/gif with your name here (e.g "11kaze" : "http://image.gif" )
  const gif_client = {'11kaze':"https://media.tenor.com/t7rc1L-lbIEAAAAC/pokemon.gif"} 
  useEffect(() => {
    if (profile['githubUsername'] in gif_client){
      var aTags = document.getElementsByTagName("div");
      var searchText = profile['githubUsername'];
      var textdiv,textdivParent2;

      for (var i = aTags.length-1; i >= 0; i--) {
        if (aTags[i].textContent === searchText) {
          textdivParent2 = aTags[i].parentNode.parentNode;
          textdiv = aTags[i];

          var images = textdiv.getElementsByTagName('img');
          for(let i=0; i < images.length; i++) {
            images[i].parentNode.removeChild(images[i]);
          }
          var elem = document.createElement("img");
          elem.setAttribute("src", gif_client[profile['githubUsername']]);
          elem.setAttribute("width", "30");
          elem.setAttribute("alt", "buddy");
          textdiv.appendChild(elem);
          // textdivParent2.style.boxShadow = "0 0 0.8em 0.4em #a3b5ff3d, 0 0.1em 0.4em #de373757, 0.1em -0.1em 0.1em #4f7eb591";
          textdivParent2.style.boxShadow = "#f5f5f5 0px 0px 20px inset, #ff00ff2b 20px 0px 30px, #fff0 -20px 0px 20px inset, #ffffff2b 20px 0px 30px inset, #fff -20px 0px 23px inset, #fff 0px 0px 5px, #e69de6b8 -10px 0px 18px, #00ffff70 10px 0px 24px";

          break;
        }
      }

    }

  });

  return (
    <Card sx={{ maxWidth: 345, textAlign: "center", marginBottom: "4px" }}>
      <Link
        to={`users/${profile.githubUsername}`}
        style={location.pathname === "/" ? enabledLink : disabledLink}
      >
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
      <CardActions style={{ justifyContent: "center" }}>
        {profile.githubUrl && (
          <IconButton
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub />
          </IconButton>
        )}
        {profile.linkedinUrl && (
          <IconButton
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            touch={"true"}
          >
            <LinkedIn />
          </IconButton>
        )}
        {profile.siteUrl && (
          <IconButton
            href={profile.siteUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Language />
          </IconButton>
        )}
      </CardActions>
    </Card>
  );
}
DevCard.propTypes = {
  profile: PropTypes.object.isRequired,
};
