import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PublishIcon from "@material-ui/icons/Publish";
import { navigate } from "@reach/router";

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});

const TemporaryDrawer = props => {
  const classes = useStyles();

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={() => (navigate("/upload"), props.toggleDrawer(side, false))}
      onKeyDown={props.toggleDrawer(side, false)}
    >
      <List>
        {["My collections", "Favourites", "Send collection", "Drafts"].map(
          (text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index === 0 ? <InboxIcon /> : null}
                {index === 1 ? <FavoriteIcon /> : null}
                {index === 2 ? <MailIcon /> : null}
                {index === 3 ? <InboxIcon /> : null}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </List>
      <Divider />
      <List>
        {["Answered collections", "Upload"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <PublishIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <Drawer open={props.state} onClose={props.toggleDrawer("left", false)}>
        {sideList("left")}
      </Drawer>
    </div>
  );
};

export default TemporaryDrawer;
