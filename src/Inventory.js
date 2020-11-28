import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { observer } from 'mobx-react';
import InventoryItem from './InventoryItem';
import ArmorItem from './ArmorItem';
import WeaponItem from './WeaponItem';
import { ArmorItemTypes } from './ItemTypes';

const InventoryArea = observer(
    class InventoryArea extends React.Component {
        render() {
            return (
                <DndProvider backend={HTML5Backend}>
                    <div style={{ maxWidth: `790px` }}>
                        <div style={{ maxWidth: `790px` }}>
                            <div className="clear-fix pt-2 pb-1 pl-2" style={{ maxHeight:`400px`,minHeight: `350px`, overflowY: `auto` }}>
                                {window.gameUIState.inventory.map((v, i) => <InventoryItem itemType={v.itemType} details={v} key={i} />)}
                            </div>
                        </div>
                    </div>
                    <div className="row border-top pt-4 pr-3" style={{ height: `200px` }}>
                        <div className="col-12">
                            <div className="row mb-4">
                                <div className="col-12 d-flex justify-content-around">
                                    <ArmorItem armorType={ArmorItemTypes.HELMET} />
                                    <ArmorItem armorType={ArmorItemTypes.CHEST} />
                                    <ArmorItem armorType={ArmorItemTypes.GLOVES} />
                                    <ArmorItem armorType={ArmorItemTypes.PANTS} />
                                    <ArmorItem armorType={ArmorItemTypes.BOOTS} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 d-flex justify-content-around">
                                    <WeaponItem primary={true} />
                                    <WeaponItem primary={false} />
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
                </DndProvider>
            );
        }
    }
);

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
                <InventoryArea />
            </div>
        );
    }
}

export default Inventory;
