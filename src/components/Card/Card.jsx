import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  card: {
    width: 250,
    height: (250 * 16) / 10
  }
});

const ImgMediaCard = props => {
  const classes = useStyles();

  return (
    <Card className={classes.card} style={props.style}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="tile"
          image={props.cardData}
          title="tile"
        />
      </CardActionArea>
      {props.acceptCard ? (
        <CardActions>
          <Button onClick={props.rejectCard} size="small" color="secondary">
            Reject
          </Button>
          <Button onClick={props.acceptCard} size="small" color="primary">
            Accept
          </Button>
        </CardActions>
      ) : null}
    </Card>
  );
};

export default ImgMediaCard;
