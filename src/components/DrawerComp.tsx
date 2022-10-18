import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

interface NavbarProps {
  links: string[];
}
function DrawerComp({ links }: NavbarProps): JSX.Element {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Drawer
        PaperProps={{
          sx: { backgroundColor: "rgba(49,49,116,1)" },
        }}
        open={open}
        onClose={() => setOpen(false)}
      >
        <List>
          {links.map((link, index: number) => {
            return (
              <ListItemButton
                onClick={() => setOpen(false)}
                key={index}
                divider
              >
                <ListItemIcon>
                  <ListItemText sx={{ color: "white" }} primary={link} />
                </ListItemIcon>
              </ListItemButton>
            );
          })}
        </List>
      </Drawer>
      <IconButton
        sx={{ marginLeft: "auto", color: "white" }}
        onClick={() => setOpen(!open)}
      >
        <MenuRoundedIcon />
      </IconButton>
    </>
  );
}

export default DrawerComp;
