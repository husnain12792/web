import React from 'react'
import { Paper, Typography, createTheme} from '@mui/material'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom'
// const useStyles = makeStyles((theme) => ({
//     font: {
//         color: 'blue'
//     },

// }))


const theme = createTheme({
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  });


const Home = () => {

  //const classes = useStyles();

  return (
    <>
    <Paper style={{display: "flex",flexDirection:"column", alignItems: "center", marginTop:"0%", backgroundColor: 'lightgrey',height:'1000px'}}>
            <Typography variant='h3' > <span style={{backgroundColor: "Blue", color: "white"}}>Welcome to BrillantPro</span></Typography> 
            <Typography variant='h6' style={{padding:"3%"}}> BrilliantPro is a learning management sytem. It has both teacher and student modules. <br></br>
             Here are some of the things that make BrilliantPro special:
             <ul style={{paddingTop:"5%"}}>
                <li>Students can attempt examinations and quizzes in real time.</li>
                <li>Students can view their progress in percentage for each enrolled course.</li>
                <li>Teachers can view the progress of each and every student in each and every course.</li>
             </ul>

             </Typography> 

        <div style={{gap:"20%"}}>
            <Link to='/admin'> <Typography variant='h5'><pre><button style={{backgroundColor:"skyBlue" , borderRadius:"25px" }}>Teacher Mode</button></pre> </Typography></Link>
            <Link to='/Signup'> <Typography variant='h5'><pre><button style={{backgroundColor:"skyBlue" , borderRadius:"25px"}}>Learner Mode</button></pre></Typography></Link>
        </div>
        <Accordion style={{margin:"3%"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          
          id="panel1a-header"
        >
               </AccordionSummary>
      </Accordion>
    
      <img src="https://cdn.elearningindustry.com/wp-content/uploads/2016/12/challenges-benefits-of-learning-management-systems.png" marginTop="-200px"/>
               
    </Paper>
    
    </>
    
  )
}

export default Home