import './tablechangticket.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableHead from '@mui/material/TableHead';
import { makeStyles } from '@mui/styles';

let Ticket =[];

const useStyles = makeStyles((theme) =>({
  table: {
    minWidth: 650, 
  },
}));
for(let i=1;i<14;i++) {
  Ticket[i] = {
     stt: i,
     numberticket: 123456789034 ,
     datause: '14/04/2021',
     name: 'Vé cổng',
     port:'Cổng 1',
     status: 'Chưa đối soát',     
  }
}




export default function Tablechangticket(props) {
  const classes = useStyles();
    return (
        <div className='tableContent'>
          {
    <TableContainer component={Paper} >
    <Table className={classes.table}  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>{props.row1}</TableCell>
            <TableCell>{props.row2}</TableCell>
            <TableCell>{props.row3}</TableCell>
            <TableCell>{props.row4}</TableCell>
            <TableCell>{props.row5}</TableCell>
            <TableCell>{props.row6}</TableCell>

          </TableRow>
        </TableHead>
          <TableBody>
            {Ticket.map((row) => (
              <TableRow  key={row.name} >
              <TableCell>{row.stt}</TableCell>
              <TableCell>{row.numberticket}</TableCell>
              <TableCell>{row.datause}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.port}</TableCell>
              <TableCell>{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
    
    </Table>
  </TableContainer>
    
    }
        </div>
    )
}
