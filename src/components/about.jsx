import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import GitHubAbout from '../images/github-about.png';

const About = () => {
  useEffect(() => {
    ReactGA.initialize('UA-43084370-4');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <>
      <Container component='main' sx={{ mt: 8, mb: 2 }} maxWidth='sm'>
        <Typography variant='h1' component='h1'>
          Open Source Devs
        </Typography>
        <Typography>
          <p>
            Open Source Devs is a project that encourages developers to
            contribute to open-source projects. It can be confusing and even
            overwhelming trying to learn the contribution process on your own,
            so I created this project along with a step-by-step guide to guide
            you through the entire process.
          </p>
          <p>
            Once your contribution is added, a card will be created included
            whichever pieces of data you include such as your GitHub photo, your
            GitHub name, and links to your social media. Plus, this project has
            the `Hacktoberfest` label, so pull requests will count towards the
            four required to receive a shirt from Digital Ocean’s Hacktoberfest
            challenge!
          </p>

          <Card sx={{ maxWidth: 345, margin: '0 auto' }}>
            <CardMedia
              component='img'
              height='140'
              image={GitHubAbout}
              alt='Open Source Devs GitHub repo about section'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                Open Source Devs
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Open Source Devs GitHub repo with hacktoberfest and
                hacktoberfest-accepted labels
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                href='https://github.com/MightyJoeW/OpenSourceDevs'
                target='_blank'
                rel='noopener noreferrer'
                size='small'
              >
                Repo
              </Button>
              <Button
                href='https://www.getscriptordietryin.com/contributing-to-open-source-starter-guide'
                target='_blank'
                rel='noopener noreferrer'
                size='small'
              >
                Guide
              </Button>
            </CardActions>
          </Card>
          <p>
            To learn more about the world of open source and how you can get
            involved, check out my article{' '}
            <Link
              href='https://www.getscriptordietryin.com/Contributing-to-Open-Source-Where-To-Begin-in-2021/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Contributing to Open Source: Where to Begin in 2021
            </Link>
            .
          </p>
          <p>
            For a step-by-step walkthrough on contributing to the Open Source
            Devs project, follow the guide{' '}
            <Link
              href='https://www.getscriptordietryin.com/contributing-to-open-source-starter-guide'
              target='_blank'
              rel='noopener noreferrer'
            >
              here
            </Link>
            .
          </p>
          <p>
            No need for a contribution guide? You can fork and clone the Open
            Source Devs project{' '}
            <Link
              href='https://github.com/MightyJoeW/OpenSourceDevs'
              target='_blank'
              rel='noopener noreferrer'
            >
              here
            </Link>
            .
          </p>
          <p>Good luck!</p>
          <p>Sincerely,</p>
          <p>
            <Link
              href='https://github.com/MightyJoeW/'
              target='_blank'
              rel='noopener noreferrer'
            >
              MightyJoeW
            </Link>
          </p>
        </Typography>
      </Container>
    </>
  );
};

export default About;
