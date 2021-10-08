import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

function Copyright() {
  return (
    <>
      {new Date().getFullYear()}
      {'.'}
    </>
  );
}

export default function Footer() {
  return (
    <>
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component='footer'>
        <Typography variant='h6' align='center' gutterBottom>
          Want to contribute?
        </Typography>
        <Typography
          variant='subtitle1'
          align='center'
          color='text.secondary'
          component='p'
        >
          Get started{' '}
          <Link
            href='https://www.getscriptordietryin.com/contributing-to-open-source-starter-guide'
            target='_blank'
            rel='noopener noreferrer'
          >
            here
          </Link>
          .
        </Typography>
        <Copyright />
      </Box>
    </>
  );
}
