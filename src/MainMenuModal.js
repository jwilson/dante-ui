import React from 'react';

import 'jquery/dist/jquery.min.js';
import $ from 'jquery';

class MainMenuModal extends React.Component {
    componentDidMount() {
        $('#fullscreen_modal').on('hide.bs.modal', function() {
            if (window.toggleGeneralUI !== undefined)
            {
                window.toggleGeneralUI();
            }
        });
    }

    render() {
        return (
            <div className="modal full fade" id="fullscreen_modal">
                <div className="modal-dialog" style={{ opacity: 0.75 }}>
                    <div className="modal-content">
                        <div className="modal-header d-none">
                            {/* <button type="button" className="close" data-dismiss="modal">
                            <span aria-hidden="true">&times;</span>
                            </button> */}
                        </div>
                        <div className="modal-body d-flex align-items-center justify-content-center flex-column bg-dark">
                            <h2 className="my-3"><a className="text-light text-decoration-none" href="/settings">Settings</a></h2>
                            <h2 className="my-3"><a className="text-light text-decoration-none" href="/help">Help</a></h2>
                            <h2 className="my-3"><a className="text-light text-decoration-none" href="#!">Main Menu</a></h2>
                            <h2 className="my-3"><a className="text-light text-decoration-none" href="#!">Quit Game</a></h2>
                            <h2 className="my-3"><a className="text-light text-decoration-none" data-dismiss="modal" href="#!">Return to Game</a></h2>
                        </div>
                        <div className="modal-footer modal-footer-fixed d-none">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainMenuModal;
