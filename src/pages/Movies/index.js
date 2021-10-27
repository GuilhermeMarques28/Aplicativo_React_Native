import React, { useEffect, useState } from "react";
import { Container, ListMovies } from "./styled";
import Header from "../../components/Header";
import { getMoviesSave, deleteMovie } from "../../utils/storage";
import FavoriteMovies from "../../components/FavoriteMovies";
import { useNavigation, useIsFocused } from "@react-navigation/native";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {
    let isActive = true;

    async function getFavoriteMovies() {
      const result = await getMoviesSave("@primereact");

      if (isActive) {
        setMovies(result);
      }
    }

    if (isActive) {
      getFavoriteMovies();
    }

    return () => {
      isActive = false;
    };
  }, [isFocused]);

  async function handleDelete(id) {
    const result = await deleteMovie(id);
    setMovies(result);
  }

  function navigateDetailsPage(item) {
    navigation.navigate("Detail", { id: item.id });
  }

  return (
    <Container>
      <Header title="Meus filmes" />

      <ListMovies
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        data={movies}
        renderItem={({ item }) => (
          <FavoriteMovies
            data={item}
            deleteMovie={handleDelete}
            navigatePage={() => navigateDetailsPage(item)}
          />
        )}
      />
    </Container>
  );
}
