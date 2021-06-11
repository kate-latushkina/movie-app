import GENRE from "../../variables/genre";

const getGenreName = (genre_ids: number[]) => {
  return genre_ids.map((genre: number) => {
    return GENRE.filter(value => value.id === genre)
      .map(genreName => {
        return genreName.name;
      })
      .join();
  });
};

export default getGenreName;
