import React, { useEffect, useState } from "react";
import { useMinimalSelectStyles } from "@mui-treasury/styles/select/minimal";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles, InputLabel } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    width :' 100%'
  },
}));

const CustomSelect = (props) => {
  const classes = useStyles();
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

  return (
    <FormControl variant="outlined" className={classes.formControl} size="small">
      <InputLabel id="pricingCategory1">Select Class</InputLabel>
      <Select
        labelId="pricingCategory1"
        id="pricingCategory"
        value={val}
        onChange={handleChange}
        label="Select Class"
        // MenuProps={MenuProps}
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
