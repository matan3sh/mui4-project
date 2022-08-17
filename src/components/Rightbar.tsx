import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

export function Rightbar() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <h2>Rightbar</h2>
    </Container>
  );
}
