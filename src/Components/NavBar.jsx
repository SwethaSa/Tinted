import * as React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import { BiHomeHeart } from "react-icons/bi";
import { PiTShirtDuotone } from "react-icons/pi";
import { MdOutlineCall } from "react-icons/md";
import { RiMenu4Fill } from "react-icons/ri";
import { Link } from "react-router-dom"; // Import Link
import { useEffect, useState } from "react";
import { RiAccountPinCircleFill } from "react-icons/ri";
import "./NavBar.css";

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
  });
  let [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const items = ["Home", "Products", "Contact"];
  const icons = [<BiHomeHeart />, <PiTShirtDuotone />, <MdOutlineCall />];
  const divIcon = [<RiAccountPinCircleFill />];

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" ? "auto" : 250,
        backgroundColor: "rgba(255, 218, 185, 0.759)",
      }}
      className="box-class"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {items.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ListItemIcon style={{ color: "chocolate" }}>
                  {icons[index]}
                </ListItemIcon>
              </ListItemIcon>
              {/* Use Link component to navigate */}
              <ListItemText
                primary={
                  <Link
                    to={
                      text.toLowerCase() === "contact"
                        ? "/contact-us"
                        : text.toLowerCase() === "home"
                        ? "/"
                        : `/${text.toLowerCase()}`
                    }
                  >
                    {text}
                  </Link>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {screenWidth <= 750 && (
        <>
          <Divider className="divider" />
          <List>
            {["Log In"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <ListItemIcon style={{ color: "chocolate" }}>
                      {divIcon[index]}
                    </ListItemIcon>
                  </ListItemIcon>
                  {/* Use Link component to navigate */}
                  <ListItemText
                    primary={
                      <Link to={`/${text.toLowerCase()}`} className="link-deco">
                        {text}
                      </Link>
                    }
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </>
      )}
    </Box>
  );

  return (
    <div>
      {["top"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            className="tint-button"
            style={{
              color: "chocolate",
              height: "60px",
              fontSize: "1cm",
              marginLeft: "-100px",
            }}
            onClick={toggleDrawer(anchor, true)}
          >
            <RiMenu4Fill />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
