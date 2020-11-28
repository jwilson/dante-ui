import { useDrop } from 'react-dnd';
import classnames from 'classnames';
import { InventoryItemTypes } from './ItemTypes';

function renderDisplayIcon(primary) {
    if (primary) {
        return window.gameUIState.primarySlot.icon;
    } 

    return window.gameUIState.secondarySlot.icon;
}

function hasSlot(primary) {
    if (primary) {
        return window.gameUIState.primarySlot !== null;
    }

    return window.gameUIState.secondarySlot !== null;
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
            'bg-default': true,
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
                {hasSlot(props.primary) ? <img src={renderDisplayIcon(props.primary)} width="55px" height="55px" /> : ''}
                {props.children}
        </div>
    );
}

export default WeaponItem;