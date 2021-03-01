import React from "react";
import { recentFilms, popularFilms, Film, SearchResponse } from "../api";
import { Loading } from "../components/Loading";
import BottomBar from "../components/BottomBar";
import FilmCategory from "../components/FilmCategory";

interface State {
  popularFilms: Film[];
  recentFilms: Film[];
  loading: boolean;
}

interface Props {}

class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      popularFilms: [],
      recentFilms: [],
      loading: true,
    };
  }

  private popularPage: number = 0;
  private recentPage: number = 0;
  private totalPopularPages: number = 0;
  private totalRecentPage: number = 0;

  private loadFilms = async () => {
    if (this.popularPage === 0 || this.recentPage === 0)
      this.setState({ ...this.state, loading: true });
    let popularResponse = (await popularFilms(
      this.popularPage + 1
    )) as SearchResponse;
    let recentResponse = (await recentFilms(
      this.recentPage + 1
    )) as SearchResponse;
    this.popularPage = popularResponse.page;
    this.recentPage = recentResponse.page;
    this.totalPopularPages = popularResponse.total_pages;
    this.totalRecentPage = recentResponse.total_pages;
    this.setState({
      recentFilms: [...this.state.recentFilms, ...recentResponse.results],
      popularFilms: [...this.state.popularFilms, ...popularResponse.results],
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
            <FilmCategory
              category={"Récents"}
              type={"slider"}
              films={this.state.recentFilms}
            />
            <FilmCategory
              category={"Populaires"}
              type={"slider"}
              films={this.state.popularFilms}
            />
            <FilmCategory
              category={"Découvrir"}
              type={"list"}
              films={this.state.popularFilms}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Home;
