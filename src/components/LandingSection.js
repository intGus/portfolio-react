import React from "react";
import { Avatar, Heading, VStack, HStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Gus!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <HStack py={50}>
      <VStack>
        <Avatar size='2xl' name='Gustavo' src='https://avatars.githubusercontent.com/u/46197948?s=96&v=4' />
        <Heading size='md' py={5} color='white' fontWeight='bold'>
          {greeting}
        </Heading>
      </VStack>

    </HStack>
    <HStack py={5}>
      <Heading as='h1' size='2xl' color='white' fontWeight='normal'>
        {bio1}
      </Heading>
    </HStack>
    <HStack>
      <Heading as='h1' size='2xl' color='white' fontWeight='normal'>
        {bio2}
      </Heading>
    </HStack>

  </FullScreenSection>
);

export default LandingSection;
