import React from 'react';
// import { observer } from 'mobx-react';

import CharacterBars from './CharacterBars';
import { GameUIState } from './GameUIState';

class GameUI extends React.Component {
    constructor() {
        super();

        window.gameUIState = new GameUIState();
        
        window.UpdateHealthBar = function(amount)
        {
            window.gameUIState.characterStats.health = amount;
        };
    }

    render() {
        return (
            <div className="GameUI">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-2">
                            <CharacterBars />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// const GameUI = observer(
    
// );

export default GameUI;
