import { Stack } from "@chakra-ui/react";
import PagesContainer from "../../reusable/PagesContainer";

const HomePage = () => {
  const pageData = [
    {
      title: "Hello World",
      imagePath: "not_found.jpg",
      description: "Hello world this is the description",
      to: "/empty",
      stars: 4,
    },
    {
      title: "Hello World",
      imagePath: "not_found.jpg",
      description: "Hello world this is the description",
      to: "/empty",
      stars: 4,
    },
    {
      title: "Hello World",
      imagePath: "not_found.jpg",
      description: "Hello world this is the description",
      to: "/empty",
      stars: 4,
    },
    {
      title: "Hello World",
      imagePath: "not_found.jpg",
      description: "Hello world this is the description",
      to: "/empty",
      stars: 4,
    },
    {
      title: "Hello World",
      imagePath: "not_found.jpg",
      description: "Hello world this is the description",
      to: "/empty",
      stars: 4,
    },
    {
      title: "Hello World",
      imagePath: "not_found.jpg",
      description: "Hello world this is the description",
      to: "/empty",
      stars: 4,
    },
  ];
  return (
    <Stack>
      <PagesContainer data={pageData} />
    </Stack>
  );
};

export default HomePage;
