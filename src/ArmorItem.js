import { useDrop } from 'react-dnd';
import classnames from 'classnames';
import { InventoryItemTypes } from './ItemTypes';

function renderDisplayName(armorType) {
    let item = window.gameUIState.getArmorSlot(armorType);

    return item !== null ? item.name : '';
}

function ArmorItem(props) {
    const [{isOver, canDrop }, drop] = useDrop({
        accept: InventoryItemTypes.ARMOR,
        canDrop: (item) => props.armorType === item.details.kindType,
        drop: (item) => { 
            window.gameUIState.setArmorSlot(props.armorType, item.details);
        },
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        })
    });

    return (
        <div className="text-center">
            <div className={classnames({
                shadow: true,
                'm-1': true,
                'bg-secondary': true,
                'inventory-item': true,
                // 'border-warning': highlighted,
                //'border-info': hovered
                'border-success': isOver && canDrop ? true : false,
                'bg-success':  isOver && canDrop ? true : false
            })} 
                ref={drop}
                style={{
                    opacity: isOver && canDrop ? 0.3 : 1.0
                }}>
                    <div style={{ fontSize: `0.7em` }}>{renderDisplayName(props.armorType)}</div>
                    {/* <i className={props.details ? props.details.icon : ``}></i> */}
                    {props.children}
            </div>
            <div>{props.armorType}</div>
        </div>
    );
}

export default ArmorItem;