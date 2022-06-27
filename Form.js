import React from "react";
import { FormControl, Input, Stack, WarningOutlineIcon, Box, Center, NativeBaseProvider } from "native-base";

const Example = () => {
  return <Box w="100%">
      <FormControl isRequired>
        <Stack mx="4">
          <FormControl.Label>Password</FormControl.Label>
          <Input _light={{
          bg: "coolGray.100"
        }} _dark={{
          bg: "coolGray.800"
        }} _hover={{
          bg: "coolGray.200"
        }} shadow={2} type="password" defaultValue="12345" placeholder="password" />
          <FormControl.HelperText>
            Must be atleast 6 characters.
          </FormControl.HelperText>
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Atleast 6 characters are required.
          </FormControl.ErrorMessage>
        </Stack>
      </FormControl>
    </Box>;
};

    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <Example />
            </Center>
          </NativeBaseProvider>
        );
    };
    