import React from 'react';
import { connect } from 'react-redux';
import { saveGame, fetchGame, updateGame } from './actions';
import { Redirect } from "react-router-dom";
import GameForm from './GameForm';

class GameFormPage extends React.Component{
    state = {
        redirect: false
    }

    componentDidMount = () => {
        if(this.props.match.params._id){
            this.props.fetchGame(this.props.match.params._id);
        }
    }

    saveGame = ({_id, title, cover}) => {
        if(_id){
                this.props.updateGame({_id, title, cover}).then(
                    (response) => {this.setState({redirect: true})},
                )
            }else{
                this.props.saveGame({title, cover}).then(
                    (response) => {this.setState({redirect: true})},
                )
            }
    }

    render(){
       return (
           <div>
               {
                   this.state.redirect ? 
                   <Redirect to="/games" /> :
                   <GameForm game={this.props.game} saveGame={this.props.saveGame} />
               }
           </div>
       );
    }
}

const mapStateToProps = (state, props) => {
    if(props.match.params._id){
        return {
            game: state.games.find(item => item._id === props.match.params._id)
        }
    }

    return {game: null};
}

export default connect(mapStateToProps, { saveGame, fetchGame, updateGame } )(GameFormPage);