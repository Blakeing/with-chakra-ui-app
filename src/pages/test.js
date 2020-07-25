import React from 'react';
import { ChakraDrawer } from '../components/ChakraDrawer';
import { useDisclosure, Button } from '@chakra-ui/core';
import { DarkModeSwitch } from '../components/DarkModeSwitch';

const Test = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <div>
      <ChakraDrawer btnRef={btnRef} isOpen={isOpen} onClose={onClose} />
      <Button ref={btnRef} variantColor="teal" onClick={onOpen}>
        Open
      </Button>
      <DarkModeSwitch />
    </div>
  );
};

export default Test;
