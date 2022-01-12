import PropTypes from "prop-types";
import React from "react";
import { Box, List, ListItem, ListItemText, Button } from "@mui/material";

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
      <List>
        {filtered.map((contact) => (
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
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

ContactList.propTypes = {
  filtered: PropTypes.array,
  del: PropTypes.func,
};

export default ContactList;
