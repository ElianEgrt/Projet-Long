const TOKEN: String = "db901b15ecb34557e221c042836a2359";

type Film = {
    popularity: number;
    id: number;
    video: boolean;
    vote_count: number;
	vote_average: number;
	title: string;
    release_date: string;
    original_language: string;
	original_title: string;
	poster_path: string;
	overview: string;
}

interface SearchResponse extends Object {
    page: number;
    results: Array<Film>;
    total_results: number;
    total_pages: number;
}

interface IdResponse extends Object {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: { id: number; name: string; poster_path: string; backdrop_path: string; };
    budget: number;
    genres: { id: number; name: string }[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string; 
    popularity: number;
    poster_path: string;
    production_companies: { id: number; logo_path: string; name: string; origin_country: string; }[];
    production_countries: { iso_3166_1: string; name: string; }[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: { iso_639_1: string; name: string; }[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

const getFilmsFromApiWithSearchedText = async (text: String, page: number) => {
    // let url = `https://api.themoviedb.org/3/search/550?api_key=${TOKEN}$language=fr&query=${text}`
    // let url = `https://api.themoviedb.org/3/search/movie?api_key=${TOKEN}$language=fr&query=${text}&include_adult=true`
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${TOKEN}&language=fr&query=${text}&page=${page}&include_adult=true`
    
    try {
        let response = await fetch(url, {

        })
        let responseJson = await response.json() as SearchResponse
        return responseJson
    } catch (error) {
        console.error(error);
    }
};

const getFilmsFromApi = async (id: number) => {
    let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${TOKEN}&language=fr`
    
    try {
        let response = await fetch(url)
        let responseJson = await response.json() as IdResponse
        return responseJson
    } catch (error) {
        console.error(error);
    }
};

const discoverFilms = async (page: number) => {
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${TOKEN}&language=fr&sort_by=popularity.desc&page=${page}`
    
    try {
        let response = await fetch(url)
        let responseJson = await response.json() as SearchResponse
        return responseJson
    } catch (error) {
        console.error(error);
    }
};

export {
    getFilmsFromApiWithSearchedText,
    getFilmsFromApi,
    discoverFilms
};
export type {
    SearchResponse,
    IdResponse,
    Film
};
