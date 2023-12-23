import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  //   ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import segment from "./images/segment.svg";
import dashboard from "./images/dashboard.svg";
import note_alt from "./images/note_alt.svg";
import quiz from "./images/quiz.svg";
import admin_meds from "./images/admin_meds.svg";

function Header() {
  const [active, setActive] = useState("my assessment");
  const navigate = useNavigate();
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <div className="d-flex justify-content-between p-3">
        <h6 className="">Menu</h6>
        <span className="fw-bold" onClick={() => toggleDrawer(anchor, false)}>
          X
        </span>
      </div>
      <List>
        {[
          { text: "Dashboard", icon: dashboard, link: "/dashboard" },
          { text: "Assessment", icon: note_alt, link: "/assessment" },
          { text: "My library", icon: quiz, link: "/library" },
          { text: "Round status", icon: admin_meds, link: "/status" },
        ].map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              onClick={() => navigate(item.link)}
              className="m-2 drawer_btn">
              <ListItemIcon>
                <img src={item.icon} alt="icons" />
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <div>
      <div className="d-flex d-md-none align-items-center">
        <Button onClick={toggleDrawer("left", true)}>
          <img src={segment} alt="segment" />
        </Button>
        <h5 className="fw-semibold align-self-end">Assessment</h5>
        <Drawer
          anchor="left"
          open={state.left}
          onClose={toggleDrawer("left", false)}>
          {list("left")}
        </Drawer>
      </div>
      <div className="header d-flex  pt-2 gap-2 align-items-center ">
        <div
          className={` fs-5 p-2 rounded-top ms-3 fw-semibold ${
            active === "assessment"
              ? " text-primary border-3 border-bottom border-primary text-primary "
              : "text-primary-emphasis"
          }`}
          onClick={() => {
            setActive("assessment");
            navigate("/assessment");
          }}>
          Assessment
        </div>
        <div className="box box_line"></div>
        <div
          className={` fs-5 p-2 rounded-top fw-semibold${
            active === "my assessment"
              ? " text-primary border-3 border-bottom border-primary text-primary "
              : "text-primary-emphasis"
          }`}
          onClick={() => {
            setActive("my assessment");
            navigate("/");
          }}>
          My Assessment
        </div>
      </div>
    </div>
  );
}

export default Header;
