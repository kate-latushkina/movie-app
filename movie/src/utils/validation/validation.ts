import * as Yup from "yup";

const validationModal = Yup.object().shape({
  title: Yup.string()
    .max(70, "Title should be of maximum 70 characters length")
    .required("Title is required"),
  genre: Yup.string().required("Choose movie genre"),
  movieUrl: Yup.string().required("Movie URL is required"),
  overview: Yup.string()
    .min(15, "Overview should be of minimum 15 characters length")
    .max(70, "Overview should be of maximum 70 characters length")
    .required("Overview is required"),
});

export default validationModal;
