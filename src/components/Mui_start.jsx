import React, { useState } from 'react'

import {
  Button,
  ButtonGroup,
  Container,
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const Header = () => (
  <header>
    <h1>welcome</h1>
  </header>
);

const Nav = () => (
  <nav>
    <ol>
      <li>html</li>
      <li>css</li>
    </ol>
  </nav>
);

function Article() {
  const [open, setOpen] = useState(false);
  return (
    <article>
      <h2>Welcome</h2>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, soluta
      ipsam. Debitis pariatur odit praesentium dolorum quidem numquam nobis, non
      magni sit asperiores dolor! Ad beatae ipsa est, expedita perspiciatis,
      nulla ipsum laboriosam eaque perferendis enim blanditiis ipsam
      consequatur, iusto corporis at illo? Architecto eaque libero nihil sit
      quia dolore quod neque incidunt omnis
      <br />
      <ButtonGroup>
        <Button
          variant="outlined"
          onClick={() => {
            setOpen(true);
          }}
        >
          Create
        </Button>
        <Button variant="outlined">Update</Button>
      </ButtonGroup>
      <Button variant="outlined">Delete</Button>
      <Dialog open={open}>
        <DialogTitle>Create</DialogTitle>
        <DialogContent>
          <DialogContentText>Hello Create!!</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            onClick={() => {
              setOpen(false);
            }}
          >
            CREATE
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              setOpen(false);
            }}
          >
            CANCEL
          </Button>
        </DialogActions>
      </Dialog>
    </article>
  );
}

const Mui_start = () => {
  return (
    <Container fixed>
    <Header></Header>
    <Grid container>
      <Grid item xs="2">
        <Nav></Nav>
      </Grid>
      <Grid item xs="10">
        <Article></Article>
      </Grid>
    </Grid>
  </Container>
  )
}

export default Mui_start