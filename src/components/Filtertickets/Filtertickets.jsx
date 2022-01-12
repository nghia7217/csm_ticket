import "./filtertickets.css"
import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Stack from '@mui/material/Stack';




export default function Filtertickets() {
    const [value, setValue] = React.useState(null);
    return (
        <div className="filtertickets">
            <div>Lọc vé</div>
            <ul>
                <li>Tình trạng đối soát</li>
                <li>Loại vé</li>
                <li>Từ ngày</li>
                <li>Đến ngày</li>
            </ul>


            <LocalizationProvider dateAdapter={AdapterDateFns}>
                 <Stack spacing={3}>
                 <DatePicker
                    label="12/1/2022"
                    disabled
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                 />
                </Stack>
            </LocalizationProvider>    
        </div>
        
    )
}
