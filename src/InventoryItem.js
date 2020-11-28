import React from 'react';
import classnames from 'classnames';
import { useDrag } from 'react-dnd';

function InventoryItem(props) {
    const [{isDragging}, drag] = useDrag({
        item: { type: props.itemType, details: props.details },
        collect: monitor => ({
            //hovered: !!monitor.isOver(),
            isDragging: !!monitor.isDragging()
        })
    });

    return (
        <div className={classnames({
            shadow: true,
            'm-1': true,
            'bg-default': true,
            'float-left': true,
            'inventory-item': true,
            // 'border-warning': highlighted,
            //'border-info': hovered
            'border-success': isDragging ? true : false
        })} 
            ref={drag}
            style={{
                opacity: isDragging ? 0.5 : 1,
                cursor: 'move'
            }}>
                <i className={props.details.icon}></i><br />
                <div style={{ fontSize: `0.7em` }}>{props.details.name}</div>
                {props.children}
        </div>
    );
}

export default InventoryItem;
