import React, {useEffect} from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from "react-redux";

import { getPosts } from "./actions/posts";
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import memories from './images/study_night_boy.png';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  const dispath = useDispatch();

  useEffect(() =>{
    dispath(getPosts());
  }, [dispath]);

  return(
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
        <img classNmame={classes.image} src={memories} alt="memories" height="60" />
      </AppBar>
      <Grow in>
        <container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form/>
            </Grid>
          </Grid>
        </container>
      </Grow>
    </Container>
  )
}

export default App;