import * as React from "react";
import PropTypes from "prop-types";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import pkflag from "../../assets2/images/pkflag.png";
import indflag from "../../assets2/images/indflag.png";
import usaflag from "../../assets2/images/usaflag.png";

const countries = [
  { name: "Pakistan", img: pkflag },
  { name: "India", img: indflag },
  { name: "USA", img: usaflag },
];

export default function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    // onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
    localStorage.setItem("selectedCountry", value);
  };

  const selectedCountry = localStorage.getItem("selectedCountry");

  return (
    <Dialog onClose={handleClose} open={open && !selectedCountry}>
      <div
        style={{ width: "280px" }}
        className="d-flex flex-column align-items-center"
      >
        <DialogTitle>Select Country</DialogTitle>
        <List sx={{ p: 2, pt: 0 }} className="w-100">
          {countries.map((data) => (
            <div
              className="box-shadow-default-country rounded-5 mt-2 p-2"
              button
              onClick={() => handleListItemClick(data?.name)}
              key={data?.name}
            >
              <img src={data.img} />

              <span className="ms-2">{data?.name}</span>
            </div>
          ))}
        </List>
      </div>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};
