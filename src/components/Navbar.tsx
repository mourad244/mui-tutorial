import React, { useState } from "react";
import {
  AppBar,
  Typography,
  Grid,
  Toolbar,
  Tabs,
  Tab,
  Box,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import DrawerComp from "./DrawerComp";
interface NavbarProps {
  links: string[];
}
function Navbar({ links }: NavbarProps): JSX.Element {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const [value, setValue] = useState();
  return (
    <AppBar
      sx={{
        backgroundImage:
          "linear-gradient(90deg, rgba(167,58,10,1) 0%, rgba(0,176,255,0.6530987394957983) 100%, rgba(75,143,65,0.8407738095238095) 169%);",
      }}
    >
      <Toolbar>
        {isMatch ? (
          <>
            <Typography>
              <ShoppingCartCheckoutIcon />
            </Typography>
            <DrawerComp links={links} />
          </>
        ) : (
          <Grid sx={{ placeItems: "center" }} container>
            <Grid item xs={2}>
              <Typography>
                <ShoppingCartCheckoutIcon />
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Tabs
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, newValue) => setValue(newValue)}
              >
                {links.map((link, index: number) => {
                  return <Tab key={index} label={link} />;
                })}
              </Tabs>
            </Grid>
            <Grid item xs={1} />
            <Grid item xs={3}>
              <Box display="flex">
                <Button
                  sx={{
                    marginLeft: "auto",
                    background: "rgba(167, 58, 10, 1)",
                  }}
                  variant="contained"
                >
                  Login
                </Button>
                <Button
                  sx={{ marginLeft: 1, background: "rgba(167, 58, 10, 1)" }}
                  variant="contained"
                >
                  Signup
                </Button>
              </Box>
            </Grid>
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
