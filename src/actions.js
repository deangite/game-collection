export const SET_GAMES = 'SET_GAMES';
export const ADD_GAME = 'ADD_GAME';
export const GAME_FETCHED = 'GAME_FETCHED';
export const GAME_UPDATED = 'GAME_UPDATED';

function handleResponse(response){
    if(response.ok){
        return response.json();
    }else{
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}

export const setGames = (games) => {
    return {
        type: SET_GAMES,
        games
    }
}

export const addGame = (game) => {
    return {
        type: ADD_GAME,
        game
    }
}

export const gameFetched = (game) => {
    return {
        type: GAME_FETCHED,
        game
    }
}

export const gameUpdated = (game) => {
    return {
        type: GAME_UPDATED,
        game
    }
}

export function fetchGames(){
    return dispatch => {
        fetch('/api/games')
            .then(res => res.json())
            .then(data => dispatch(setGames(data.games)));
    }
}

export function fetchGame(id){
    return dispatch => {
        fetch(`/api/games/${id}`).then(res => res.json())
            .then(data => dispatch(gameFetched(data.game)));
    }
}

export function updateGame(data){
    return dispatch => {
        return fetch(`/api/games/${data._id}`, {
            headers: new Headers( {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }),
            method: 'put',
            body: JSON.stringify(data),
        })
        .then(handleResponse)
        .then(data => dispatch( gameUpdated(data.game) ) );
    }
}

export function saveGame(data){
    return dispatch => {
        return fetch('/api/games', {
            headers: new Headers( {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }),
            method: 'post',
            body: JSON.stringify(data),
        })
        .then(handleResponse)
        .then(data => dispatch( addGame(data.game) ) );
    }
}