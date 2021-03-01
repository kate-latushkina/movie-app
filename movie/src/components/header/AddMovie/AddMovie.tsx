import { Button } from "@material-ui/core";
import './AddMovie.scss';

const AddMovie: React.FC = () => {
  return (
    <Button variant="outlined" color="secondary" className="add-movie-button">
      + Add movie
    </Button>
  );
};

export default AddMovie;