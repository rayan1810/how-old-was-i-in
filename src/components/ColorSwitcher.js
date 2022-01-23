import React from "react";
import { Fab, SunIcon, MoonIcon, useColorMode } from "native-base";
export const ColorSwitcher = () => {
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
