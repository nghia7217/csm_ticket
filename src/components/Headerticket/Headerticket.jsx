import "./headerticket.css"

import { SearchOutlined,FilterOutlined } from '@ant-design/icons';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #fff',
    p: 4,
    borderRadius: '10px',
  };
export default function Headerticket(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [value, setValue] = React.useState(null);
  
    return (
        <div className="headerticket">
           <nav className="headerticket__navbar">
                <ul className="headerticket__list headerticket__search">
                    <li className="headerticket__list-item  headerticket__list-item-search"> 
                        <input type="text" className="headerticket__search-input" placeholder="Tìm bằng số vé"/>
                        <SearchOutlined className="headerticket__search-icon"/>
                    </li>
                </ul>

                <ul className="headerticket__list">
                    <Button onClick={handleOpen}>      
                                <FilterOutlined className="headerticket__list-icon"/>
                                {props.namebtnone}       
                    </Button>
                    <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                        <Box sx={style}>
                            <h3 className="box__header">Lọc vé</h3>
                            <ul className="box__content">
                                <li className="box__li"> 
                                    <h5>Từ ngày </h5>
                                    <br></br>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        label="18/1/2022"
                                        value={value}
                                        onChange={(newValue) => {
                                        setValue(newValue);
                                        }}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                                </li>
                                <li className="box__li">
                                <h5>Đến ngày</h5>   
                                <br></br>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        label="18/1/2022"
                                        value={value}
                                        onChange={(newValue) => {
                                        setValue(newValue);
                                        }}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                                </li>
                            </ul>
                            <h5>Tình trạng sử dụng</h5>
                            <ul className="box__content">
                                <li className="box__li box__list">
                                    <input type="radio" />
                                    Tất cả
                                </li>
                                <li className="box__li box__list">
                                    <input type="radio" />
                                    Đã sử dụng
                                </li>
                                <li className="box__li box__list">
                                    <input type="radio" />
                                    Chưa sử dụng
                                </li>
                                <li className="box__li box__list">
                                    <input type="radio" />
                                    Hết hạn
                                </li>
                            </ul>
                            <h5>Cổng Check - in</h5>
                            <ul className="box__content">
                                <li className="box__list box__li">
                                    <input type="radio" />
                                    Tất cả
                                </li>
                                <li className="box__list box__li">
                                    <input type="radio" />
                                    Cổng 1
                                </li>
                                <li className="box__list box__li">
                                    <input type="radio" />
                                    Cổng 2
                                </li>
                                <br></br>
                                <li className="box__list box__li">
                                    <input type="radio" />
                                    Cổng 3
                                </li> 
                                <li className="box__list box__li">
                                    <input type="radio" />
                                    Cổng 4
                                </li>
                                <li className="box__list box__li">
                                    <input type="radio" />
                                    Cổng 5
                                </li>
                            </ul>
                            <button type="button" className="filtertickets__btn">Lọc</button>
                        </Box>
                    </Modal>
                    <li className="headerticket__list-item headerticket__list-item-button">
                        <span className="headerticket__list-content">
                             {props.namebtntwo}
                        </span>
                    </li>
                </ul>
           </nav>
        </div>
    )
}
