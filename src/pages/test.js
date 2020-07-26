import React from "react";
import { ChakraDrawer } from "../components/ChakraDrawer";
import { useDisclosure, Button, Flex } from "@chakra-ui/core";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Marketing } from "../components/Marketing";
import { Container } from "../components/Container";

const Test = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Container>
      <ChakraDrawer btnRef={btnRef} isOpen={isOpen} onClose={onClose} />
      <Flex align="flex-start" py={2} pl={2} justify="flex-start" w="100%">
        <Button ref={btnRef} variantColor="teal" onClick={onOpen}>
          Open
        </Button>
      </Flex>

      <DarkModeSwitch />
      <Marketing />
      <Marketing />
    </Container>
  );
};

export default Test;
