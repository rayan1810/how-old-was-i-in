import { useRouter } from "next/router";
import React from "react";
import Head from "next/head";
import { Heading, Input, HStack, Center } from "native-base";
import {
  DatePickerModal,
  ShowAgeModal,
  ColorSwitcher,
} from "../src/components";

export default function SlugApp() {
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
