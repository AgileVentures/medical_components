/* eslint-disable react/prop-types */
import { Box, Flex } from "@chakra-ui/react";
import { MDProvider } from "./MDProvider";

const MDFooter = ({ logo, children }) => {
  return (
    <MDProvider>
      <Box bg="#FAF6F3" color="gray.700" as="footer">
        <Flex
          direction={{ base: "column", lg: "row" }}
          align="start"
          wrap="wrap"
          justify="space-between"
          py={10}
          px={{ base: 5, lg: 20 }}
          maxW="6xl"
          mx="auto"
        >
          <img src={logo} alt="Company Logo" width="200" />
          {children}
        </Flex>
      </Box>
    </MDProvider>
  );
};

export default MDFooter;
