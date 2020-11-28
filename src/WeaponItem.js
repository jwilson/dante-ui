import { useDrop } from 'react-dnd';
import classnames from 'classnames';
import { InventoryItemTypes } from './ItemTypes';

function renderDisplayName(primary) {
    if (primary && window.gameUIState.primarySlot !== null) {
        return window.gameUIState.primarySlot.name;
    } else if (!primary && window.gameUIState.secondarySlot !== null){
        return window.gameUIState.secondarySlot.name;
    }

    return '';
}

function WeaponItem(props) {
    const [{isOver }, drop] = useDrop({
        accept: InventoryItemTypes.WEAPON,
        canDrop: (item) => true,
        drop: (item) => { 
            if (props.primary) {
                window.gameUIState.primarySlot = item.details;
            } else {
                window.gameUIState.secondarySlot = item.details;
            }
         },
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        })
    });

    return (
        <div className={classnames({
            shadow: true,
            'm-1': true,
            'bg-info': true,
            'd-inline-block': true,
            'inventory-item': true,
            // 'border-warning': highlighted,
            //'border-info': hovered
            'border-success': isOver ? true : false,
            'bg-success':  isOver ? true : false
        })} 
            ref={drop}
            style={{
                opacity: isOver ? 0.3 : 1.0
            }}>
                <div style={{ fontSize: `0.7em` }}>{renderDisplayName(props.primary)}</div>
                {/* <i className={props.details.icon}></i> */}
                {props.children}
        </div>
    );
}

export default WeaponItem;