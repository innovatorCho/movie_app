import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading : true,
    movies : []
  };

  getMovies = async () => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
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
    return <div>{isLoading ? "Loding..." : "We are ready!!"}</div>;
  }
}

export default App;
