import * as React from 'react';
import { Link } from '@reach/router';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {GitHub, LinkedIn, Language} from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';

export default function DevCard({ profile }) {
  return (
    <Card sx={{ maxWidth: 345, textAlign: 'center' }}>

      <Link to={`users/${profile.githubUsername}`}>
        <CardMedia
          component='img'
          image={
            profile.photo ??
            'https://avatars.githubusercontent.com/u/9919?s=200&v=4'
          }
          alt={`${profile.github} GitHub headshot`}
        />
      </Link>

      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {profile.githubUsername ?? 'Your name here'}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {'Open Source Dev'}
        </Typography>
      </CardContent>
      <CardActions style={{justifyContent: "center"}}>
        {profile.githubUrl && (
            href={profile.githubUrl}
            target='_blank'
            rel='noopener noreferrer'
          >
            <GitHub/>
          </IconButton>
        )}
        {profile.linkedinUrl && (
          <IconButton
            href={profile.linkedinUrl}
            target='_blank'
            rel='noopener noreferrer'
            touch={true}
          >
            <LinkedIn/>
          </IconButton>
        )}
        {profile.siteUrl && (
          <IconButton
            href={profile.siteUrl}
            target='_blank'
            rel='noopener noreferrer'
          >
            <Language/>
          </IconButton>
        )}
      </CardActions>
    </Card>
  );
}
