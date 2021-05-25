import React, { Fragment } from 'react'
import { Badge, Button, Card, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';

import styles from "./profilelayout.module.css"

import photo from "../pietra-schwarzler-FqdfVIdgR98-unsplash.jpg";
import { Link } from 'react-router-dom';
import { FiEdit ,FiLogOut } from "react-icons/fi";
import { HiOutlineCamera } from "react-icons/hi";




const ProfileLayout = () => {
    return (
        <div className="container">
            <Row>
                <Col md={3}>
                <Card style={{ width: '19rem',height:"33rem" }} className={styles.cardprofile} >
                <div className={styles.imgprofile}>
                    <Card.Img variant="top" style={{margin:"0px", borderRadius:"0%", width:"100%"}} src={photo} />
                    
                                <div className={styles.editimg} >
                                    <HiOutlineCamera className={styles.iconimg} />
                            {/* <input type="file" id="file" accept="image/*"></input>
                            <label for="file"> choose a photo</label> */}
                            </div>
                    </div>
                    <Card.Body className="text-center">
                        <Card.Title><strong>Rania hossny</strong></Card.Title>
                        <Card.Title style={{color:"#65676b"}}> <strong>Front-end developer</strong></Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>
                            <Row style={{justifyContent:"space-around"}}>Teams <Badge style={{height:"max-content"}} pill  variant="primary">100</Badge></Row>
                            </ListGroupItem>
                            <ListGroupItem>
                            <Row style={{justifyContent:"space-around"}}>Owned <Badge style={{height:"max-content"}} pill  variant="primary">50</Badge></Row>
                            </ListGroupItem>
                            <ListGroupItem>
                            <Row style={{justifyContent:"space-around"}}>Friends <Badge style={{height:"max-content"}} pill  variant="primary">500</Badge></Row>
                            </ListGroupItem>
                            
                        
                    </ListGroup>
                    <Card.Body>
                        <Row style={{justifyContent:"space-around"}}>
                        <Link type="button" className="btn  btn-secondary"><FiEdit/> Edit Profile</Link>
                        <Link type="button" className="btn  btn-danger"><FiLogOut/> Logout</Link>
                        </Row>
                    </Card.Body>
                </Card>
                </Col>

                <Col md={8} style={{marginLeft:"80px"}} >
                <Card className={styles.cardprofile} style={{height:"33rem"}} >
               <Card.Body style={{padding:"26px", marginTop:"20px"}} >
                    <div className={styles.profilecontent}>
                        <h4><strong>About Me</strong></h4>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                    <Row style={{marginTop:"40px"}}>
                        <Col md={6}>
                            <h4><strong>Contact Me</strong></h4>
                           
                            <strong>Phone :</strong>
                            <strong><p>+62 857 123 4567</p></strong>
                        
                       
                            <strong>Email :</strong>
                            <strong><p>first.last@example.com</p></strong>
                       
                       
                            <strong>Address :</strong>
                            <strong><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p> </strong>
                            
                        </Col>
                        <Col style={{marginRight:"30px"}} md={5}>
                            <h4><strong>MY SKILLS </strong></h4>
                            <strong><p>UI Design</p></strong>
                            <strong><p>Clean and Modern Web Design</p></strong>
                            <strong><p>PHP and MySQL Programming</p></strong>
                            <strong><p>Vector Design</p></strong>
                            
                        </Col>
                    </Row>
                    </div>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
 
            
        </div>
    )
}

export default ProfileLayout


