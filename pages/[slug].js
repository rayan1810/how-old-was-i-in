import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Head from "next/head";
import {
  Heading,
  Box,
  Input,
  Button,
  Modal,
  Pressable,
  Menu,
  HStack,
  Center,
  Fab,
  SunIcon,
  MoonIcon,
  FormControl,
  useColorMode,
  ChevronLeftIcon,
  Text,
  Circle,
} from "native-base";

// const arrayRangeGenerator = (start, end) => {
//   const array = [];
//   for (let i = start; i <= end; i++) {
//     array.push(i);
//   }
//   return array;
// };

// const getDayFromDate = (date, month, year) => {
//   const dobDate = new Date(year, month - 1, date);
//   console.log(getAge(dobDate, new Date()));
//   return dobDate.getDay();
// };

const getAge = (dateOfBirth, currentDate) => {
  var ageInMilliseconds = currentDate - dateOfBirth;
  return Math.floor(ageInMilliseconds / 1000 / 60 / 60 / 24 / 365); // convert to years.
};

const ColorSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Fab
      placement="top-right"
      size="12"
      p="0"
      variant="unstyled"
      _dark={{ bg: "coolGray.900" }}
      _light={{ bg: "coolGray.50" }}
      shadow="none"
      onPress={toggleColorMode}
      icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
    />
  );
};
const DatePickerModal = (props) => {
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
const ShowAgeModal = (props) => {
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

export default function () {
  const [showModal, setShowModal] = React.useState(false);
  const [showAge, setShowAge] = React.useState(false);
  const [checkYear, setCheckYear] = React.useState("");
  const [dobDate, setDobDate] = React.useState("");
  const [dobMonth, setDobMonth] = React.useState("");
  const [dobYear, setDobYear] = React.useState("");
  const router = useRouter();
  const { slug } = router.query;
  const datePickerModalProps = {
    showModal,
    setShowModal,
    setShowAge,
    dobDate,
    setDobDate,
    dobMonth,
    setDobMonth,
    dobYear,
    setDobYear,
    checkYear,
  };
  const getAgeModalProps = {
    showAge,
    setShowAge,
    dobDate,
    setDobDate,
    dobMonth,
    setDobMonth,
    dobYear,
    setDobYear,
    checkYear,
  };
  function openModalWhenCheckYearIsValid(year) {
    if (year > 1900 && year < new Date().getFullYear()) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }
  React.useEffect(() => {
    if (slug && slug.length === 4) {
      setCheckYear(slug);
      openModalWhenCheckYearIsValid(checkYear);
    }
    if (checkYear.length === 4) {
      openModalWhenCheckYearIsValid(checkYear);
    }
  }, [checkYear, slug]);
  return (
    <>
      <Head>
        <title>How old was I in {checkYear}?</title>
      </Head>
      <Center
        _light={{ bg: "coolGray.50" }}
        _dark={{ bg: "coolGray.900" }}
        h="100vh"
      >
        <HStack alignItems="center">
          <Heading size="2xl">How old was I in </Heading>
          <Input
            onChangeText={setCheckYear}
            w="90px"
            pb="1"
            fontSize="3xl"
            placeholder="YYYY"
            variant="underlined"
          />
          <Heading size="2xl"> ?</Heading>
        </HStack>
        <ColorSwitcher />
        <DatePickerModal {...datePickerModalProps} />
        <ShowAgeModal {...getAgeModalProps} />
      </Center>
    </>
  );
}
