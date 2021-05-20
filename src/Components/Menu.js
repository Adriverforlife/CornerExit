import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Home, ImportContacts, Send } from '@material-ui/icons'
import List from '@material-ui/core/List'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import { useHistory } from 'react-router';
import Link from '@material-ui/core/Link'

export default function SimpleMenu() {
  const history = useHistory();
  const menuItems = [
    {
      text: "Home",
      icon: <Home />,
      path: "/",
    },
    {
      text: "Autocross Challenge",
      icon: <ImportContacts />,
      path: "/autocross",
    },
    {
      text: "Contact Us",
      icon: <Send />,
      path: "/contact",
    },
  ]
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <MenuIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <List>
          {menuItems.map(item => (
            <MenuItem
              key={item.text} onClick={handleClose}>
              <Link href={item.path}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                {item.text} </Link>
            </MenuItem>
          ))}
        </List>
        {/* <MenuItem onClick={handleClose}><ListItemIcon><Home /></ListItemIcon>Home</MenuItem>
        <MenuItem onClick={handleClose}><ListItemIcon><ImportContacts /></ListItemIcon>Event Results</MenuItem>
        <MenuItem onClick={handleClose}><ListItemIcon><Send /></ListItemIcon> Contact Us </MenuItem> */}
      </Menu>
    </div>
  );
}