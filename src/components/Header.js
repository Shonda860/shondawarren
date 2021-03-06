import React from 'react'
import  {Typography, Avatar, Grid, Box} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import Typed from "react-typed"
import avatar from "../shondasportfolioimage.png"

// CSS STYLES
const useStyles = makeStyles(theme=> ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "purple"
  },
  subtitle: {
    color: "white",
    marginBottom: "3rem"
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1
  }
}))

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Shonda"/>
      </Grid>
      <Typography  className={classes.title} variant="h4">
        <Typed  strings={["Shonda Warren"]} typeSpeed={40}/>
      </Typography>
      <br/>
      <Typography  variant="h4">
        <Typed 
        className={classes.subtitle}
        strings={["Fullstack", "UX", "Data Analytics", "MBA"]}
        typeSpeed={40}
        backSpeed={60}
        loop
        />
      </Typography>
    </Box>
  )
}

export default Header;
