import React from "react";
import Head from "next/head";
import { Heading, Input, HStack, Center } from "native-base";
import {
  DatePickerModal,
  ShowAgeModal,
  ColorSwitcher,
} from "../src/components";
import { useRouter } from "next/router";

export default function App() {
  const [showDatePicker, setShowDatePicker] = React.useState(false);
  const [showAge, setShowAge] = React.useState(false);
  const [yearToBeChecked, setYearToBeChecked] = React.useState("");
  const [dobDate, setDobDate] = React.useState("");
  const [dobMonth, setDobMonth] = React.useState("");
  const [dobYear, setDobYear] = React.useState("");
  const datePickerModalProps = {
    showDatePicker,
    setShowDatePicker,
    setShowAge,
    dobDate,
    setDobDate,
    dobMonth,
    setDobMonth,
    dobYear,
    setDobYear,
    yearToBeChecked,
  };
  const showAgeModalProps = {
    showAge,
    setShowAge,
    dobDate,
    setDobDate,
    dobMonth,
    setDobMonth,
    dobYear,
    setDobYear,
    yearToBeChecked,
  };
  function openModalWhenYearToBeCheckedIsValid(year) {
    if (year > 1900 && year < new Date().getFullYear()) {
      setShowDatePicker(true);
    } else {
      setShowDatePicker(false);
    }
  }
  const router = useRouter();
  const { year } = router.query; // get the year from url params
  React.useEffect(() => {
    if (year && year.length === 4) {
      setYearToBeChecked(year);
      openModalWhenYearToBeCheckedIsValid(yearToBeChecked);
    }
    if (yearToBeChecked.length === 4) {
      openModalWhenYearToBeCheckedIsValid(yearToBeChecked);
    }
  }, [yearToBeChecked, year]);

  return (
    <>
      <Head>
        <title>How old was I in {yearToBeChecked}?</title>
      </Head>
      <Center
        _light={{ bg: "coolGray.50" }}
        _dark={{ bg: "coolGray.900" }}
        h="100vh"
      >
        <HStack alignItems="center">
          <Heading size="2xl">How old was I in </Heading>
          <Input
            onChangeText={setYearToBeChecked}
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
        <ShowAgeModal {...showAgeModalProps} />
      </Center>
    </>
  );
}
