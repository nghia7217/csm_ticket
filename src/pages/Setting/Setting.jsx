
import Header from "../../components/Header/Header"
import "./setting.css"
import "../../components/Headerticket/headerticket.css"
import { SearchOutlined } from '@ant-design/icons';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Tablepacked from "../../components/Content/Tablepacked/Tablepacked"
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

    bgcolor: 'background.paper',
    border: '2px solid #fff',
    boxShadow: 24,
    borderRadius: '10px',
    p: 4,
  };
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
};

  const names = [
    'Oliver Hansen',
    'Van Henry',
  ];

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
export default function Setting() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);
    const handleChange = (event) => {
        const {
          target: { value },
        } = event;
        setPersonName(
          // On autofill we get a stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
      };
    return (
        <div className="setting">
            <Header name="Danh sách gói vé"/>
            <div className="headerticket">
                <nav className="headerticket__navbar">
                    <ul className="headerticket__list headerticket__search">
                        <li className="headerticket__list-item  headerticket__list-item-search"> 
                            <input type="text" className="headerticket__search-input" placeholder="Tìm bằng số vé"/>
                            <SearchOutlined className="headerticket__search-icon"/>
                        </li>
                    </ul>
                    <ul className="headerticket__list">
                        <li className="headerticket__list-item headerticket__list-item-button">
                            <span className="headerticket__list-content">
                                Xuất file (.csv)
                            </span>
                        </li>
                       
                        <li className="headerticket__list-item headerticket__list-item-button setting__list-item">
                        <Button onClick={handleOpen}>
                            <span className="headerticket__list-content setting__list-content">
                                Thêm gói vé
                            </span>
                        </Button>
                        </li>
                    </ul>
                </nav>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                <Box sx={style} >
                    <h3 className="Setting__modal-header">Thêm gói vé</h3>
                    <div className="Setting__modal-name-ticket">
                        <h5 className="Setting__modal-nameticket">Tên gói vé  <span className="Setting__modal-required">*</span> </h5>  
                        <input type="text"  placeholder="Nhập tên gói vé" className="Setting__modal-input"/>
                    </div>
                    <div className="Setting__modal-date">
                        <ul className="Setting__modal-date-ticket Setting__modal-nameticket">Ngày áp dụng</ul>
                        <ul className="Setting__modal-date-ticket Setting__modal-nameticket">Ngày hết hạn</ul>
                    </div>
                    <h3 className="Setting__modal-nameticket">Giá vé áp dụng</h3>
                    <div className="Setting__modal-Ticket-prices">
                      <input type="checkbox" className="Setting__modal-checkbox"/>
                        <span>Vé lẻ (vnđ/vé) với giá</span>
                        <input type="text" placeholder="Giá vé" className="Setting__modal-checkbox-input" /> / vé
                    </div>
                    <div>
                      <input type="checkbox" className="Setting__modal-checkbox" />
                        <span>Combo vé với giá</span>
                        <input type="text" placeholder="Giá vé" className="Setting__modal-checkbox-input"/>/ <input type="text" placeholder="Giá vé" className="Setting__modal-checkbox-input"/> vé
                    </div>
                    <h3 className="Setting__modal-nameticket">Tình trạng</h3>
                    <div>
                    <FormControl sx={{ m: 1, width: 200, mt: 1 }}>
                        <Select
                        multiple
                        displayEmpty
                        value={personName}
                        onChange={handleChange}
                        input={<OutlinedInput />}
                        renderValue={(selected) => {
                            if (selected.length === 0) {
                            return <em>Đang áp dụng</em>;
                            }

                            return selected.join(', ');
                        }}
                        MenuProps={MenuProps}
                        inputProps={{ 'aria-label': 'Without label' }}
                        >
                        <MenuItem disabled value="">
                            <em>Placeholder</em>
                        </MenuItem>
                        {names.map((name) => (
                            <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, personName, theme)}
                            >
                            {name}
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                    </div>
                    <p><span className="Setting__modal-required">*</span> Là thông tin bắt buộc</p>
                    <button type="button" className="filtertickets__btn">Huỷ</button>
                    <button type="button" className="filtertickets__btn">Lưu</button>
                </Box>
            </Modal>


            </div>

            <Tablepacked/>
        </div>
    )
}