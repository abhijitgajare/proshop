<<<<<<< HEAD
// footer component
=======
// footer component
>>>>>>> 914ec08dbd76f977be63ea4fd6a6a7a464601aa4

import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {

    const currentYear = new Date().getFullYear()

    return (
        <footer>
            <Container>
                <Row>
                    <Col className="text-center py-3">
                        <p>ProShop &copy; {currentYear}</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;
