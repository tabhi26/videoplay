import { Button, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useNavigate } from "react-router";

const drawerWidth = 240;

const SideNav = () => {
  const navigate = useNavigate();



    const drawer = (
        <div>
          <Toolbar />
          <Divider />
          <List>
            {['UserList', 'Learn/Videos', 'Events', 'Feeds', 'Blogs'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
      );
    return (
        <>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}
          open
        >
          {drawer}
        <Button sx={{color: "crimson"}} onClick={()=> {navigate('/')}}>Log Out</Button>
        </Drawer>
        </>
    )
}

export default SideNav;