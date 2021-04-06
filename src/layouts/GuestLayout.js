import AlertContainer from "../components/Alert/AlertContainer"
import { GuestHeader } from "./Header/GuestHeader"
import { Container, Row, Col } from 'react-bootstrap'



export const GuestLayout = ({ children }) => {
    return (
        <main className="guest-page">
            <GuestHeader />
            <AlertContainer />
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} md={6}>
                        {children}
                    </Col>
                </Row>
            </Container>
        </main>
    )
}