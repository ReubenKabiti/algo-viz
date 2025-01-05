import { SunIcon } from "@chakra-ui/icons";
import { Button, Flex, IconButton } from "@chakra-ui/react";
import { Link } from "react-router";
import { paths } from "../../util/constants";

const NavBar = () => {
  return (
    <Flex justifyContent="space-between" p={2} boxShadow="md">
      <Link to={paths.home}>
        <Button fontWeight="bold" colorScheme="blue" w={100}>
          Home
        </Button>
      </Link>
      <Flex gap={4}>
        <Link to={paths.help}>
          <Button variant="outline">Help</Button>
        </Link>
        <Link to={paths.about}>
          <Button variant="ghost">About</Button>
        </Link>
        <IconButton aria-label="" icon={<SunIcon />} />
      </Flex>
    </Flex>
  );
};

export default NavBar;
