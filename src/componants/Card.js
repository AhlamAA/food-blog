import { Button, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({ 
    card:{
        marginTop: theme.spacing(2), 
        width: 300,
        '&:hover': {
            borderRadius: 17, 
        },
    },
    cardImg:{
        height: '140', 
        '&:hover': {
            borderRadius: 17, 
        },
    }, 
    cardTitle:{
        textAlign: 'center'
    }
}))

export default function Card(props) {
    const classes = useStyles()
  return (
      <div>
        <CardActionArea className={classes.card}>
            <CardMedia
                component="img"
                image={props.imageUrl}
                alt="recipe img"
                className={classes.cardImg}
            />
            <CardContent className={classes.cardTitle}>
                <Typography gutterBottom variant="h5" component="div">
                    {props.title}
                </Typography>
            </CardContent>
            {/* <CardActions>
                <Button size="small">View Recipe</Button>
            </CardActions> */}
        </CardActionArea>
      </div>
  )
}
