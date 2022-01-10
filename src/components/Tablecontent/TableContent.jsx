import './tableContent.css'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
 
}));
  function createData(
      stt, 
      bookingcode,
      numberticket, 
      status, 
      datause, 
      datarelease,
      port
    ) {
    return { stt, bookingcode, numberticket, status, datause, datarelease, port };
  }
  
  const rows = [
    createData('1', 'ALTFGHJU', 123456789034, 'Đã sử dụng', '14/04/2021', '14/04/2021', 'Cổng 1'),
    createData('2', 'ALTOJMNB', 236784631642, 'Chưa sử dụng', '14/04/2021', '14/04/2021', 'Cổng 1'),
    createData('3', 'ALTQTYJH', 487621489474, 'Hết hạn', '14/04/2021', '14/04/2021', 'Cổng 1'),
    createData('4', 'ALTCFSDF', 156464891479, 'Hết hạn', '14/04/2021', '14/04/2021', 'Cổng 1'),
    createData('5', 'ALTIOJNB', 201649631896, 'Đã sử dụng', '14/04/2021', '14/04/2021', 'Cổng 1'),
    createData('6', 'ALTIOJNB', 201649631896, 'Đã sử dụng', '14/04/2021', '14/04/2021', 'Cổng 1'),
    createData('7', 'ALTIOJNB', 201649631896, 'Đã sử dụng', '14/04/2021', '14/04/2021', 'Cổng 1'),
    createData('8', 'ALTIOJNB', 201649631896, 'Đã sử dụng', '14/04/2021', '14/04/2021', 'Cổng 1'),
    createData('9', 'ALTIOJNB', 201649631896, 'Đã sử dụng', '14/04/2021', '14/04/2021', 'Cổng 1'),
    createData('10', 'ALTIOJNB', 201649631896, 'Đã sử dụng', '14/04/2021', '14/04/2021', 'Cổng 1'),
    createData('11', 'ALTIOJNB', 201649631896, 'Đã sử dụng', '14/04/2021', '14/04/2021', 'Cổng 1'),
    createData('12', 'ALTIOJNB', 201649631896, 'Đã sử dụng', '14/04/2021', '14/04/2021', 'Cổng 1'),
  ];
export default function TableContent() {
    return (
        <div className='tableContent'>
           <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700  }} aria-label="customized table">       
        <TableBody>
           <StyledTableRow >         
              <StyledTableCell align="center"> <span className='tableContent__header'>STT</span></StyledTableCell>
              <StyledTableCell align="left"><span className='tableContent__header'>Booking code</span></StyledTableCell>
              <StyledTableCell align="left"> <span className='tableContent__header'>Số vé</span></StyledTableCell>
              <StyledTableCell align="left"><span className='tableContent__header'>Tình trạng sử dụng</span></StyledTableCell>
              <StyledTableCell align="right"><span className='tableContent__header'>Ngày sử dụng</span></StyledTableCell>
              <StyledTableCell align="right"><span className='tableContent__header'>Ngày xuất vé</span></StyledTableCell>
              <StyledTableCell align="left"><span className='tableContent__header'>Cổng check - in</span></StyledTableCell>
              <StyledTableCell align="left"></StyledTableCell>
           </StyledTableRow>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align='center' component="th" scope="row">{row.stt}</StyledTableCell>
              <StyledTableCell align="left">{row.bookingcode}</StyledTableCell>
              <StyledTableCell align="left">{row.numberticket}</StyledTableCell>
              <StyledTableCell align="left">{row.status}</StyledTableCell>
              <StyledTableCell align="right">{row.datause}</StyledTableCell>
              <StyledTableCell align="right">{row.datarelease}</StyledTableCell>
              <StyledTableCell align="left">{row.port}</StyledTableCell>
              <StyledTableCell align="left"></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>       
        </div>
    )
}
