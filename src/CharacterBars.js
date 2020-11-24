import ProgressBar from 'react-bootstrap/ProgressBar';

function CharacterBars() {
    return (
        <div className="pt-3">
            <div className="p-1 pl-0"><ProgressBar variant="success" now={100} /></div>
            <div className="p-1 pl-0"><ProgressBar variant="info" now={100} /></div>
        </div>
    );
}

export default CharacterBars;
