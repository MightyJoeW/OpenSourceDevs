import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Help = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ width: '70%', margin: ' auto' }}>
      <div>
        <Button
          id='basic-button'
          aria-controls='basic-menu'
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          Table of Contents
        </Button>
        <Menu
          id='basic-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>
            <Link href='#how-to-create-a-github-account'>
              How to create a GitHub account
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link href='#finding-an-open-source-project'>
              Finding an open source project
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link href='#how-to-submit-contributions'>
              How to submit contributions
            </Link>
          </MenuItem>
        </Menu>
      </div>
      <h2 id='how-to-create-a-github-account'>
        Section 1 - How to Create a GitHub account
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
        provident unde fugit distinctio nobis ipsa repudiandae maiores totam
        numquam. Dolore excepturi atque voluptates velit dolor ad possimus
        nesciunt quae asperiores? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Earum ea reprehenderit velit voluptates facilis, nulla
        et architecto dolor, aliquid corporis, incidunt blanditiis excepturi
        voluptatem dolores quaerat culpa fuga esse qui?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
        provident unde fugit distinctio nobis ipsa repudiandae maiores totam
        numquam. Dolore excepturi atque voluptates velit dolor ad possimus
        nesciunt quae asperiores? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Earum ea reprehenderit velit voluptates facilis, nulla
        et architecto dolor, aliquid corporis, incidunt blanditiis excepturi
        voluptatem dolores quaerat culpa fuga esse qui?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
        provident unde fugit distinctio nobis ipsa repudiandae maiores totam
        numquam. Dolore excepturi atque voluptates velit dolor ad possimus
        nesciunt quae asperiores? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Earum ea reprehenderit velit voluptates facilis, nulla
        et architecto dolor, aliquid corporis, incidunt blanditiis excepturi
        voluptatem dolores quaerat culpa fuga esse qui?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
        provident unde fugit distinctio nobis ipsa repudiandae maiores totam
        numquam. Dolore excepturi atque voluptates velit dolor ad possimus
        nesciunt quae asperiores? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Earum ea reprehenderit velit voluptates facilis, nulla
        et architecto dolor, aliquid corporis, incidunt blanditiis excepturi
        voluptatem dolores quaerat culpa fuga esse qui?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
        provident unde fugit distinctio nobis ipsa repudiandae maiores totam
        numquam. Dolore excepturi atque voluptates velit dolor ad possimus
        nesciunt quae asperiores? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Earum ea reprehenderit velit voluptates facilis, nulla
        et architecto dolor, aliquid corporis, incidunt blanditiis excepturi
        voluptatem dolores quaerat culpa fuga esse qui?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
        provident unde fugit distinctio nobis ipsa repudiandae maiores totam
        numquam. Dolore excepturi atque voluptates velit dolor ad possimus
        nesciunt quae asperiores? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Earum ea reprehenderit velit voluptates facilis, nulla
        et architecto dolor, aliquid corporis, incidunt blanditiis excepturi
        voluptatem dolores quaerat culpa fuga esse qui?
      </p>
      <h2 id='finding-an-open-source-project'>
        Section 2 - How to Create a GitHub account
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
        provident unde fugit distinctio nobis ipsa repudiandae maiores totam
        numquam. Dolore excepturi atque voluptates velit dolor ad possimus
        nesciunt quae asperiores?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
        provident unde fugit distinctio nobis ipsa repudiandae maiores totam
        numquam. Dolore excepturi atque voluptates velit dolor ad possimus
        nesciunt quae asperiores?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
        provident unde fugit distinctio nobis ipsa repudiandae maiores totam
        numquam. Dolore excepturi atque voluptates velit dolor ad possimus
        nesciunt quae asperiores?
      </p>
      <h2 id='how-to-submit-contributions'>
        Section 3 - How to submit contributions
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
        provident unde fugit distinctio nobis ipsa repudiandae maiores totam
        numquam. Dolore excepturi atque voluptates velit dolor ad possimus
        nesciunt quae asperiores?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
        provident unde fugit distinctio nobis ipsa repudiandae maiores totam
        numquam. Dolore excepturi atque voluptates velit dolor ad possimus
        nesciunt quae asperiores?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
        provident unde fugit distinctio nobis ipsa repudiandae maiores totam
        numquam. Dolore excepturi atque voluptates velit dolor ad possimus
        nesciunt quae asperiores?
      </p>
    </div>
  );
};

export default Help;
