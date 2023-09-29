import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { ReactComponent as Dropdown } from "./../../Assets/Dropdown.svg";
import styles from "./Accordian.module.css"
import { ReactComponent as Linthorizontal } from './../../Assets/linehorizontal.svg';


export default function BasicAccordion() {
  return (
    <div>
      
       <hr/>  
      <Accordion style={{backgroundColor:"#1E1E1E",color:"#FFFFFF",marginBottom:"37px", marginTop:"37px"}}>
        <AccordionSummary
          expandIcon={<Dropdown />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h1 className={styles.heading}>How much is my case worth?</h1>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <hr/>  
      <Accordion style={{backgroundColor:"#1E1E1E",color:"#FFFFFF",marginBottom:"37px", marginTop:"37px"}}>
        <AccordionSummary
          expandIcon={<Dropdown />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h1 className={styles.heading}>What should I do right after car accidect</h1>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <hr/>  
      <Accordion style={{backgroundColor:"#1E1E1E",color:"#FFFFFF",marginBottom:"37px", marginTop:"37px"}}>
        <AccordionSummary
          expandIcon={<Dropdown />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h1 className={styles.heading}>How much is my case worth?</h1>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <hr/>  


    </div>
  );
}