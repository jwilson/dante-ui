import React from 'react';

class Inventory extends React.Component {
    render() {
        return (
            <div>
                <div className="row pr-3">
                    <div className="col-12">
                        <div className="form-group">
                            <input type="text" className="form-control text-danger" placeholder="Item filter (eg. 'swords' or 'health')" />
                        </div>
                    </div>
                </div>
                <div className="row border-bottom pr-3">
                    <div className="col d-flex justify-content-around fa-3x4">
                        <h4 className="d-inline-block text-danger"><i className="fad fa-asterisk"></i></h4>
                        <h4 className="d-inline-block text-secondary"><i className="fad fa-swords"></i></h4>
                        <h4 className="d-inline-block text-secondary"><i className="fad fa-helmet-battle"></i></h4>
                        <h4 className="d-inline-block text-secondary"><i className="fad fa-hand-holding-medical"></i></h4>
                        <h4 className="d-inline-block text-secondary"><i className="fad fa-star"></i></h4>
                    </div>
                </div>
                <div style={{ maxWidth: `790px` }}>
                    <div style={{ maxWidth: `790px` }}>
                        <div className="clear-fix pt-2 pb-1 pl-2" style={{ maxHeight:`400px`,minHeight: `250px`, overflowY: `auto` }}>
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                            <InventoryItem />
                        </div>
                    </div>
                </div>
                <div className="row border-top pt-4 pr-3" style={{ height: `200px` }}>
                    <div className="col-12">
                        <div className="row mb-4">
                            <div className="col-12 d-flex justify-content-around">
                                <div className="shadow m-1 bg-secondary float-left inventory-item"></div>
                                <div className="shadow m-1 bg-secondary float-left inventory-item"></div>
                                <div className="shadow m-1 bg-secondary float-left inventory-item"></div>
                                <div className="shadow m-1 bg-secondary float-left inventory-item"></div>
                                <div className="shadow m-1 bg-secondary float-left inventory-item"></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 d-flex justify-content-around">
                                <div className="shadow m-1 bg-info float-left inventory-item"></div>
                                <div className="shadow m-1 bg-info float-left inventory-item"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pt-3 pr-3">
                    <div className="col-12 d-flex justify-content-around">
                        <div className="d-inline-block">GOLD</div>
                        <div className="d-inline-block">SILVER</div>
                        <div className="d-inline-block">COPPER</div>
                    </div>
                    <div className="col-12 d-flex justify-content-around">
                        <div className="d-inline-block">DIAMONDS</div>
                        <div className="d-inline-block">RUBIES</div>
                        <div className="d-inline-block">EMERALDS</div>
                        <div className="d-inline-block">TURQUOISE</div>
                        <div className="d-inline-block">ONYX</div>
                    </div>
                </div>
            </div>
        );
    }
}

function InventoryItem() {
    return (
        <div className="shadow m-1 bg-default float-left inventory-item"></div>
    );
}

export default Inventory;
