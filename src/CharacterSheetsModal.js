import React from 'react';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';

import Character from './Character';
import Skills from './Skills';
import Inventory from './Inventory';
import Companions from './Companions';
import ActiveLink from './ActiveLink';

import 'jquery/dist/jquery.min.js';
import $ from 'jquery';

class CharacterSheetsModal extends React.Component {
    componentDidMount() {
        $('#left_modal_lg').on('hide.bs.modal', function() {
            if (window.toggleGeneralUI !== undefined)
            {
                window.toggleGeneralUI();
            }
        });
    }

    render() {
        return (
            <div className="GameMenuSideModal">
                <div className="modal left fade" id="left_modal_lg" style={{ display: `none` }}>
                    <div className="modal-dialog modal-lg">
                        <Router>
                            <div className="modal-content">
                                <div className="modal-header">
                                    <ul className="nav nav-pills nav-fill">
                                        <li className="nav-item">
                                            <ActiveLink activeOnlyWhenExact={true}
                                                        variant="info"
                                                        to="/character"
                                                        label="Character" />
                                            
                                        </li>
                                        <li className="nav-item">
                                            <ActiveLink activeOnlyWhenExact={true}
                                                        variant="danger"
                                                        to="/inventory"
                                                        label="Inventory" />
                                        </li>
                                        <li className="nav-item">
                                            <ActiveLink activeOnlyWhenExact={true}
                                                        variant="primary"
                                                        to="/skills"
                                                        label="Skills" />
                                        </li>
                                        <li className="nav-item">
                                            <ActiveLink activeOnlyWhenExact={true}
                                                        variant="secondary"
                                                        to="/companions"
                                                        label="Companions" />
                                        </li>
                                    </ul>
                                    {/* <div className="close" data-dismiss="modal">
                                    <span>×</span>
                                    </div> */}
                                </div>
                                <div className="modal-body">
                                    <Switch>
                                        <Route exact path={["/character", "/index.html", "/"]}>
                                            <Character />
                                        </Route>
                                        <Route exact path="/inventory">
                                            <Inventory />
                                        </Route>
                                        <Route exact path="/skills">
                                            <Skills />
                                        </Route>
                                        <Route exact path="/companions">
                                            <Companions />
                                        </Route>
                                    </Switch>
                                </div>
                                <div className="modal-footer modal-footer-fixed vw-100 clear-fix">
                                    <div className="btn btn-warning" data-dismiss="modal">Close</div>
                                    <div className="btn btn-success">Apply Changes</div>
                                </div>
                            </div>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

export default CharacterSheetsModal;