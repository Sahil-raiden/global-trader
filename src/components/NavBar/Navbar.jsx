import React, { useEffect, useState } from 'react';
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import { MdHomeRepairService } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { MdConnectWithoutContact } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import { MdInsertPhoto } from "react-icons/md";
import logo from '../../assets/new-logo-cropped.jpg'
import './Navbar.css'

function Navbar() {
    let [openMenu, setOpenMenu] = useState(false);
    let navigate = useNavigate();
    let menuOptions = [
        {
            text: "Home",
            to: "",
            icon: <HomeIcon style={{ fontSize: '30px' }} />,
        },
        {
            text: "Services",
            to: "services",
            icon: <MdHomeRepairService style={{ fontSize: '30px' }} />,
        },
        {
            text: "About Us",
            to: "aboutus",
            icon: <IoIosPeople style={{ fontSize: '30px' }} />,
        },
        {
            text: "Contact",
            to: "contact",
            icon: <MdConnectWithoutContact style={{ fontSize: '30px' }} />
        },
        {
            text: "Gallery",
            to: "gallery",
            icon: <MdInsertPhoto style={{ fontSize: '30px' }} />
        },
        {
            text: "Request a call",
            to: "contact",
            icon: <MdConnectWithoutContact style={{ fontSize: '30px' }} />
        }
    ];
    const [dropDownFlag, setDropDownFlag] = useState(true);
    function handleResize() {
        if (window.innerWidth < 700) {
            setDropDownFlag(false)
        }
        else {
            setDropDownFlag(true)
        }
    }
    window.addEventListener("resize", () => handleResize);
    useEffect(() => {
        handleResize()
    })
    return <nav>
        {dropDownFlag && <div className='row'>
            <div className='col'>
                <img className='p-1 rounded-4 d-block mx-auto' src={logo} height={'100px'} style={{left:'0! important',marginRight:'auto !important'}}/>
            </div>
            <ul className="col-8 nav d-flex text-center justify-content-end" style={{ fontSize: '1.3rem', padding: '10px'}}>
                <li className='nav-item pt-4'>
                    <Link className='text-black' to="">
                       Home
                    </Link></li>
                <li className='nav-item pt-4'>
                    <Link className='text-black' to="services">
                        Services
                    </Link>
                </li>
                <li className='nav-item pt-4'>
                    <Link className='text-black' to="aboutus">
                        About us
                    </Link>
                </li>
                <li className='nav-item pt-4'>
                    <Link className='text-black' to="contact">
                        Contact
                    </Link>
                </li>
                <li className='nav-item pt-4'>
                    <Link className='text-black' to="gallery">
                        Gallery
                    </Link>
                </li>
                <li className='nav-item pt-4'>
                    <Link className='requestacall rounded rounded-5 p-2' to="contact">
                        Request a call
                    </Link>
                </li>
            </ul>
        </div>}
        {!dropDownFlag && <div>
            <div className='navbar-menu-container' style={{ padding: '10px' }}>
                <HiOutlineBars3 style={{ color: 'white', fontSize: '30px' }} onClick={() => setOpenMenu(true)} />
            </div>
            <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor='top' >
                <Box sx={{ width: 250 }} role="presentation" onClick={() => setOpenMenu(false)} onKeyDown={() => setOpenMenu(false)}>
                    <List>
                        {menuOptions.map((item) => (
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton onClick={() => navigate(item.to)}>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText>{item.text}</ListItemText>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </div>}
    </nav>
}

export default Navbar