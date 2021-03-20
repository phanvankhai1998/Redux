import React from 'react';
import { data } from '../data';
import Navbar from './Navbar';
import MoviesCard from './MoviesCard';

class App extends React.Component {
    componentDidMount() {
        const { store } = this.props;
        store.subscribe(() => {
            console.log('UPDATED');
            this.forceUpdate();
        });
        //make api call
        //dispatch action
        // this.props.store.dispatch({
        store.dispatch({
            type: 'ADD_MOVIES',
            movies: data
        });

        console.log('STATE', this.props.store.getState());
    }

    render() {
        const movies = this.props.store.getState();
        console.log('Render')
        return (
            <div className="App">
                <Navbar />
                <div className="main">
                    <div className="tabs">
                        <div className="tab">Movies</div>
                        <div className="tab">Favorites</div>
                    </div>

                    <div className="list">
                        {
                            movies.map((movie, index) => {
                                return (
                                    <MoviesCard movie={movie} key={`movies-${index}`} />
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }

}

export default App;
