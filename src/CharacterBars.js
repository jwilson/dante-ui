import React from 'react';
import { observer } from 'mobx-react';

const CharacterBars = observer(
    class CharacterBars extends React.Component {
        constructor() {
            super();
        }
        
        render() {
            return (
                <div className="pt-3">
                    <div className="p-1 pl-0">
                        <div className="progress">
                            <div className="progress-bar bg-success" 
                                 id="health-bar"
                                 role="progressbar"
                                 style={{ width: `${window.gameUIState.characterStats.health}%` }}
                                 aria-valuenow="0"
                                 aria-valuemin="0"
                                 aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="p-1 pl-0">
                        <div className="progress">
                            <div className="progress-bar bg-info" 
                                 id="energy-bar"
                                 role="progressbar"
                                 style={{ width: `${window.gameUIState.characterStats.energy}%` }}
                                 aria-valuenow="0"
                                 aria-valuemin="0"
                                 aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            );
        }
    }
);

export default CharacterBars;
