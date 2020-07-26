import React from "react";
import { Link as ChakraLink, Text, Box, Image } from "@chakra-ui/core";

export const Marketing = () => {
  return (
    <Box p={4} display={{ md: "flex" }}>
      <Box flexShrink="0">
        <Image
          rounded="lg"
          width={{ md: 40 }}
          src="/plane.png"
          alt="Woman paying for a purchase"
        />
      </Box>
      <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
        <Text
          fontWeight="bold"
          textTransform="uppercase"
          fontSize="sm"
          letterSpacing="wide"
          color="teal.600"
        >
          Marketing
        </Text>
        <ChakraLink
          mt={1}
          display="block"
          fontSize="lg"
          lineHeight="normal"
          fontWeight="semibold"
          href="#"
        >
          Finding customers for your new business
        </ChakraLink>
        <Text mt={2} color="gray.500">
          Getting a new business off the ground is a lot of hard work. Here are
          six ideas you can use to find your first customers.
        </Text>
      </Box>
    </Box>
  );
};
