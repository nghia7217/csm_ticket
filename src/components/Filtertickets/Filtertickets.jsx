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
            <div className="filtertickets__center">
                <div className="filtertickets__content">
                    <ul className="filtertickets__list">
                        <li className="filtertickets__item filtertickets__item-status filtertickets__item-left">Tình trạng đối soát</li>
                        <li className="filtertickets__item filtertickets__item-left">Loại vé</li>
                        <li className="filtertickets__item filtertickets__item-left filtertickets__since">Từ ngày</li>
                        <li className="filtertickets__item filtertickets__item-left filtertickets__today">Đến ngày</li>
                    </ul>
                </div>
                <div className="filtertickets__content">
                    <ul className="filtertickets__list">
                        <li className="filtertickets__item">
                            <span className="span">
                                <input type="radio" className="filtertickets__item-input" />
                                Tất cả                      
                                <br></br>
                                <input type="radio" className="filtertickets__item-input"/>
                                Đã đối soát                
                                <br></br>
                                <input type="radio" className="filtertickets__item-input"/>
                                Chưa đối soát
                            </span>
                        </li>
                        <li className="filtertickets__item">Vé cổng</li>
                        <li className="filtertickets__item">
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <Stack spacing={3}>
                                <DatePicker
                                disabled
                                onChange={(newValue) => {
                                    setValue(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                                />
                            </Stack>
                            </LocalizationProvider>
                        </li>
                        <li className="filtertickets__item">
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker                   
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
          <button className="filtertickets__btn">Lọc</button>
                    
            
             

        </div>
        
    )
}
