/* eslint-disable react/prop-types */
import { chakra } from "@chakra-ui/react";
import { MDProvider } from "./MDProvider";

const MDListText = ({ content }) => {
  return (
    <MDProvider>
      <chakra.p
        mt={1}
        mb={4}
        maxW="2xl"
        fontSize="xl"
        mx={{ lg: "auto" }}
        color="gray.500"
        _dark={{ color: "gray.400" }}
      >
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </chakra.p>
    </MDProvider>
  );
};

export default MDListText;
