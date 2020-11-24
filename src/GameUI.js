import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CharacterBars from './CharacterBars';

function GameUI() {
    return (
        <div className="GameUI">
            <Container fluid>
                <Row>
                    <Col xs="2"><CharacterBars /></Col>
                </Row>
            </Container>
        </div>
    );
}

export default GameUI;
