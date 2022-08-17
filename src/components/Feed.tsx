import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

export function Feed() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <h2>Feed</h2>
    </Container>
  );
}
