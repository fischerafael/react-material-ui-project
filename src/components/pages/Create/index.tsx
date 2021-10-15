import { Typography, Button, Container } from "@material-ui/core";
import { KeyboardArrowRight } from "@material-ui/icons";
import { useStyles } from "../../../styles/useStyles";

export const Create = () => {
  const { btn } = useStyles();

  return (
    <Container>
      <Typography variant="h6" component="h2" gutterBottom>
        Create a new Note
      </Typography>

      <Button
        // className={btn}
        type="submit"
        variant="contained"
        color="primary"
        endIcon={<KeyboardArrowRight />}
      >
        Submit
      </Button>
    </Container>
  );
};
