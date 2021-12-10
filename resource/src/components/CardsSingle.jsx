import React from "react";
import {
  makeStyles,
  CardContent,
  Typography,
  Card,
  Grid,
} from "@material-ui/core";

// TODO makeStyles
const useStyles = makeStyles({
  wrapper: (props) => {
    if (props.type === "confirmed") return { borderLeft: "5px solid #c9302c" };
    if (props.type === "recovered") return { borderLeft: "5px solid #28a745" };
    else return { borderLeft: "5px solid gray" };
  },
  title: {
    fontSize: 18,
    marginBottom: 5,
  },
  count: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

function CardsSingle({ title, count, type }) {
  const styles = useStyles({ type });
  return (
    <Grid item sm={4} xs={12}>
      <Card className={styles.wrapper}>
        <CardContent>
          <Typography component="p" variant="body2" className={styles.title}>
            {title}
          </Typography>
          <Typography component="span" variant="body2" className={styles.count}>
            {count}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default CardsSingle;
