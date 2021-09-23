import React from 'react';

import { 
    Col,
    Card
 } from "react-bootstrap";
const ExperienceCard = ({data}) => {
    return ( 
        <Col lg="6">
            <div className="pb-5 text-center">
                <div class="img-container img-thumbnail">
                    <img width="540" className="bg-white mb-3" src={data.companylogo} alt=""/>
                </div>
                <p className="lead">
                    <strong>{data.role}</strong>
                    <br/>
                    {data.date}
                </p>
                
            </div>
        </Col>
     );
}
 
export default ExperienceCard;