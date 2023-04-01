import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, link }) => {
  return (
    <Box
      bg="#FAFAFA"
      borderRadius={25}
      maxW="md"
      borderWidth="0"
      overflow="hidden"
    >
      <Image
        src={imageSrc}
        alt={title}
        height={300}
        width={500}
        objectFit='cover'
      />
      <VStack p="6" >
        <Box>
          <HStack><Heading
            size='md'
            color='black'
            textAlign='left'

          >{title}
          </Heading>
          </HStack>
          <HStack>
            <Text fontSize='md'
              py={15}
              color='#3749B4'
            >
              {description}
            </Text>
          </HStack>
          <HStack>
            <a href={link}>
            <Text textAlign='left' color='black'>see more <span><FontAwesomeIcon icon={faArrowRight} size="1x" /></span></Text>
            </a>
          </HStack>



        </Box>

      </VStack>

    </Box>

  );
};

export default Card;
