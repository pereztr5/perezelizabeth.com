import {
  Box,
  Button,
  Container,
  Heading,
  Grid,
  GridItem,
  VStack,
  Flex,
  SimpleGrid,
  Spacer,
  Text,
} from '@chakra-ui/react'
import { Member } from '../components/Member'
import { Artwork } from '../components/Artwork'
import { members } from '../components/_data'
import { artworks } from '../components/_artwork_data'

export default function Landing() {
  return (
    <VStack spacing={4} align="stretch">
      <Box as="section">
        <Box
          mx="auto"
          maxW={{ base: 'xl', md: '7xl' }}
          px={{ base: '6', md: '8' }}
          py={{ base: '12', md: '20' }}
        >
          <Box textAlign="center">
            <Heading
              size="3xl"
              letterSpacing="tight"
              mr="1"
              mb="5"
              fontWeight="extrabold"
            >
              Elizabeth Perez
            </Heading>
            <Text fontSize="xl" maxW="2xl" mx="auto">
              NYC
            </Text>
          </Box>
        </Box>
      </Box>
      <Box>
        {members.map((member, idx) => (
          <Member
            key={idx}
            role={member.role}
            image={member.image}
            name={member.name}
            twitter={member.twitter}
            linkedIn={member.linkedin}
          >
            {member.description}
          </Member>
        ))}
      </Box>
      <Box>
        <Container maxW="container.xl">
          <SimpleGrid minChildWidth="250px" spacing="40px">
            {artworks.map((item, index) => (
              <Artwork src={item.image} alt={item.description} />
            ))}
            <Box bg="tomato" height="80px"></Box>
            <Box bg="tomato" height="80px"></Box>
            <Box bg="tomato" height="80px"></Box>
          </SimpleGrid>
        </Container>
      </Box>
    </VStack>
  )
}
