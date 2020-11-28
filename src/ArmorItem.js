import { useDrop } from 'react-dnd';
import classnames from 'classnames';
import { InventoryItemTypes } from './ItemTypes';

function renderDisplayName(armorType) {
    if (window.gameUIState.armorSlots[armorType] !== null) {
        return window.gameUIState.armorSlots[armorType].kindType;
    }
    
    return '';
}

function ArmorItem(props) {
    const [{isOver, canDrop }, drop] = useDrop({
        accept: InventoryItemTypes.ARMOR,
        canDrop: (item) => props.armorType === item.details.kindType,
        drop: (item) => { 
            window.gameUIState.armorSlots[props.armorType] = item.details;
         },
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        })
    });

    return (
        <div className={classnames({
            shadow: true,
            'm-1': true,
            'bg-secondary': true,
            'd-inline-block': true,
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
                {renderDisplayName(props.armorType)}
                {/* <i className={props.details ? props.details.icon : ``}></i> */}
                {props.children}
        </div>
    );
}

export default ArmorItem;