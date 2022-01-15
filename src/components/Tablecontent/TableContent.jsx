import './tableContent.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableHead from '@mui/material/TableHead';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
let Active = "Đã sử dụng";
let Pending = "Chưa sử dụng";
let Blocked = "Hết hạn";
let Ticket =[], STATUSES = [Active, Pending, Blocked];;

const useStyles = makeStyles((theme) =>({
  table: {
    minWidth: 650, 
  },
  status: {
    fontWeight: 'bold',
    fontSize: '10px',
    borderRadius: 8,
    padding: '3px 10px',
    display: 'inline-block',
    border: '1px',
  }
}));
for(let i=1;i<14;i++) {
  Ticket[i] = {
     stt: i,
     bookingcode: 'ALTFGHJU',
     numberticket: 123456789034 ,
     status: STATUSES[Math.floor(Math.random() * STATUSES.length)],
     datause: '14/04/2021',
     datarelease:'14/04/2021',
     port:'Cổng 1',     
  }
}





export default function TableContent(props) {
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
            <TableCell>{props.row7}</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
          <TableBody>
            {Ticket.map((row) => (
              <TableRow  key={row.name} >
              <TableCell>{row.stt}</TableCell>
              <TableCell>{row.bookingcode}</TableCell>
              <TableCell>{row.numberticket}</TableCell>
              <TableCell  >
              <Typography sx={{ border: 1 }} 
                    className={classes.status}
                    style={{
                      backgroundColor: 
                      ((row.status === Active && '#EAF1F8') ||
                      (row.status === Pending && '#DEF7E0') ||
                      (row.status === Blocked && '#F8EBE8')),
                      color: ((row.status === Active && '#919DBA') ||
                      (row.status === Pending && '#03AC00') ||
                      (row.status === Blocked && '#FD5959')),
                      
                  }}
                  ><li>{row.status}</li></Typography>
              </TableCell>
              <TableCell>{row.datause}</TableCell>
              <TableCell>{row.datarelease}</TableCell>
              <TableCell>{row.port}</TableCell>
              <TableCell></TableCell>
              </TableRow>
            ))}
          </TableBody>
    
    </Table>
  </TableContainer>
    
    }
        </div>
    )
}
