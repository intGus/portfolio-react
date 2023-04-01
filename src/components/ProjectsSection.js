import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "VanillaJS Video-Review",
    description:
      "A prototype of a project for video reviews and feedback like frame.io using youtube's API and a custom back-end for comments",
    getImageSrc: () => require("../images/photo1.png"),
    link: "https://intgus.github.io/video-review/?v=Al_HXSoQ7JI"
  },
  {
    title: "VanillaJS Calculator",
    description:
      "A simple calculator made in Vanilla Javascript without any external libraries or bundlers",
    getImageSrc: () => require("../images/photo2.png"),
    link: "https://intgus.github.io/calculator/"
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            link={project.link}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
