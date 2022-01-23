import React, { useEffect } from "react";
import {
  Modal,
  Button,
  Center,
  Circle,
  Text,
  Heading,
  ChevronLeftIcon,
} from "native-base";
import { getAge } from "../utils";

export const ShowAgeModal = (props) => {
  const { setShowAge, showAge, dobDate, dobMonth, dobYear, checkYear } = props;
  const DarkGradients = [
    ["#D946EF", "#024FC7"],
    ["#F87171", "#3730A3"],
    ["#38BDF8", "#1D4ED8", "#4C1D95"],
    ["#FB923C", "#C026D3"],
    ["#5EEAD4", "#0284C7", "#5B21B6"],
    ["#8B5CF6", "#A21CAF"],
    ["#9333EA", "#4338CA"],
    ["#9333EA", "#EA580C"],
  ];
  const LightGradients = [
    ["#FBCFE8", "#818CF8"],
    ["#BAE6FD", "#60A5FA"],
    ["#FDBA74", "#E879F9"],
    ["#FEF3C7", "#67E8F9"],
  ];
  function generateRandomDarkGradient() {
    const index = Math.floor(Math.random() * DarkGradients.length);
    return DarkGradients[index].join(",");
  }
  function generateRandomLightGradient() {
    const index = Math.floor(Math.random() * LightGradients.length);
    return LightGradients[index].join(",");
  }
  const [lightGradientsArray, setlightGradientsArray] = React.useState([""]);
  const [darkGradientsArray, setDarkGradientsArray] = React.useState([""]);
  useEffect(() => {
    setlightGradientsArray(generateRandomLightGradient());
    setDarkGradientsArray(generateRandomDarkGradient());
  }, []);
  return (
    <Modal isOpen={showAge} onClose={() => setShowAge(false)}>
      <Modal.Content maxWidth="400px">
        <Modal.Body>
          <Center>
            <Circle
              _light={{
                _web: {
                  style: {
                    // @ts-ignore
                    backgroundImage:
                      "linear-gradient(135deg," + lightGradientsArray + ")",
                  },
                },
              }}
              _dark={{
                _web: {
                  style: {
                    // @ts-ignore
                    backgroundImage:
                      "linear-gradient(135deg," + darkGradientsArray + ")",
                  },
                },
              }}
              size="56"
            >
              <Text>As of July 2, {checkYear}. You were</Text>
              <Heading>
                {getAge(
                  new Date(dobYear, dobMonth - 1, dobDate),
                  new Date(checkYear, 6, 2)
                )}{" "}
                yrs Old
              </Heading>
            </Circle>
          </Center>
        </Modal.Body>
        <Modal.Footer justifyContent="center">
          <Button.Group space={2}>
            <Button
              leftIcon={<ChevronLeftIcon size="4" />}
              variant="ghost"
              colorScheme="blueGray"
              onPress={() => {
                setShowAge(false);
              }}
            >
              Check another Year
            </Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};
