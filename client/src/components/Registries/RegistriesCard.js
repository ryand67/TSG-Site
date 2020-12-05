import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../OurTeam/newTeamCard/newTeamCard.css';

const useStyles = makeStyles({
  media: {
    height: 250,
    width: '100%',
    paddingTop: 100
  },
});

export default function MediaCard( props ) {

  const classes = useStyles();

  return (
    <Card className="newRegCard">
      <CardActionArea>
        <CardMedia
          className={`${classes.media}`}
          image={props.picture}
          title={props.name}
        />
        <CardContent className="newTeamCardMain">
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" className={props.name === "Heather DiPietro" ? "newTeamCardDescHeatherMobile" : "newTeamCardDesc"} component="p">
            {props.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className="newTeamCardButton" size="small" color="primary" onClick={() => {
            window.open(props.pageLink, '_blank')
        }}>
          View
        </Button>
      </CardActions>
    </Card>
  );
}
