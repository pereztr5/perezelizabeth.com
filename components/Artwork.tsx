import { Box, BoxProps, Img } from '@chakra-ui/react'

interface ArtworkProps extends BoxProps {
  src: string
  alt: string
}

export const Artwork = (props: ArtworkProps) => {
  const { src, alt, ...rest } = props
  return (
    <Box
      pos="relative"
      cursor="pointer"
      className="group"
      h={{ base: '20rem', lg: '12rem' }}
      overflow="hidden"
      {...rest}
    >
      <Img
        w="full"
        h="full"
        objectFit="cover"
        htmlWidth="672"
        htmlHeight="448"
        src={src}
        alt={alt}
        transistion="all 0.2s"
        _groupHover={{ transform: 'scale(1.05)' }}
      />
    </Box>
  )
}
