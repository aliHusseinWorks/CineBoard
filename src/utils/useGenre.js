// concatenation of selected genres ids (ex: "35,80,10749")
const useGenre = (value) => {
  if (value?.length === 0) return "";
  const GenreIds = value?.map((g) => g.id);
  return GenreIds.join(",");
};

export default useGenre;
