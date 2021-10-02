import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import hack from '../images/hack.png';
import hackLong from '../images/hack-long.png';

const About = () => {
  return (
    <>
      <Container component='main' sx={{ mt: 8, mb: 2 }} maxWidth='sm'>
        <Typography variant='h1' component='h1'>
          What is Open Source Allstars?
        </Typography>
        <Typography>
          <img src={hackLong} alt='' />
          <figcaption style={{ textAlign: 'center' }}>
            [placeholder caption]
          </figcaption>
          <p>
            Open Source Allstars is a project that encourages developers to
            contribute to open-source projects. It can be confusing and even
            overwhelming trying to learn the contribution process on your own,
            so I created this project along with a step-by-step guide to guide
            you through the entire process.
          </p>
          <p>
            Once your contribution is added, a card will be created included
            whichever pieces of data you include such as your GitHub photo, your
            GitHub name, and links to your social media. Plus, this project is
            `hacktoberfest-accepted`, so pull requests will count towards the
            four required to receive a shirt from Digital Ocean’s Hacktoberfest
            challenge!
          </p>
          <figure>
            <img
              src={hack}
              alt='Open Source Allstars GitHub repo about section'
            />
            <figcaption style={{ textAlign: 'center' }}>
              hacktoberfest-accepted
            </figcaption>
          </figure>
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
            Allstars project, follow the guide{' '}
            <Link
              href='https://www.getscriptordietryin.com/Contributing-to-Open-Source-Where-To-Begin-in-2021/'
              target='_blank'
              rel='noopener noreferrer'
            >
              here
            </Link>
            .
          </p>
          <p>
            No need for a contribution guide? You can fork and clone the Open
            Source Allstars project{' '}
            <Link
              href='https://github.com/MightyJoeW/OpenSourceAllstars'
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
