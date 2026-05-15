
// import { Stack } from "expo-router";
// import { ClerkProvider } from "@clerk/expo";
// import  SafeScreen  from "@/components/SafeScreen";

// const publishableKey =
//   process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

// export default function RootLayout() {
//   return (
//     <ClerkProvider publishableKey={publishableKey}>
//       <SafeScreen>
//           <Stack screenOptions={{ headerShown: false }} />
//       </SafeScreen>
    
//     </ClerkProvider>
//   );
  
// }
import { Slot } from "expo-router";
import SafeScreen from "../components/SafeScreen";
import { ClerkProvider } from "@clerk/expo";
import * as SecureStore from "expo-secure-store";
import { StatusBar } from "expo-status-bar";

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

const tokenCache = {
  getToken: (key) => SecureStore.getItemAsync(key),
  saveToken: (key, value) => SecureStore.setItemAsync(key, value),
};

export default function RootLayout() {
  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <SafeScreen>
        <Slot />
      </SafeScreen>
      <StatusBar style="dark" />
    </ClerkProvider>
  );
}