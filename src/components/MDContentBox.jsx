/* eslint-disable react/prop-types */
import { Flex, Box } from "@chakra-ui/react";
import { MDProvider } from "./MDProvider";

const MDContentBox = ({ children }) => {
  return (
    <MDProvider>
      <Flex
        bg="#edf3f8"
        _dark={{
          bg: "#3e3e3e",
        }}
        px={{ base: 4, md: 8, lg: 20 }}
        py={{ base: 4, md: 8 }}
        w="full"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          w="full"
          maxW="6xl"
          bg="white"
          _dark={{
            bg: "gray.800",
          }}
          rounded="sm"
          shadow="md"
          p={{ base: 4, md: 8 }}
        >
          {children}
        </Box>
      </Flex>
    </MDProvider>
  );
};

export default MDContentBox;
