import React from "react";
import { Box, Text, ChakraProvider } from "@chakra-ui/core";
import theme from "@chakra-ui/theme";

const Feed = () => (
  <ChakraProvider theme={theme} resetCSS>
    <Box>
      <Text color="blue.200" fontSize="2xl" fontWeight="extrabold">
        This is the Feed component.
      </Text>
    </Box>
  </ChakraProvider>
);

export default Feed;
