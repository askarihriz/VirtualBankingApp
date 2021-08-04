import React, {useState} from 'react'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, HeroBtn, ArrowForward, ArrowRight } from './HeroElements'
import Video from "../../videos/video.mp4"

const HeroSection = () => {
    const [isHover, setHover] = useState(false);

    const onHover = () => {
        setHover(!isHover);
    }

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroH1>Virtual Banking Made Easy</HeroH1>
                <HeroP>Sign Up for a new account today and receive $250 in credit towards your next payment.</HeroP>
                <HeroBtnWrapper>
                    <HeroBtn to="signup" onMouseEnter={onHover} onMouseLeave={onHover} duration={500} exact="true" smooth={true} spy={true} offset={-80}>Get Started {isHover ? <ArrowRight/>: <ArrowForward/>}</HeroBtn>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
