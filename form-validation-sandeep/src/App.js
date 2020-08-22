import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  Button,
  Typography,
  TextField,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles({
  outer: {
    margin: "5em",
  },
  main: {
    display: "flex",
    flexDirection: "row",
    margin: "2em",
    color: "white !important",
  },
  card: {
    padding: "1em",
    width: "600px",
    backgroundColor: "#F1F1F1",
    margin: "1em",
  },
  textFields: {
    marginRight: "10px",
    marginBottom: "10px",
  },
});

function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    slogan: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleFullName = (e) => {
    e.persist();
    setFormData((prevValues) => ({
      ...prevValues,
      fullName: e.target.value,
    }));
  };

  const handleEmail = (e) => {
    e.persist();
    setFormData((prevValues) => ({
      ...prevValues,
      email: e.target.value,
    }));
  };

  const handleSlogan = (e) => {
    e.persist();
    setFormData((prevValues) => ({
      ...prevValues,
      slogan: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.fullName && formData.email && formData.slogan) {
      setSubmitted(true);
    }
  };

  const classes = useStyles();
  return (
    <div className={classes.outer}>
      <div className={classes.main}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5" gutterBottom className={classes.whitetext}>
              Form Validation
            </Typography>
          </CardContent>
          <CardContent>
            <form
              autoComplete="off"
              className={classes.whitetext}
              onSubmit={handleSubmit}
            >
              <TextField
                label="Full Name"
                type="text"
                error={formData.fullName ? false : true}
                helperText={formData.fullName ? "" : "Please Enter Full Name"}
                className={classes.textFields}
                value={formData.fullName}
                onChange={handleFullName}
              />
              <TextField
                label="Email"
                type="email"
                error={formData.email ? false : true}
                helperText={formData.email ? "" : "Please Enter Email"}
                className={classes.textFields}
                value={formData.email}
                onChange={handleEmail}
              />
              <TextField
                label="Your Slogan"
                type="text"
                error={formData.slogan ? false : true}
                helperText={formData.slogan ? "" : "Please Enter Slogan"}
                className={classes.textFields}
                onChange={handleSlogan}
              />
              <br />
              <br />
              <Button color="primary" size="medium" type="submit">
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5" gutterBottom className={classes.whitetext}>
              Form Details
            </Typography>
            <br />
            <Typography gutterBottom className={classes.whitetext}>
              Full Name: {formData.fullName}
            </Typography>
            <Typography gutterBottom className={classes.whitetext}>
              Email: {formData.email}
            </Typography>
            <Typography gutterBottom className={classes.whitetext}>
              Your Slogan: {formData.slogan}
            </Typography>
          </CardContent>
        </Card>
      </div>
      {submitted && (
        <Alert severity="success">Form Submitted Successfully</Alert>
      )}
    </div>
  );
}

export default App;
