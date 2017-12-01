import React from 'react';
import PropTypes from 'prop-types';
import GameCard from './GameCard';

const GamesList = ({games}) => {
    const emptyMessage = (
        <p>There are no games yet in your collection.</p>
    );

    const gamesList = (
        <div className="ui four cards">
            { games.map(game => <GameCard key={game._id} game={game} />) }
        </div>
    );

    return (
        <div>
            {games.length === 0 ? emptyMessage : gamesList}
        </div>
    );
}   

export default GamesList;

GamesList.propTypes = {
    games: PropTypes.array.isRequired
}