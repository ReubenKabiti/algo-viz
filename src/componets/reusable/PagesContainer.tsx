import { Grid, GridItem } from "@chakra-ui/react";
import PageCard from "./PageCard";

export interface PageData {
  title: string;
  imagePath: string;
  description: string;
  to: string;
  stars?: number;
}

const PagesContainer = ({ data }: { data: PageData[] }) => {
  return (
    <Grid
      templateColumns={{
        sm: "repeat(1, auto)",
        md: "repeat(2, auto)",
        lg: "repeat(4, auto)",
      }}
      gap={2}
      w="fit-content"
      mt={2}
    >
      {data.map((page, i) => (
        <GridItem key={i}>
          <PageCard {...page} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default PagesContainer;
