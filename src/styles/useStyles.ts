import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  btn: {
    fontSize: 12,
    backgroundColor: "cyan",
    "&:hover": {
      backgroundColor: "blue",
    },
  },
  title: {},
});
