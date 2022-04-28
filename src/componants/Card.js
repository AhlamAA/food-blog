import { CardActionArea, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    card:{
        
    },
    cardImg:{
        height: "20%", 
    }, 
}))

export default function Card(props) {
    const classes = useStyles()
  return (
      <>
        <Grid item className={classes.card}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={props.imageUrl}
                    alt="recipe img"
                    className={classes.cardImg}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.title}
                </Typography>
                </CardContent>
                </CardActionArea>
        </Grid>
      </>
  )
}
