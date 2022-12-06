import React, { useEffect } from 'react'
import {urlA} from '../service/api'
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function Actions() {

const getActions = async () => {
    const data= await axios.get(`${urlA}`);
    setActions(data.data);
}

const [actions, setActions] = React.useState([])

    useEffect(() => {
      getActions();
    }, [])

  return (
        <div >
           {actions.map((item) => (
                  <>
                    <div>
                    <Card sx={{ minWidth: 275 ,backgroundColor:"rgb(250,232,232)" }}>
                    <CardContent>
                      <Typography variant="h6" color="text.primary" gutterBottom>
                        FirstName: {item.FirstName}
                      </Typography>
                      <Typography variant="h6" component="div">
                       Email: {item.Email}
                      </Typography>
                      <Typography variant="h6" color="text.primary">
                        Ph no: {item.Phone}
                      </Typography>
                      <Typography  variant="h7" color="text.primary" style={{display:'flex',gap:'1vw',flexWrap:'wrap',width:'18vw'}}>
                       {
                        item.Message
                       }
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button style={{backgroundColor:"red"}} variant="contained">Active</Button>
                    </CardActions>
                  </Card>  
                  </div>     
                  <br/>
                  </>     
                ))
             }
        </div>
  )
}

export default Actions