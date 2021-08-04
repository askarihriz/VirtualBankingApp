import React from 'react'
import img1 from "../../images/svg-5.svg";
import img2 from "../../images/svg-3.svg";
import img3 from "../../images/svg-4.svg";
import { ServicesContainer, ServicesWrapper, ServiceHeading, ServicesCard, ServicesImg, ServicesH2, ServicesP } from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServiceHeading>Our Services</ServiceHeading>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesImg src={img1} />
                    <ServicesH2>Reduce Expenses</ServicesH2>
                    <ServicesP>We help reduce your fees and increase your overall revenue.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesImg src={img2} />
                    <ServicesH2>Virtual Offices</ServicesH2>
                    <ServicesP>You can access our platform online anywhere in the world.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesImg src={img3} />
                    <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>Unlock our special membership card that returns 5% cash back.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
