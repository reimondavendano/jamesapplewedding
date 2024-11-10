import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import james from '../assets/images/nuptials/james.jpg';
import apple from '../assets/images/nuptials/apple.jpg';
import ivan from '../assets/images/nuptials/ivan.jpg';
import womanman from '../assets/images/nuptials/womanman.jpg';
import man from '../assets/images/nuptials/man.jpg';
import woman from '../assets/images/nuptials/woman.png';
import mooon from '../assets/images/nuptials/mooon.jpg';
import jaybee from '../assets/images/nuptials/jaybee.jpg';


const weddingRoles = [
    {
        role: "Bride & Groom",
        members: [
            { name: "Angellie Pier I. Cruz.", image: apple, role: "Bride" },
            { name: "James Eduard Caluag.", image: james, role: "Groom" }
        ]
    },
    {
        role: "Parents",
        members: [
            { name: "Ms. Divina P. Idalo", image: woman, role: "Mother of the Bride" },
            { name: "Mrs. Bella Z. Caluag", image: woman, role: "Mother of the Groom" },
            { name: "Mr. Eduardo B. Caluag, Sr.", image: man, role: "Father of the Groom" }
        ]
    },
    {
        role: "Priest",
        members: [
          { name: "Rev. Fr. Edwin Soliva", image: man, role: "Officiating Priest" },
        ]
    },
    {
        role: "Principal Sponsors",
        members: [
            { name: "Ret. 1st Sgt. Romeo Ganituen", image: man, role: "Male Sponsor", gender: "male" },
            { name: "Mrs. Paz Irene Ganituen", image: woman, role: "Female Sponsor", gender: "female" },
            { name: "Atty. Carlo Jollete S. Fajardo", image: man, role: "Male Sponsor", gender: "male" },
            { name: "Dra. Vita Datoon", image: woman, role: "Female Sponsor", gender: "female" },
            { name: "Mr. Philip T. San Luis", image: man, role: "Male Sponsor", gender: "male" },
            { name: "Dra. Pauline S. Lecaroz", image: woman, role: "Female Sponsor", gender: "female" },
            { name: "Mr. Paul Ryan V. Flores", image: man, role: "Male Sponsor", gender: "male" },
            { name: "Dra. Abygail Recio", image: woman, role: "Female Sponsor", gender: "female" },
            { name: "Mr. Jun Ilarde", image: man, role: "Male Sponsor", gender: "male" },
            { name: "Dra. Rona Austria", image: woman, role: "Female Sponsor", gender: "female" },
            { name: "Mr. Rosario Catahan", image: man, role: "Male Sponsor", gender: "male" },
            { name: "Ms. Zeny Velasco", image: woman, role: "Female Sponsor", gender: "female" },
            { name: "Mr. Joselito B. Caluag", image: man, role: "Male Sponsor", gender: "male" },
            { name: "Mrs. Lou Caluag", image: woman, role: "Female Sponsor", gender: "female" },
            { name: "Mr. Eric Tua", image: man, role: "Male Sponsor", gender: "male" },
            { name: "Mrs. Divine Tua", image: woman, role: "Female Sponsor", gender: "female" },
            { name: "Mr. Roberto M. Natanauan", image: man, role: "Male Sponsor", gender: "male" },
            { name: "Ms. Ma Fe V. Zoleta", image: woman, role: "Female Sponsor", gender: "female" },
            { name: "Dra. Susan P. Sanchez", image: woman, role: "Female Sponsor", gender: "female" },
            { name: "Mrs Dinia I. Reyes", image: woman, role: "Female Sponsor", gender: "female" },
        ]
    },
    {
        role: "1 BestMen 1 Maid of Honor",
        members: [
            { name: "Mr. Ivan Jovi S. Macapal", image: ivan, role: "Bestmen" },
            { name: "Ms. Aubrey D. Haspela", image: woman, role: "Maid of Honor" },
            
        ]
    },
    {
        role: "1 BestMen 1 Maid of Honor",
        members: [
            { name: "Mr. Reimond Mark M. Avendano", image: mooon, role: "Bestmen" },
            { name: "Ms. Patricia Celine M. Magat", image: woman, role: "Maid of Honor" },
        ]
    },
    {
        role: "Candle",
        members: [
            { name: "Mr. Jaybee L. Rivera", image: jaybee, role: "Candle" },
            { name: "Ms. Joe Marie A. Bagotsay", image: woman, role: "Candle" }
        ]
    },
    {
        role: "Veil",
        members: [
            { name: "Mr. Arvin V. Zoleta", image: man, role: "Veil" },
            { name: "Ms. Rhina M. Manuel", image: woman, role: "Veil" }
        ]
    },
    {
        role: "Cord",
        members: [
            { name: "Mr. John Ross B. Bacanto", image: man, role: "Cord" },
            { name: "Ms. Katrina G. Delas Alas", image: woman, role: "Cord" }
        ]
    },
    {
        role: "Bridesmaids and Groomsmen",
        members: [
            { name: "Mr. Patrick Joseph Z. Caluag", image: man, role: "Groomsmen" },
            { name: "Mr. Xavier Lee Agtarap", image: man, role: "Groomsmen" },
            { name: "Ms. Anna Triccia Z. Caluag", image: woman, role: "Bridemaid" },
            { name: "Ms. Sharon P. De Guzman", image: woman, role: "Bridemaid" },
            { name: "Mr. Mervin Neil Orozco", image: man, role: "Groomsmen" },
            { name: "Mr. Brando Ji D. Javier", image: man, role: "Groomsmen" },
            { name: "Mrs. Charmaine T. Gerente", image: woman, role: "Bridemaid" },
            { name: "Ms. Princess Cassie M. Cruz", image: woman, role: "Bridemaid" },
            { name: "Mr. Bayani Ramos", image: man, role: "Groomsmen" },
            { name: "Mrs. Jet Nicole T. Gerente", image: woman, role: "Bridemaid" }
        ]
    },
    {
        role: "Bible, Ring, Coin, Flower",
        members: [
            { name: "Miguel Joseph Z Caluag", image: man, role: "Bible Bearer" },
            { name: "Ryxel Clark M. Cruz", image: man, role: "Ring Bearer" },
            { name: "Nyle Joseph Reyes", image: woman, role: "Coin Bearer" },
            { name: "Kayla Brielle Caluag", image: woman, role: "Flower Girl" },
        ]
    }
];

const Nuptials = () => {
    return (
        <div id ="nuptials">
            <Container fluid>
                <Row>
                    <Col md={12}>
                        <div className= "title-header-template">
                            Caluag - Cruz Nuptials
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="wedding-tree-container bg-stardust-white padding-top-bottom">
                {/* Bride & Groom */}
                <Row className="justify-content-center">
                {weddingRoles[0].members.map((member, index) => (
                    <Col xs={6} md={4} key={index} className="text-center ">
                    <div className="circle-icon">
                        <img src={member.image} alt={member.name} className="circle-image" />
                    </div>
                    <p className="font-weight-bold">{member.role}: <span className ="third-rustic-color font-style-italic">{member.name}</span></p>
                    </Col>
                ))}
                </Row>

                {/* Parents Section */}
                <Row className="justify-content-center">
                {weddingRoles[1].members.map((member, index) => (
                    <Col xs={6} md={3} key={index} className="text-center">
                    <div className="circle-icon">
                        <img src={member.image} alt={member.name} className="circle-image" />
                    </div>
                    <p className="font-weight-bold">{member.role}: <span className ="third-rustic-color font-style-italic">{member.name}</span></p>
                    </Col>
                ))}
                </Row>

                {/* Priest Section */}
                <Row className="justify-content-center">
                {weddingRoles[2].members.map((member, index) => (
                    <Col xs={6} md={3} key={index} className="text-center">
                    <div className="circle-icon">
                        <img src={member.image} alt={member.name} className="circle-image" />
                    </div>
                    <p className="font-weight-bold">{member.role}: <span className ="third-rustic-color font-style-italic">{member.name}</span></p>
                    </Col>
                ))}
                </Row>

                  {/* Principal Sponsor Section */}
                 <Row className="justify-content-center">
                {weddingRoles[3].members.map((member, index) => (
                    <Col xs={6} md={3} key={index} className="text-center">
                    <div className="circle-icon">
                        <img src={member.image} alt={member.name} className="circle-image" />
                    </div>
                    <p className="font-weight-bold">{member.role}: <span className ="third-rustic-color font-style-italic">{member.name}</span></p>
                    </Col>
                ))}
                </Row>

                                 
                {/* Bestmen and Maid of Honor Section */}
                <Row className="justify-content-center">
                {weddingRoles[4].members.map((member, index) => (
                    <Col xs={6} md={3} key={index} className="text-center">
                    <div className="circle-icon">
                        <img src={member.image} alt={member.name} className="circle-image" />
                    </div>
                    <p className="font-weight-bold">{member.role}: <span className ="third-rustic-color font-style-italic">{member.name}</span></p>
                    </Col>
                ))}
                </Row>

                {/* Bestmen and Maid of Honor Section */}
                <Row className="justify-content-center">
                {weddingRoles[5].members.map((member, index) => (
                    <Col xs={6} md={3} key={index} className="text-center">
                    <div className="circle-icon">
                        <img src={member.image} alt={member.name} className="circle-image" />
                    </div>
                    <p className="font-weight-bold">{member.role}: <span className ="third-rustic-color font-style-italic">{member.name}</span></p>
                    </Col>
                ))}
                </Row>

                {/* Candle Section Section */}
                <Row className="justify-content-center">
                {weddingRoles[6].members.map((member, index) => (
                    <Col xs={6} md={3} key={index} className="text-center">
                    <div className="circle-icon">
                        <img src={member.image} alt={member.name} className="circle-image" />
                    </div>
                    <p className="font-weight-bold">{member.role}: <span className ="third-rustic-color font-style-italic">{member.name}</span></p>
                    </Col>
                ))}
                </Row>

                {/* Veil */}
                <Row className="justify-content-center">
                {weddingRoles[7].members.map((member, index) => (
                    <Col xs={6} md={3} key={index} className="text-center">
                    <div className="circle-icon">
                        <img src={member.image} alt={member.name} className="circle-image" />
                    </div>
                    <p className="font-weight-bold">{member.role}: <span className ="third-rustic-color font-style-italic">{member.name}</span></p>
                    </Col>
                ))}
                </Row>
                

                {/* Groomsmen and BridesMaid */}
                <Row className="justify-content-center">
                {weddingRoles[8].members.map((member, index) => (
                    <Col xs={6} md={3} key={index} className="text-center">
                    <div className="circle-icon">
                        <img src={member.image} alt={member.name} className="circle-image" />
                    </div>
                    <p className="font-weight-bold">{member.role}: <span className ="third-rustic-color font-style-italic">{member.name}</span></p>
                    </Col>
                ))}
                </Row>

                {/* Groomsmen and BridesMaid */}
                <Row className="justify-content-center">
                {weddingRoles[9].members.map((member, index) => (
                    <Col xs={6} md={3} key={index} className="text-center">
                    <div className="circle-icon">
                        <img src={member.image} alt={member.name} className="circle-image" />
                    </div>
                    <p className="font-weight-bold">{member.role}: <span className ="third-rustic-color font-style-italic">{member.name}</span></p>
                    </Col>
                ))}
                </Row>

                
                {/* Bible, Ring, Coin, Flower */}
                <Row className="justify-content-center">
                {weddingRoles[9].members.map((member, index) => (
                    <Col xs={6} md={3} key={index} className="text-center">
                    <div className="circle-icon">
                        <img src={member.image} alt={member.name} className="circle-image" />
                    </div>
                    <p className="font-weight-bold">{member.role}: <span className ="third-rustic-color font-style-italic">{member.name}</span></p>
                    </Col>
                ))}
                </Row>

            </Container>
        </div>
    );
};

export default Nuptials;
