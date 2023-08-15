import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Dashboard, Person, Payment, Event, LiveHelp, Settings } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  const listItemTextStyle = {
    color: 'white',
  };

  const sidebarStyle = (): React.CSSProperties => ({
    backgroundColor: '#311B92',
    height: '100%',
    width: '240px',
    padding: '16px',
    position: 'relative',
    borderRadius: '0 20px 20px 0',
    boxShadow: '4px 0px 8px rgba(0, 0, 0, 0.1)',
  })

  return (
    <Drawer variant="permanent" >
      <div style={sidebarStyle()}>
        <div className="logo" style={listItemTextStyle}>
          <h1>KRITI</h1>
        </div>
        <List sx={listItemTextStyle}>
          <ListItem button onClick={() => navigate("/underdev")}>
            <ListItemIcon>
              <Dashboard sx={listItemTextStyle} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button onClick={() => navigate("/underdev")}>
            <ListItemIcon>
              <Person sx={listItemTextStyle} />
            </ListItemIcon >
            <ListItemText primary="Patient" />
          </ListItem>
          <ListItem button onClick={() => navigate("/billing")}>
            <ListItemIcon>
              <Payment sx={listItemTextStyle} />
            </ListItemIcon>
            <ListItemText primary="Billing" />
          </ListItem>
          <ListItem button onClick={() => navigate("/underdev")}>
            <ListItemIcon>
              <Event sx={listItemTextStyle} />
            </ListItemIcon>
            <ListItemText primary="Appointment" />
          </ListItem>
        </List>
        <List sx={{ position: 'absolute', bottom: 0, ...listItemTextStyle }}>
          <ListItem button onClick={() => navigate("/underdev")}>
            <ListItemIcon>
              <LiveHelp sx={listItemTextStyle} />
            </ListItemIcon>
            <ListItemText primary="Support" />
          </ListItem>
          <ListItem button onClick={() => navigate("/underdev")}>
            <ListItemIcon>
              <Settings sx={listItemTextStyle} />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};

export default Sidebar;

