import { Container, Grid, makeStyles, Typography } from '@material-ui/core'
import Data from './Data' 
import Card from './Card'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    cardGrid:{
        display: 'flex', 
        flexDirection: 'row'
    }
}))

export default function LatestRecipes() {
    const classes = useStyles()
    const cards = Data.map(card => {
        return (
            <Card 
                {...card}
            />
        )
    })
  return (
    <Container className={classes.heroContainer}>
        <Typography variant='h4'>
            Latest Recipes
        </Typography>
        <Container>
            <Grid container spacing={2} className={classes.cardGrid}>
                {cards}
            </Grid>
        </Container>
    </Container>
  )
}
