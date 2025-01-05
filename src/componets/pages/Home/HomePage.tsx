import { Stack } from "@chakra-ui/react";
import PagesContainer from "../../reusable/PagesContainer";
import { pageData } from "../../../util/constants";

const HomePage = () => {
  return (
    <Stack>
      <PagesContainer data={pageData} />
    </Stack>
  );
};

export default HomePage;
