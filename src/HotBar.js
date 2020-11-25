import React from 'react';
import { observer } from 'mobx-react';

const HotBar = observer(
    class HotBar extends React.Component {
        render() {
            return (
                <div className="HotBar d-flex">
                    <div className="btn btn-danger m-2">Q</div>
                    <div className="btn btn-success m-2">W</div>
                    <div className="btn btn-warning m-2">E</div>
                    <div className="btn btn-info m-2">R</div>
                    <div className="btn btn-dark m-2">T</div>
                    <div className="btn btn-secondary m-2">Y</div>
                </div>
            );
        }
    }
);

export default HotBar;
