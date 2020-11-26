import React from 'react';
import { observer } from 'mobx-react';

import 'jquery/dist/jquery.min.js';
// import $ from 'jquery';

const CharacterBars = observer(
    class CharacterBars extends React.Component {
        constructor() {
            super();
        }

        // componentDidMount() {
        //     $('#left_modal_lg').on('hide.bs.modal', function() {
        //         if (window.toggleGeneralUI !== undefined)
        //         {
        //             window.toggleGeneralUI();
        //         }
        //     });
        // }
        
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
