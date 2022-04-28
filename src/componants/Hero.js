import { Button, Container, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import imgH from '../img/cupcake.png'

const useStyles = makeStyles((theme) => ({
    heroContainer:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontFamily: 'Cormorant Garamond',
        margin: 'auto'
    },
    heroContent:{ //need to expand a little bit 
        color: '#0A0609',
        fontSize: '40px'
    },
    buttons:{
       display: 'flex', 
       alignItems: 'center', 
       marginTop: theme.spacing(3)
    },
    button:{
        marginRight: theme.spacing(2),
        backgroundColor: '#BD9658', 
        borderRadius: 17,
        color: '#F6ECE7','&:hover': {
            backgroundColor: '#DEBAAB',
        },
        textTransform: 'capitalize',
        // fontStyle: 'bold',  
        fontSize: '18px', 
    },
    heroImg:{ 
        // size: '75%'
    },
    
})) 

export default function Hero() {
    const classes = useStyles({})
    return (
        <Container className={classes.heroContainer}>
            <div className={classes.heroContent}>
                <Typography variant='h6'>
                    psst: we're happy you're here!
                </Typography>
                <Typography variant='h3'>
                    Get cooking with our collection of delicious plant-based recipes.
                </Typography>
                <div className={classes.buttons}>
                    <Button variant='contained' className={classes.button}>Start</Button>
                    <Button variant='contained' className={classes.button}>Share a Recipe</Button>
                </div>
            </div>
            <div>
                <img src={imgH} alt='girl' className={classes.heroImg}/>
            </div>
        </Container>
    )
}
