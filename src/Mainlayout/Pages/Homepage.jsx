import React, { useState } from 'react';
import { AccountCircle, Folder, MoreVert, } from '@mui/icons-material';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';

const Homepage = () => {
    const items = [
        { name: 'English 02', subtitle: 'xWave Team', title: ' ', link:'/english', icon: <AccountCircle fontSize="large" /> },
        { name: 'Professional Development', subtitle: 'xWave Team',link:'/professional-development' , title: 'Cohort 02 - Kingri', icon: <AccountCircle fontSize="large" /> },
        { name: 'English Communication', subtitle: 'xWave Team',link: '/english-communication' ,title: 'Cohort 02 - Kingri', icon: <AccountCircle fontSize="large" /> },
        { name: 'Web Dev Frontend S02', subtitle: ' xWave Team', link:'/web-development' , title: 'Cohort 2 - Kingri ', icon: <Folder fontSize="large" /> }
    ];

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="d-flex flex-wrap gap-4 p-4  justify-content-lg-start justify-content-center ">
            {items.map((item, index) => (
                <div key={index} className="card shadow-lg" style={{ minWidth: '20rem', height: '18rem' }}>
                    <div className="card-header bg-primary text-white d-flex justify-content-between py-3">
                        <div className='d-flex flex-column' style={{ minHeight: '80px' }}>
                        
                            <Link to={item.link} style={{textDecoration:'none'}} >
                                <h4 className="mb-0 text-white">{item.name.length > 15 ? item.name.slice(0, 15) + '...' : item.name}</h4>
                            </Link>
                            <small>{item.title || ' '}</small>
                            <small>{item.subtitle || ' '}</small>
                        </div>
                        <div>
                            <IconButton onClick={handleClick} className="text-white">
                                <MoreVert />
                            </IconButton>
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Move</MenuItem>
                                <MenuItem onClick={handleClose}>Unenroll</MenuItem>
                                <hr />
                                <MenuItem onClick={handleClose}>Report</MenuItem>
                            </Menu>

                        </div>
                    </div>
                    <div className="card-body position-relative" style={{ height: '6rem' }}>
                        <div className="fs-3 position-absolute top-0 end-0 translate-middle bg-purple text-white rounded-circle d-flex align-items-center justify-content-center p-4" style={{ width: '70px', height: '70px', backgroundColor: "#7e57c2" }}>
                            X
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-end border-top gap-3 py-3">
                        <AssignmentIndOutlinedIcon/>
                        <FolderOpenOutlinedIcon />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Homepage;
