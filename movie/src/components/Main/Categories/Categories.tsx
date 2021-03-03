import { Tabs, Tab, makeStyles } from "@material-ui/core";
import React, { ChangeEvent } from "react";

const useStyles = makeStyles(() => ({
  root: {
    minWidth: 80,
  },
}));

const Categories: React.FC = () => {
  const categoriesArray = ["All", "Documentary", "Comedy", "Horror", "Crime"];
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  const handleChange = (_event: ChangeEvent<unknown>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      indicatorColor="primary"
      textColor="primary"
      onChange={handleChange}
      className="categories"
    >
      {categoriesArray.map(category => (
        <Tab label={category} key={category} className={classes.root} />
      ))}
    </Tabs>
  );
};

export default Categories;
