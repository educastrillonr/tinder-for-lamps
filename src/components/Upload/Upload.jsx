import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import styles from "./Upload.module.scss";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

const useStylesCircle = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2)
  }
}));

const Upload = props => {
  const classes = useStyles();
  const progressClass = useStylesCircle();

  if (!props.loading) {
    return (
      <section className={styles.wrapper}>
        <input
          accept="image/*"
          className={classes.input}
          id="text-button-file"
          multiple
          type="file"
          onChange={props.handleFileInput}
        />
        <label htmlFor="text-button-file">
          <Button
            variant="contained"
            component="span"
            className={classes.button}
          >
            Upload
          </Button>
        </label>
      </section>
    );
  } else {
    return (
      <section className={styles.wrapper}>
        <CircularProgress className={progressClass.progress} />
      </section>
    );
  }
};

export default Upload;
