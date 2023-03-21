import React, { useEffect, useRef, useState } from "react";
import { Box, HStack, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
const socials = [
  {
    icon: faEnvelope,
    url: "mailto: fake@fake.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/intGus",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/",
  },
  {
    icon: faFacebook,
    url: "https://www.facebook.com/",
  },

];


const Header = () => {
  const handleClick = (anchor) => {
    const id = `${anchor}`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  
  const [translate, setTranslate] = useState(0);
  const [prevScrollPos, setPreviousScrollPos] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos > prevScrollPos) {
        setTranslate(-200);
      } else if (currentScrollPos < prevScrollPos) {
        setTranslate(0);
      }

      setPreviousScrollPos(currentScrollPos);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (

    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform={`translateY(${translate}px)`}
      // translateY={translate}
      // transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      style={{zIndex:1000}}
    >
      <Box color="#cebc81" maxWidth="1280px" margin="0 auto" fontSize={['xs', 'md', 'lg']} >
        <HStack px={[10, 16]} py={4} justifyContent="space-between" alignItems="center">
          <nav >
            <a href={socials[0].url}><FontAwesomeIcon icon={socials[0].icon} size='2x' style={{ marginRight: '16px' }} /></a>
            <a href={socials[1].url}><FontAwesomeIcon icon={socials[1].icon} size='2x' style={{ marginRight: '16px' }} /></a>
            <a href={socials[2].url}><FontAwesomeIcon icon={socials[2].icon} size='2x' style={{ marginRight: '16px' }} /></a>
            <a href={socials[3].url}><FontAwesomeIcon icon={socials[3].icon} size='2x' style={{ marginRight: '16px' }} /></a>


          </nav>
          <nav>
            <HStack spacing={5} >
              <a href="#contactme-section" onClick={handleClick}> <Text>Contact Me</Text> </a>
              <a href="#projects-section" onClick={handleClick}><Text>Projects</Text></a>
            </HStack>
          </nav>

        </HStack>

      </Box>
    </Box>





  );
};

export default Header;