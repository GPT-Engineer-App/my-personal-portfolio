import { Container, Text, VStack, Heading, Button, Box, Image } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Box boxSize="150px">
          <Image src="https://via.placeholder.com/150" borderRadius="full" alt="Profile Picture" />
        </Box>
        <Heading as="h1" size="2xl" fontWeight="bold">John Doe</Heading>
        <Text fontSize="xl" textAlign="center">Software Engineer | Web Developer | Tech Enthusiast</Text>
        <VStack spacing={4}>
          <Button leftIcon={<FaGithub />} colorScheme="teal" variant="solid">
            GitHub
          </Button>
          <Button leftIcon={<FaLinkedin />} colorScheme="blue" variant="solid">
            LinkedIn
          </Button>
          <Button leftIcon={<FaEnvelope />} colorScheme="red" variant="solid">
            Email Me
          </Button>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;