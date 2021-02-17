import React from 'react';
import ListeFilm from '../components/ListeFilm';
import Navbar from '../components/Navbar';

class Home extends React.Component {

    render() {
        return (
            <>
                <Navbar />
                <ListeFilm />
            </>
        )
    }
}

export default Home