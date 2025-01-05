import { StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router";

const StarsSection = ({ stars }: { stars: number }) => {
  return (
    <Flex justifyContent="right" gap={1} alignItems="center">
      <Text fontWeight="bold">{stars}</Text>
      <StarIcon color="orange" />
    </Flex>
  );
};

const PageCard = ({
  title,
  imagePath,
  description,
  stars,
  to,
}: {
  title: string;
  imagePath: string;
  description: string;
  stars?: number;
  to: string;
}) => {
  return (
    <Card w={300}>
      <CardBody>
        <Stack spacing={4}>
          <Flex justifyContent="center">
            <Text fontWeight="bold">{title}</Text>
          </Flex>
          <Box w="100%" h={200} bg="gray.200">
            <Image
              src={imagePath}
              bg="gray.100"
              w="100%"
              h="100%"
              objectFit="cover"
              onError={(e: any) => {
                e.target.style.display = "none";
              }}
              alt="Example Image"
            />
          </Box>
          <Text color="gray.400">{description}</Text>
          {stars && <StarsSection stars={stars} />}
          <Link to={to}>
            <Button colorScheme="red" w="100%">
              Visit
            </Button>
          </Link>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default PageCard;
