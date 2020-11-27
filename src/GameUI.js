import React from 'react';

import CharacterBars from './CharacterBars';
import Character from './Character';
import CharacterSheetsModal from './CharacterSheetsModal';
import MainMenuModal from './MainMenuModal';
import HotBar from './HotBar';
import { GameUIState } from './GameUIState';

class GameUI extends React.Component {
    constructor() {
        super();

        window.gameUIState = new GameUIState();
        
        window.UpdateHealthBar = function(amount)
        {
            window.gameUIState.characterStats.health = amount;
        };

        this.toggleGeneralUIBacking = this.toggleGeneralUIBacking.bind(this);
    }

    toggleGeneralUIBacking()
    {
        if (window.toggleGeneralUI !== undefined)
        {
            window.toggleGeneralUI();
        }
    }

    render1() {
        return (
            <div>
                <Character />
            </div>
        );
    }

    render() {
        return (
            <div className="GameUI">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-3 col-md-2">
                            <CharacterBars />
                        </div>
                    </div>
                    <div className="row fixed-bottom p-3">
                        <div className="d-flex justify-content-between vw-100">
                            <div className="d-flex ml-2">
                                <a className="btn btn-dark mt-2" 
                                     data-toggle="modal"
                                     data-target="#left_modal_lg" 
                                     onClick={this.toggleGeneralUIBacking}
                                     style={{ height: `38px` }} href="#!">CHARACTER</a>
                            </div>
                            <HotBar />
                            <div className="d-flex mr-2 mt-2">
                                <a className="btn btn-dark" 
                                     data-toggle="modal"
                                     data-target="#fullscreen_modal" 
                                     onClick={this.toggleGeneralUIBacking}
                                     style={{ height: `38px` }} href="#!">MENU</a>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <CharacterSheetsModal />
                <MainMenuModal />
            </div>
        );
    }
}

export default GameUI;
