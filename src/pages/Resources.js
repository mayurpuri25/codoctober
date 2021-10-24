import React from 'react'
import "../assets/css/pages/resources.css"
import { Container,Col,Row } from 'react-bootstrap'
import ResourceForm from '../components/ResourceForm'

function Resources() {
    return (
        <>
            <div className="bkg2 header bg-gradient-info pl-5 pt-5">
                <Container className="resourceshead">
                    <Row>
                        <Col id="reshead"><span style={{fontSize:"60px"}}>JavaScript</span></Col>
                    </Row>
                    <Row>
                        <Col id="resdesc"><p>Now it's erg3 g 3fg3f4f34f 3g34g g4545h's erver erreg erg3 g3 erg3 g 3fg3f3 344f34f 3g34g g4545h 's erver erreg erg3 g3 erg3 g 3fg3f3 344f34f 3g34g g4545h 's erver erreg erg3 g3 erg3 g 3fg3f3 344f34f 3g34g g4545h 's erver erreg erg3 g3 erg3 g 3fg3f3 344f34f 3g34g g4545h 57u5brb rbnbeqth ererqert time to go ahead and deploy your project. All the best!!!</p></Col>
                    </Row>
                </Container>
            </div>
                <Container className="resourcecontainer my-5">
                    <ResourceForm />
                    <Row className="p-3">
                        <Col><h4>Available Resources</h4></Col>
                    </Row>
                </Container>
            
        </>
    )
}

export default Resources
