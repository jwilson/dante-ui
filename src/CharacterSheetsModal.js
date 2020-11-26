import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route, useRouteMatch, useLocation } from 'react-router-dom';

import Character from './Character';
import Skills from './Skills';
import Inventory from './Inventory';
import Companions from './Companions';

class CharacterSheetsModal extends React.Component {
    render() {
        return (
            <div className="GameMenuSideModal">
                <div className="modal left fade" id="left_modal_lg" style={{ display: `none` }}>
                    <div className="modal-dialog modal-lg">
                        <Router basename="/sheets">
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
                                                        variant="success"
                                                        to="/inventory"
                                                        label="Inventory" />
                                        </li>
                                        <li className="nav-item">
                                            <ActiveLink activeOnlyWhenExact={true}
                                                        variant="warning"
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
                                    {/* <h5 className="modal-title">Left Modal LG Title</h5> */}
                                    {/* <div className="close" data-dismiss="modal">
                                    <span>×</span>
                                    </div> */}
                                </div>
                                <div className="modal-body">
                                    <Switch>
                                        <Route exact path="/character">
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
                                    <div className="btn btn-secondary" data-dismiss="modal">Close</div>
                                    <div className="btn btn-primary">Update</div>
                                </div>
                            </div>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

function ActiveLink({ label, to, variant, activeOnlyWhenExact }) {
    let location = useLocation();
    let match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact
    });

    let rootMatch = location.pathname === '/' && to.toString() === location.pathname;

    let activeClass = " active bg-" + variant;

    return (
        <Link className={`p-1 mr-1 nav-link${(rootMatch ? rootMatch : match) ? activeClass : ""}`} to={to}>{label}</Link>
    );
}

export default CharacterSheetsModal;