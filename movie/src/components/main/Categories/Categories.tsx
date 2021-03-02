import { Tabs, Tab, Theme, makeStyles } from "@material-ui/core";
import React from "react";
import "./Categories.scss";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minWidth: 80,
  },
}));

const Categories: React.FC = () => {
  const categoriesArray = ["All", "Documentary", "Comedy", "Horror", "Crime"];
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      indicatorColor="primary"
      textColor="primary"
      onChange={handleChange}
      aria-label="disabled tabs example"
      className="categories"
    >
      {categoriesArray.map((category, index) => (
        <Tab label={category} key={index} className={classes.root} />
      ))}
    </Tabs>
  );
};

export default Categories;
