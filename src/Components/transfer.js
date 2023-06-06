import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
const Transfer=()=>{

    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                <h2>Transfer Money</h2>
                  
                </Grid>
                <TextField label='Email address' placeholder='Enter email' fullWidth required />
                <TextField label='Amount' placeholder='Enter Amount to transfer' fullWidth required/>
             
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Transfer</Button>
            </Paper>
        </Grid>
    )
}

export default Transfer