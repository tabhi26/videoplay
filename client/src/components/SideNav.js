import {
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useNavigate } from "react-router";
import LogoutIcon from '@mui/icons-material/Logout';

const drawerWidth = 240;

const SideNav = () => {
  const navigate = useNavigate();

  const drawer = (
    <div>
      <Toolbar />
      <List>
        {["UserList", "Learn/Videos", "Events", "Feeds", "Blogs"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </div>
  );
  return (
    <>
      <Drawer
        PaperProps={{
          sx: {
            background: "crimson",
          },
        }}
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
        open
      >
        {drawer}
        <Button
          variant="contained"
          sx={{
            marginTop: "90%",
            background: "white",
            color: "crimson",
            "&:hover": { backgroundColor: "darkGrey" },
          }}
          onClick={() => {
            navigate("/");
          }}
        >
          <LogoutIcon />
          Log Out
        </Button>
      </Drawer>
    </>
  );
};

export default SideNav;
