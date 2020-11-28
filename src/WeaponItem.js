import { useDrop } from 'react-dnd';
import classnames from 'classnames';
import { InventoryItemTypes } from './ItemTypes';

function WeaponItem(props) {
    const [{isOver }, drop] = useDrop({
        accept: InventoryItemTypes.WEAPON,
        canDrop: (item) => true,
        drop: (item) => { 
            if (props.primary) {
                window.gameUIState.primarySlot = item;
            } else {
                window.gameUIState.secondarySlot = item;
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
                {/* <i className={props.details.icon}></i> */}
            {props.children}
            {InventoryItemTypes.WEAPON}
        </div>
    );
}

export default WeaponItem;