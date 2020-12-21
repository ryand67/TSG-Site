import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './newTeamCard.css';

const useStyles = makeStyles({
  media: {
    height: 250,
    width: '100%',
    paddingTop: 100
  },
});

export default function MediaCard( props ) {

  const classes = useStyles();
  const urlName = props.name.split(' ').join('-')

  return (
    <Card className="newTeamCard" onClick={() => {
      window.location.replace('/team')
    }}>
      <CardActionArea>
        <CardMedia
          className={`${classes.media}`}
          image={props.picture}
          title={props.name}
        />
        <CardContent onClick={() => {
            window.location.replace(`/team`)
        }} className="newTeamCardMain">
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
            window.open(`mailto:${props.email}`, '_blank')
        }}>
          Contact
        </Button>
        <Button className="newTeamCardButton" size="small" color="primary" >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
