import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({  
    footer:{
        backgroundColor: '#BD9658',
        borderRadius: 17,
        color: '#F6ECE7',
        padding: theme.spacing(2), 
        textAlign: 'center',
        fontSize: '25px'
    }, 
    link:{
        textDecoration: 'none', 

    } 
})) 

export default function Footer() {
    const classes = useStyles({})
    return (
        <div>
            <Typography variant='body1' className={classes.footer}>
                This is a demo for <a href='https://www.pickuplimes.com/' className={classes.link}>Pick Up Limes</a>, 
                made by Ahlam Alsaedi and Bashair ... to practice our React and Material UI skills. 
            </Typography>
        </div>
              
    )
}
