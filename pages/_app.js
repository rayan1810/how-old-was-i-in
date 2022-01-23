import "../styles/globals.css";
import { NativeBaseProvider } from "native-base";

// const config = {
//   dependencies: {
//     "linear-gradient": require("expo-linear-gradient").LinearGradient,
//   },
// };
function MyApp({ Component, pageProps }) {
  return (
    <NativeBaseProvider>
      <Component {...pageProps} />
    </NativeBaseProvider>
  );
}

export default MyApp;
