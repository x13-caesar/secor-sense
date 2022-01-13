import React, {Component} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Topbar from "./Topbar";
import Grid from "@material-ui/core/Grid";
import SectionHeader from "./typo/SectionHeader";
import CardItem from "./cards/CardItem";
import withStyles from "@material-ui/styles/withStyles";
import backgroundShape from "../images/shape.svg";
import {Button, Paper, Step, StepLabel, Stepper, Typography} from "@material-ui/core";

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey["A500"],
    overflow: "hidden",
    background: `url(${backgroundShape}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: "0 400px",
    marginTop: 20,
    padding: 20,
    paddingBottom: 200
  },
  grid: {
    width: 1000
  }
});

const steps = [
  {
    label: 'Select campaign settings',
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: 'Create an ad group',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Create an ad',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

class TRSTrade extends Component {

    handleReset() {

    }

    render() {
        const { classes } = this.props;
        const currentPath = this.props.location.pathname;
        const [activeStep, setActiveStep] = React.useState(0);

        return (
            <React.Fragment>
                <CssBaseline />
                <Topbar currentPath={currentPath} />
                <div className={classes.root}>
                    <Grid container justify="center">
                        <Grid
                          spacing={10}
                          alignItems="center"
                          justify="center"
                          container
                          className={classes.grid}>
                            <Grid item xs={12}>
                                <Stepper activeStep={activeStep} orientation="vertical">
                                    {steps.map((step, index) => (
                                        <Step key={step.label}>
                                            <StepLabel optional={index === 2 ? (
                                                <Typography variant="caption">Last step</Typography>
                                            ) : null
                                            }>{step.label}</StepLabel>
                                        </Step>
                                    ))}
                                </Stepper>
                                {activeStep === steps.length && (
                                    <Paper square elevation={0} sx={{ p: 3 }}>
                                      <Typography>All steps completed - you&apos;re finished</Typography>
                                      <Button onClick={this.handleReset} sx={{ mt: 1, mr: 1 }}>
                                        Reset
                                      </Button>                                    </Paper>
                                  )}
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
      </React.Fragment>
        );
    }

}

export default withStyles(styles)(TRSTrade);
