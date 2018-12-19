import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { black } from 'ansi-colors';
import Grid from '@material-ui/core/Grid';
import { PaymentButton } from './styles.module.scss';

const styles = {
  card: {
    minWidth: 275
  },
  subHeaderContainer: {
    flexGrow: 1
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  bigText: {
    fontSize: 36
  },
  pos: {
    marginBottom: 12
  },
  verticalSeparator: {
    border: 'solid .5px #ededed',
    width: 0
  },
  paymentButton: {
    backgroundColor: '#2cb070'
  }
};

const TotalEvents = ({ classes, totalEvents }) => (
  <>
    <Typography className={classes.title} color="#cacacaca" gutterBottom>
      Total Events
    </Typography>
    <Typography className={classes.bigText} color="black" gutterBottom>
      20
    </Typography>
    <div className={classes.verticalSeparator} />
  </>
);

const TotalGuests = ({ classes, totalGuests }) => (
  <>
    <Typography className={classes.title} color="#cacacaca" gutterBottom>
      Total Guests
    </Typography>
    <Typography className={classes.bigText} color="black" gutterBottom>
      4680
    </Typography>
    <div className={classes.verticalSeparator} />
  </>
);

const CurrentBalance = ({ classes, totalEvents }) => (
  <>
    <Typography className={classes.title} color="#cacacaca" gutterBottom>
      Current Balance
    </Typography>
    <Typography className={classes.bigText} color="black" gutterBottom>
      $5000
    </Typography>
    <div className={classes.verticalSeparator} />
  </>
);

const DueDate = ({ classes, dueDate }) => (
  <>
    <Typography className={classes.title} color="#cacacaca" gutterBottom>
      Due Date: in 18 days
    </Typography>
    <Typography className={classes.bigText} color="black" gutterBottom>
      Oct 1, 2019
    </Typography>
  </>
);

function SimpleCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent className={classes.subHeaderContainer}>
        <Grid container direction="${direction}" justify="${justify}" alignItems="${alignItems}">
          <TotalEvents {...props} />
          <TotalGuests {...props} />
          <CurrentBalance {...props} />
          <DueDate {...props} />
          <Button className={PaymentButton}>Make a Payment</Button>
        </Grid>
      </CardContent>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
