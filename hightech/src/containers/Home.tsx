import React from "react";
import { discoverFilms, Film, SearchResponse } from "../api";
import ListeFilm from "../components/ListeFilm";
import { Loading } from "../components/Loading";
import Navbar from "../components/Navbar";
import BottomBar from "../components/BottomBar";

interface State {
  films: Film[];
  loading: boolean;
}

interface Props {}

class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      films: [],
      loading: true,
    };
  }

  private page: number = 0;
  private totalPages: number = 0;

  private loadDiscoverFilms = async () => {
    if (this.page === 0) this.setState({ ...this.state, loading: true });
    let response = (await discoverFilms(this.page + 1)) as SearchResponse;
    this.page = response.page;
    this.totalPages = response.total_pages;
    console.log(
      "LOAD",
      response.page,
      response.results.map((e) => e.original_title)
    );
    this.setState({
      films: [...this.state.films, ...response.results],
      loading: false,
    });
  };

  componentDidMount() {
    this.loadDiscoverFilms();
  }

  render() {
    return (
      <>
        <Navbar />
        {this.state.loading ? (
          <Loading />
        ) : (
          <ListeFilm films={this.state.films} />
        )}
        <BottomBar />
      </>
    );
  }
}

export default Home;
