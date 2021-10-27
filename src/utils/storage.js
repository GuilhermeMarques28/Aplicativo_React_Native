import AsyncStorage from "@react-native-async-storage/async-storage";

// BUSCAR FILMES

export async function getMoviesSave(key) {
  const myMovies = await AsyncStorage.getItem(key);

  let moviesSave = JSON.parse(myMovies) || [];

  return moviesSave;
}

//Salvar fime novo
export async function saveMovie(key, newMovie) {
  let moviesStored = await getMoviesSave(key);

  const hasMovie = moviesStored.some((item) => item.id === newMovie.id);

  if (hasMovie) {
    console.log("Esse filme já existe");
    return;
  }
  moviesStored.push(newMovie);

  await AsyncStorage.setItem(key, JSON.stringify(moviesStored));
  console.log("Filme salvo com sucesso");
}

//DELETAR FILME
export async function deleteMovie(id) {
  let moviesStored = await getMoviesSave("@primereact");

  let myMovies = moviesStored.filter((item) => {
    return item.id !== id;
  });

  await AsyncStorage.setItem("@primereact", JSON.stringify(myMovies));
  console.log("FILME DELETADO COM SUCESSO");
  return myMovies;
}

//FILTRAR ALGUM FILME
export async function hasMovie(movie) {
  let moviesStored = await getMoviesSave("@primereact");

  const hasMovie = moviesStored.find((item) => item.id === movie.id);

  if (hasMovie) {
    return true;
  }
  return false;
}
