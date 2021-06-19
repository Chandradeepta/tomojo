import React, { useEffect, useState } from "react";
import { useMinimalSelectStyles } from "@mui-treasury/styles/select/minimal";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const CustomSelect = (props) => {
  const { items, getSelected } = props;
  const [val, setVal] = useState("default");

  const handleChange = (event) => {
    setVal(event.target.value);
    getSelected(event.target.value);
  };

  useEffect(() => {
    setVal(0);
  }, []);

  const minimalSelectClasses = useMinimalSelectStyles();

  const iconComponent = (props) => {
    return (
      <ExpandMoreIcon
        className={props.className + " " + minimalSelectClasses.icon}
      />
    );
  };

  // moves the menu below the select input
  const menuProps = {
    classes: {
      paper: minimalSelectClasses.paper,
      list: minimalSelectClasses.list,
      maxHeight: 20,
    },
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left",
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "left",
    },
    getContentAnchorEl: null,
  };

  return (
    <FormControl>
      <Select
        disableUnderline
        classes={{ root: minimalSelectClasses.select }}
        style={{ maxHeight: 20 }}
        MenuProps={menuProps}
        IconComponent={iconComponent}
        value={val}
        onChange={handleChange}
        MenuProps={MenuProps}
      >
        <MenuItem value={"default"} disabled>
          Select Class
        </MenuItem>
        {items.map((each, i) => {
          return typeof each === "string" ? (
            <MenuItem key={i} value={i}>
              {each}
            </MenuItem>
          ) : (
            <MenuItem key={i} value={i}>
              {each.name + " " + each.code}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
