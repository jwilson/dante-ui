import React from 'react';
import { observer } from 'mobx-react';

const CharacterBars = observer(
    class CharacterBars extends React.Component {
        constructor() {
            super();
        }
        
        render() {
            return (
                <div className="CharacterBars pt-3">
                    <div className="p-1 pl-0">
                        <div className="progress">
                            <div className="progress-bar bg-success" 
                                 id="health-bar"
                                 style={{ width: `${window.gameUIState.characterStats.health}%` }}></div>
                        </div>
                    </div>
                    <div className="p-1 pl-0">
                        <div className="progress">
                            <div className="progress-bar bg-info" 
                                 id="energy-bar"
                                 style={{ width: `${window.gameUIState.characterStats.energy}%` }}></div>
                        </div>
                    </div>
                </div>
            );
        }
    }
);

export default CharacterBars;
