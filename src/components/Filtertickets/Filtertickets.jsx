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
            <div className="filtertickets__header"> Lọc vé</div>
            <div>
                <ul className="filtertickets__ul">
                    <li className="filtertickets__li filtertickets__li-title">Tình trạng đối soát</li>
                    <div className="test">
                        <li className="filtertickets__li">
                            <input type="radio" className="filtertickets__li-input" /> Tất cả
                        </li>
                        <li className="filtertickets__li">
                            <input type="radio" className="filtertickets__li-input" /> Đã đối soát
                        </li>
                        <li className="filtertickets__li">
                            <input type="radio"  className="filtertickets__li-input"/> Chưa đối soát
                        </li>
                    </div>
                </ul>
                <ul className="filtertickets__ul">
                    <li className="filtertickets__li filtertickets__li-title ">Loại vé</li>
                    <li className="filtertickets__li filtertickets__li-margin">Vé cổng</li>
                </ul>
                <ul className="filtertickets__ul">
                    <li className="filtertickets__li filtertickets__li-title">Từ ngày</li>
                    <li className="filtertickets__li">
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
                    </li>
                </ul>
                <ul className="filtertickets__ul">
                    <li className="filtertickets__li filtertickets__li-title">Đến ngày</li>
                    <li className="filtertickets__li">
                            <LocalizationProvider dateAdapter={AdapterDateFns} >
                                <DatePicker 
                                    label="mm/dd/yy"
                                    value={value}
                                    onChange={(newValue) => {
                                    setValue(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                    </li>
                </ul>
            </div>
           
                    
            
             

        </div>
        
    )
}
