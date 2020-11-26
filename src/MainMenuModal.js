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
                            <h5 className="modal-title">Full Screen Modal Title</h5>
                            <button type="button" className="close" data-dismiss="modal">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body d-flex align-items-center justify-content-center flex-column bg-dark">
                            <h2 className="my-3"><a className="text-light text-decoration-none" href="#1">Settings</a></h2>
                            <h2 className="my-3"><a className="text-light text-decoration-none" href="#4">Help</a></h2>
                            <h2 className="my-3"><a className="text-light text-decoration-none" href="#2">Return to Main Menu</a></h2>
                            <h2 className="my-3"><a className="text-light text-decoration-none" href="#2">Quit Game</a></h2>

                            {/* <h2 className="my-3"><a className="text-light text-decoration-none has-sub" href="#3" data-toggle="collapse" data-target="#categories">Products</a></h2>
                            <div className="collapse" id="categories">
                            <h4><a className="text-light text-decoration-none" href="#31">Category 1</a></h4>
                            <h4><a className="text-light text-decoration-none has-sub" href="#32" data-toggle="collapse" data-target="#subcategories">Category 2</a></h4>
                            <div className="collapse" id="subcategories">
                                <h5 className="ml-3 py-1"><a className="text-light text-decoration-none" href="#311">Subcategory 1</a></h5>
                                <h5 className="ml-3 py-1"><a className="text-light text-decoration-none" href="#322">Subcategory 2</a></h5>
                                <h5 className="ml-3 py-1"><a className="text-light text-decoration-none" href="#333">Subcategory 3</a></h5>
                            </div>
                            <h4><a className="text-light text-decoration-none" href="#33">Category 3</a></h4>
                            </div>
                            <h2 className="my-3"><a className="text-light text-decoration-none" href="#4">FAQ</a></h2>
                            <h2 className="my-3"><a className="text-light text-decoration-none" href="#5">Quit</a></h2> */}
                            <h2 className="close-modal display-2"><a className="text-light text-decoration-none" href="#0" data-dismiss="modal">&times;</a></h2>
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
