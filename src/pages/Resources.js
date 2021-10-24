import React from 'react'
import "../assets/css/pages/resources.css"
import { Container,Col,Row,Button } from 'react-bootstrap'
import {useSelector} from "react-redux"
import {selectResources} from "../Redux/Slices/moduleSlice"
import ResourceForm from '../components/ResourceForm'

function Resources() {
    const Resources = useSelector(selectResources);
    // const Resources = [
    //         {
    //           id: "1",
    //           name: "gfg",
    //           url:"https://www.javatpoint.com/git-merge-and-merge-conflict"
    //         },
    //         {
    //             id: "2",
    //             name: "youtube - CWH",
    //             url:"https://www.javatpoint.com/git-merge-and-merge-conflict"            },
    //         {
    //             id: "3",
    //             name: "blogs",
    //             url:"https://www.javatpoint.com/git-merge-and-merge-conflict"            },
    //         {
    //             id: "4",
    //             name: "CodeAcademy",
    //             url:"https://www.javatpoint.com/git-merge-and-merge-conflict"            },
    //       ];

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
                        <Col><h4>Added Resources</h4></Col>
                    </Row>
                    <Row className="p-3" sm={1} md={3} lg={4} xl={5}>
                        {
                            Resources.map(item => {
                                return(
                                    <Row className="redirectrow p-2 m-1" key={item.id}>
                                        <Col>{item.name}</Col>
                                        <Col className="redirectbtncol text-end"><Button className="redirectbtn" href={item.url}>Go</Button></Col>
                                    </Row>
                                );
                            })
                        }
                    </Row>
                </Container>
            
        </>
    )
}

export default Resources
