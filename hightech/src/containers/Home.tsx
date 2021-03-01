import React from "react";
import { recentFilms, popularFilms, Film, SearchResponse } from "../api";
import FilmCategory from "../components/FilmCategory";

interface State {
  popularFilms: Film[];
  allPopularFilms: Film[];
  recentFilms: Film[];
  loadingPopular: boolean;
  loadingAllPopular: boolean;
  loadingRecent: boolean;
}

interface Props {}

class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      popularFilms: [],
      allPopularFilms: [],
      recentFilms: [],
      loadingPopular: true,
      loadingAllPopular: true,
      loadingRecent: true,
    };
  }

  private popularPage: number = 0;
  private recentPage: number = 0;
  private totalPopularPages: number = 0;
  private totalRecentPage: number = 0;

  private loadPopularFilms = async () => {
    if (this.popularPage === 0)
      this.setState({ ...this.state, loadingPopular: true });
    let popularResponse = (await popularFilms(
      this.popularPage + 1
    )) as SearchResponse;
    this.popularPage = popularResponse.page;
    this.totalPopularPages = popularResponse.total_pages;
    setTimeout(() => {
      this.setState({
        popularFilms: [...this.state.popularFilms, ...popularResponse.results],
        loadingPopular: false,
      });
    }, 1000);
  };

  private loadAllPopularFilms = async () => {
    this.setState({ ...this.state, loadingAllPopular: true });

    let currentPage: number = 1;
    let allPopularResponse = (await popularFilms(
      currentPage
    )) as SearchResponse;
    let allPopular: Film[] = allPopularResponse.results;
    this.totalPopularPages = Math.floor(allPopularResponse.total_pages / 100);

    while (this.totalPopularPages !== currentPage) {
      currentPage = currentPage + 1;
      let allPopularResponse = (await popularFilms(
        currentPage
      )) as SearchResponse;
      allPopular = [...allPopular, ...allPopularResponse.results];
    }

    this.setState({
      allPopularFilms: allPopular,
      loadingAllPopular: false,
    });
  };

  private loadRecentFilms = async () => {
    if (this.recentPage === 0)
      this.setState({ ...this.state, loadingRecent: true });
    let recentResponse = (await recentFilms(
      this.recentPage + 1
    )) as SearchResponse;
    this.recentPage = recentResponse.page;
    this.totalRecentPage = recentResponse.total_pages;
    setTimeout(() => {
      this.setState({
        recentFilms: [...this.state.recentFilms, ...recentResponse.results],
        loadingRecent: false,
      });
    }, 500);
  };

  componentDidMount() {
    this.loadPopularFilms();
    this.loadRecentFilms();
    this.loadAllPopularFilms();
  }

  render() {
    return (
      <div>
        <FilmCategory
          category={"Récents"}
          type={"slider"}
          films={this.state.recentFilms}
          loading={this.state.loadingRecent}
        />
        <FilmCategory
          category={"Populaires"}
          type={"slider"}
          films={this.state.popularFilms}
          loading={this.state.loadingPopular}
        />
        <FilmCategory
          category={"Découvrir"}
          type={"list"}
          films={this.state.allPopularFilms}
          loading={this.state.loadingAllPopular}
        />
      </div>
    );
  }
}

export default Home;
