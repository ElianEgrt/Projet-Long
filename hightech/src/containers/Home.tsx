import React from "react";
import { recentFilms, popularFilms, Film, SearchResponse } from "../api";
import { Loading } from "../components/Loading";
import BottomBar from "../components/BottomBar";
import FilmCategory from "../components/FilmCategory";

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

  private loadFilms = async () => {
    if (this.page === 0) this.setState({ ...this.state, loading: true });
    let response = (await popularFilms(this.page + 1)) as SearchResponse;
    this.page = response.page;
    this.totalPages = response.total_pages;
    this.setState({
      films: [...this.state.films, ...response.results],
      loading: false,
    });
  };

  componentDidMount() {
    this.loadFilms();
  }

  render() {
    return (
      <div>
        {this.state.loading ? (
          <Loading />
        ) : (
          <div>
            <FilmCategory category={"Récents"} films={this.state.films} />
            <FilmCategory category={"Populaires"} films={this.state.films} />
            <FilmCategory category={"Découvrir"} films={this.state.films} />
          </div>
        )}
      </div>
    );
  }
}

export default Home;
