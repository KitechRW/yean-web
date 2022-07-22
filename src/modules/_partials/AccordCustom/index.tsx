import React from 'react';
import { withStyles } from '@mui/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { DeleteForever, Edit } from '@mui/icons-material';
import CustomImage from '../CustomImage';

const Accordion = withStyles({
  root: {
    backgroundColor: '#fff',
    borderRadius: 12,
    // boxShadow: '0px 0px 20px #0001',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    marginBottom: -1,
    padding: '0px 15px',
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
      borderRadius: 12,
    },
    expanded: {},
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme: any) => ({
  root: {
    borderRadius: 12,
  },
}))(MuiAccordionDetails);

interface IAccordCustom {
  onClick?: any;
  data?: any;
}
const AccordCustom = ({
  onClick = () => {},
  data = null,
}: IAccordCustom) => {
  const [expanded, setExpanded] = React.useState(false);
  const textRef = React.useRef(null);

  React.useEffect(() => {
    if (textRef.current) {
      textRef.current.innerHTML = data.text;
    }
  }, [data.text]);

  return (
    <Accordion
      square
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
      className="w-full"
      style={{ boxShadow: '0px 0px 2px #C7F2FF' }}
    >
      <AccordionSummary
        expandIcon={
          <ArrowDropDownIcon fontSize="large" className="" />
        }
        sx={{ backgroundColor: '#C7F2FF', borderRadius: '12px' }}
      >
        <div className="flex items-center gap-x-3 w-full">
          <div className="flex flex-col">
            <CustomImage
              src={data.image}
              alt=""
              width="62px"
              height="62px"
              layout="fixed"
              className="rounded-lg"
            />
          </div>
          <p className="text-lg font-medium tracking-wide">
            {data?.title || data?.name}
          </p>
          <div className="ml-auto flex items-center space-x-2">
            <button
              type="button"
              // onClick={onClick}
              title="Edit"
              className="bg-dark-green/70 text-white p-1 rounded-lg hover:opacity-70"
            >
              <Edit />
            </button>
            <button
              type="button"
              onClick={onClick}
              title="Delete"
              className="bg-red-500/70 text-white p-1 rounded-lg hover:opacity-70"
            >
              <DeleteForever />
            </button>
          </div>
        </div>
      </AccordionSummary>

      <AccordionDetails>
        <div ref={textRef} className="flex flex-col space-y-1"></div>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordCustom;
