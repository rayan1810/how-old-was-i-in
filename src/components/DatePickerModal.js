import React from "react";
import {
  Modal,
  Button,
  Input,
  HStack,
  FormControl,
  Text,
  ChevronLeftIcon,
} from "native-base";

export const DatePickerModal = (props) => {
  const {
    showModal,
    setShowModal,
    setDobDate,
    setDobMonth,
    setDobYear,
    setShowAge,
  } = props;
  //   const dates = arrayRangeGenerator(1, 31);
  //   const months = arrayRangeGenerator(1, 12);
  //   const years = arrayRangeGenerator(1940, new Date().getFullYear());

  return (
    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
      <Modal.Content maxWidth="400px">
        <Modal.CloseButton />
        <Modal.Header>Just Wanted to know...</Modal.Header>
        <Modal.Body>
          <FormControl>
            <FormControl.Label>What is your Date of Birth?</FormControl.Label>
            <HStack space="3" alignItems="center" divider={<Text>-</Text>}>
              <Input onChangeText={setDobDate} flex="1" placeholder="DD" />
              <Input onChangeText={setDobMonth} flex="1" placeholder="MM" />
              <Input onChangeText={setDobYear} flex="2" placeholder="YYYY" />
            </HStack>
          </FormControl>
        </Modal.Body>
        <Modal.Footer>
          <Button.Group space={2}>
            <Button
              leftIcon={<ChevronLeftIcon size="4" />}
              variant="ghost"
              colorScheme="blueGray"
              onPress={() => {
                setShowModal(false);
              }}
            >
              Go Back
            </Button>
            <Button
              onPress={() => {
                setShowModal(false);
                setShowAge(true);
              }}
            >
              Done
            </Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};
