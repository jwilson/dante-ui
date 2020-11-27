import React from 'react';

class Character extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col">
                        <h4>Neilson <small class="text-muted">Lvl. 1</small></h4>
                    </div>
                </div>
                <table className="table table-sm table-bordered">
                    <tr className="d-flex">
                        <th className="col-2 text-info">Health</th>
                        <td className="col">0</td>
                    </tr>
                    <tr className="d-flex">
                        <th className="col-2 text-info">Energy</th>
                        <td className="col">0</td>
                    </tr>
                    <tr className="d-flex">
                        <th className="col-2 text-info">Exp.</th>
                        <td className="col">
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" style={{ width: `37%` }}></div>
                            </div>
                        </td>
                    </tr>
                </table>
                <h6>Combat</h6>
                <table className="table table-sm table-bordered">
                    <tr className="d-flex">
                        <th className="col-2 text-info">Atk</th>
                        <td className="col-2">45.0</td>
                        <td className="col-2 text-right">+8.3</td>
                        <td className="col-2">16.7+</td>
                        <td className="col-2">39.0</td>
                        <th className="col-2 text-info">Res</th>
                    </tr>
                    <ColourRow atk={1.5} res={2.0} color='red' />
                    <ColourRow atk={1.9} res={2.0} color='blue' />
                    <ColourRow atk={1.0} res={3.0} color='green' />
                    <ColourRow atk={3.0} res={1.7} color='white' />
                    <ColourRow atk={0.9} res={8.0} color='#6c757d' />
                </table>
                <h6>Passive</h6>
                <table className="table table-sm table-bordered">
                    <tr>
                        <th className="text-info">Stamina</th>
                        <td>17.4</td>
                    </tr>
                    <tr>
                        <th className="text-info">Intellect</th>
                        <td>22.9</td>
                    </tr>
                    <tr>
                        <th className="text-info">Endurance</th>
                        <td>11.0</td>
                    </tr>
                </table>
                <h6>Statuses</h6>
                <table className="table table-sm table-bordered">
                    <tr className="d-flex">
                        <td>a</td>
                        <td>b</td>
                        <td>c</td>
                        <td>d</td>
                        <td>e</td>
                    </tr>
                </table>
            </div>
        );
    }
}

function ColourRow({color, atk, res}) {
    return (
        <tr className="d-flex">
            <td className="col-2" style={{ backgroundColor: `${color}`  }}></td>
            <td className="col-4 text-right">{atk}</td>
            <td className="col-4">{res}</td>
            <td className="col-2" style={{ backgroundColor: `${color}` }}></td>
        </tr>
    );
}

export default Character;
