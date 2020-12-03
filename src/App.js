import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
  state = {
    isLoading : true,
    movies : []
  };

  getMovies = async () => {
    const {data: { data : {movies} } } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    //console.log(movies);
    this.setState({movies, isLoading : false});
  }

  getMovieList() {
    const { movies } = this.state;
    console.log(movies);
    return (
      movies.map(movies => (
        <Movie 
          id={movies.id} 
          year={movies.year}
          summary={movies.summary}
          title={movies.title}
          poster={movies.poster}
          />
        ))
    );
  }

  componentDidMount() {
    this.getMovies();
    /*
    setTimeout(() => {
      this.setState({isLoading : false});  
    }, 5000);
    */
  }

  render() {
    const { isLoading } = this.state;
    return <div>
    {
      isLoading ? "Loding..." : this.getMovieList()
    }
    </div>;
  }
}

export default App;
