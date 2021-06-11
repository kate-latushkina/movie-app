import { Tabs, Tab, makeStyles } from "@material-ui/core";
import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { setCategory } from "../../../state/reducers/actionCreators";

const useStyles = makeStyles(() => ({
  root: {
    minWidth: 80,
  },
}));

const Categories: React.FC = () => {
  const categoriesArray = ["All", "Action", "Comedy", "Horror", "Crime"];
  const [value, setValue] = useState(0);
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleChange = (_event: ChangeEvent<unknown>, newValue: number) => {
    setValue(newValue);
  };

  const filterCategories = (category: string) => {
    dispatch(setCategory(category));
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
        <Tab
          label={category}
          key={category}
          className={classes.root}
          onClick={() => filterCategories(category)}
        />
      ))}
    </Tabs>
  );
};

export default Categories;
