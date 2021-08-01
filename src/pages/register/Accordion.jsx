import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

import AddIcon from '@material-ui/icons/Add';
import './accordion.scss'
const useStyles = makeStyles((theme) => ({
    root: {
        width: '60%',
      },
    backgroundColor:"#303030",
    heading: {
      fontSize: theme.typography.pxToRem(25),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));

const Accordions = () => {
    const classes = useStyles();
    return (
       
             <div className={classes.root}>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<AddIcon className="addIcon" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>What is Netflix</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.heading}>
          Netflix is a streaming service that offers a wide variety of award-winning TV shows, 
          movies, anime, documentaries and more – on thousands of internet-connected devices.
          <br />
          <br />
        You can watch as much as you want, whenever you want,
         without a single ad – all for one low monthly price. There's always something new to discover, 
         and new TV shows and movies are added every week!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<AddIcon className="addIcon"/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>How much does Netflix cost?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.heading}>
          Watch Netflix on your smartphone, tablet, Smart TV, 
          laptop, or streaming device, all for one fixed monthly fee.
           Plans range from ₹ 199 to ₹ 799 a month. No extra costs, no contracts.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<AddIcon className="addIcon"/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Where can I watch?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.heading}>
          Watch anywhere, anytime, on an unlimited number of devices. 
          Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer 
          or on any internet-connected device that offers the Netflix app, 
          including smart TVs, smartphones, tablets, streaming media players and game consoles.
          <br />
          <br />

          You can also download your favourite shows with the iOS, Android, 
          or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection.
           Take Netflix with you anywhere.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<AddIcon  className="addIcon"/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>What can I watch on Netflix?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.heading}>
          Netflix has an extensive library of feature films, documentaries, TV shows, anime,
           award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<AddIcon className="addIcon" />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Is Netflix good for kids?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.heading}>
          The Netflix Kids experience is included in your membership to give parents control while 
          kids enjoy family-friendly TV shows and films in their own space.
          <br />
          <br />

          Kids profiles come with PIN-protected parental controls that
           let you restrict the maturity rating of content kids can
           watch and block specific titles you don’t want kids to see.
          </Typography>
        </AccordionDetails>
      </Accordion>
   
    </div>
   
    
    )
}

export default Accordions;
