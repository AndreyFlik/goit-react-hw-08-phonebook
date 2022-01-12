import PropTypes from "prop-types";
import React from "react";
import { Box, List, ListItem, ListItemText, Button } from "@mui/material";

// import s from "./ContactList.module.css";

const ContactList = ({ filtered, del }) => {
  return (
    <Box
      sx={{
        width: 600,
        height: 200,
        backgroundColor: "primary",
        "& .MuiTextField-root": { width: "40ch" },
      }}
    >
      {/* <ul className={s.styleList}> */}
      <List>
        {filtered.map((contact) => (
          // <li key={contact.id} className={s.styleContact}>
          <ListItem key={contact.id}>
            <ListItemText>
              NAME: {contact.name} | TEL: {contact.number}
            </ListItemText>
            <Button
              color="primary"
              variant="contained"
              type="button"
              onClick={() => del(contact.id)}
            >
              Delete
            </Button>
            {/* <button
              className={s.UserMenuButton}
              onClick={() => del(contact.id)}
              type="button"
            >
              Delete
            </button> */}
          </ListItem>
          // {/* </li> */}
        ))}
      </List>
      {/* </ul> */}
    </Box>
  );
};

ContactList.propTypes = {
  filtered: PropTypes.array,
  del: PropTypes.func,
};

export default ContactList;
