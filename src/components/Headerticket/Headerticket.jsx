import "./headerticket.css"
import { SearchOutlined,FilterOutlined } from '@ant-design/icons';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Modalfilter from "../Modal/Modalfilter/Modalfilter";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #fff',
    p: 4,
    borderRadius: '10px',
    width: 400,
  };
export default function Headerticket(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
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
                            <Modalfilter/>
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
