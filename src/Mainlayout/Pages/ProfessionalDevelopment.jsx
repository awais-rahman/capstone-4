import React, { useState } from 'react';
import {
  Card, CardContent, Button, Grid, Typography, Container, Box, Avatar, Paper, TextField, Modal, Tabs, Tab,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import Meetlogo from '../../Images/meet-logo.png';
import VideocamIcon from '@mui/icons-material/Videocam';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';

const CustomTabPanel = ({ children, value, index }) => {
  return value === index ? <Box>{children}</Box> : null;
};

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

const ProfessionalDevelopment = () => {
  const [open, setOpen] = useState(false);
  const [announcement, setAnnouncement] = useState("");
  const [announcements, setAnnouncements] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setAnnouncement("");
    setEditIndex(null);
    setOpen(false);
  };

  const postAnnouncement = () => {
    if (announcement.trim() !== "") {
      if (editIndex !== null) {
        const updatedAnnouncements = [...announcements];
        updatedAnnouncements[editIndex] = announcement;
        setAnnouncements(updatedAnnouncements);
      } else {
        setAnnouncements([...announcements, announcement]);
      }
      handleClose();
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setAnnouncement(announcements[index]);
    setOpen(true);
  };

  const handleDelete = (index) => {
    setAnnouncements(announcements.filter((_, i) => i !== index));
  };

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Tabs value={tabValue} onChange={handleTabChange}>
          <Tab label="Stream" {...a11yProps(0)} />
          <Tab label="Classwork" {...a11yProps(1)} />
          <Tab label="People" {...a11yProps(2)} />
        </Tabs>
        <Box sx={{ display: 'flex', gap: 2, pr: 2 }}>
          <VideocamIcon sx={{ fontSize: 20, cursor: 'pointer' }} />
          <CalendarTodayIcon sx={{ fontSize: 20, cursor: 'pointer' }} />
          <AddToDriveIcon sx={{ fontSize: 20, cursor: 'pointer' }} />
        </Box>
      </Box>

      <Container maxWidth="lg" className="mt-4 mb-5">
        <Box sx={{ width: '100%', mb: 4 }}>
          <CustomTabPanel value={tabValue} index={0}>
            <Card elevation={3}>
              <Box sx={{ backgroundColor: blue[600], color: "white", p: 3, textAlign: "left", height: "250px", display: "flex", alignItems: "end" }}>
                <Typography variant="h4" fontWeight="bold">Professional Development</Typography>
              </Box>
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={3}>
                    <Paper elevation={2} sx={{ p: 3, textAlign: "center" }}>
                      <Box display="flex" alignItems="center" gap={2} mb={3}>
                        <Box component="img" src={Meetlogo} alt="Meet Logo" sx={{ height: 30, width: 30, objectFit: "contain" }} />
                        <Typography variant="h6">Meet</Typography>
                      </Box>
                      <Button variant="contained" color="primary" fullWidth>Join</Button>
                    </Paper>

                    <Paper elevation={2} sx={{ p: 3, textAlign: "center", mt: 3 }}>
                      <Typography variant="h6" mt={1}>
                        Upcoming
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Woohoo, no work due soon!
                      </Typography>
                      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 1 }}>
                        <Button>View all</Button>
                      </Box>
                    </Paper>

                  </Grid>

                  <Grid item xs={12} md={9}>
                    <Card elevation={3}>
                      <CardContent>
                        <Typography variant="h5">Announcements</Typography>
                        <Paper elevation={1} sx={{ p: 3, mt: 2, cursor: "pointer" }} onClick={handleOpen}>
                          <Box display="flex" alignItems="center">
                            <Avatar sx={{ bgcolor: blue[500] }}>A</Avatar>
                            <Typography variant="body1" ml={2} color="text.secondary">Announce something to your class</Typography>
                          </Box>
                        </Paper>
                        <Box sx={{ mt: 3 }}>
                          {announcements.map((ann, index) => (
                            <Paper key={index} elevation={2} sx={{ p: 2, mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                              <Typography variant="body1">{ann}</Typography>
                              <Box>
                                <Button size="small" color="primary" onClick={() => handleEdit(index)}>Edit</Button>
                                <Button size="small" color="error" onClick={() => handleDelete(index)}>Delete</Button>
                              </Box>
                            </Paper>
                          ))}
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </CustomTabPanel>
          <CustomTabPanel value={tabValue} index={1}>
            {/* Classwork Content */}
            <CardContent>
              <Typography variant="h5">Announcements</Typography>
              <Paper elevation={1} sx={{ p: 3, mt: 2, cursor: "pointer" }} onClick={handleOpen}>
                <Box display="flex" alignItems="center">
                  <Avatar sx={{ bgcolor: blue[500] }}>A</Avatar>
                  <Typography variant="body1" ml={2} color="text.secondary">Announce something to your class</Typography>
                </Box>
              </Paper>
              <Box sx={{ mt: 3 }}>
                {announcements.map((ann, index) => (
                  <Paper key={index} elevation={2} sx={{ p: 2, mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body1">{ann}</Typography>
                    <Box>
                      <Button size="small" color="primary" onClick={() => handleEdit(index)}>Edit</Button>
                      <Button size="small" color="error" onClick={() => handleDelete(index)}>Delete</Button>
                    </Box>
                  </Paper>
                ))}
              </Box>
            </CardContent>
          </CustomTabPanel>

          <CustomTabPanel value={tabValue} index={2}>
            {/* People Content */}
            <Typography variant="h6" gutterBottom>
              Class Members
            </Typography>

            <Paper elevation={1} sx={{ p: 2, mt: 2 }}>
              <Typography variant="h6">Teacher</Typography>
              <Typography variant="body1" color="text.secondary">
                Ijaz Liquat (Instructor)
              </Typography>
            </Paper>

            <Paper elevation={1} sx={{ p: 2, mt: 2 }}>
              <Typography variant="h6">Students</Typography>
              <Typography variant="body1" color="text.secondary">
                1. Awais ur rehman
              </Typography>
              <Typography variant="body1" color="text.secondary">
                2. Faraz Ali
              </Typography>
              <Typography variant="body1" color="text.secondary">
                3. Sanaullah
              </Typography>
            </Paper>
          </CustomTabPanel>

        </Box>

      </Container>


      <Modal open={open} onClose={handleClose}>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4, borderRadius: 2, width: 500 }}>
          <Typography variant="h6" mb={2}>{editIndex !== null ? "Edit Announcement" : "Announce something to your class"}</Typography>
          <TextField fullWidth multiline rows={3} variant="outlined" placeholder="Announce something to your class" value={announcement} onChange={(e) => setAnnouncement(e.target.value)} />
          <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
            <Button variant="contained" color="primary" onClick={postAnnouncement} disabled={!announcement.trim()}>{editIndex !== null ? "Update" : "Post"}</Button>
            <Button variant="outlined" color="secondary" onClick={handleClose}>Cancel</Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default ProfessionalDevelopment;


