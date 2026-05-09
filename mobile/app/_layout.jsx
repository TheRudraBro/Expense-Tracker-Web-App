// import { Slot } from "expo-router";
// import  SafeScreen  from "@/components/SafeScreen";
// import { ClerkProvider } from '@clerk/expo';
// import { tokenCache } from '@clerk/expo/token-cache';
// export default function RootLayout() {
//   return(
//   <ClerkProvider tokenCache={tokenCache}>
//       <SafeScreen>
//         <Slot />
//       </SafeScreen>
//     </ClerkProvider>

//   );

// }

import { Stack } from "expo-router";
import { ClerkProvider } from "@clerk/expo";

const publishableKey =
  process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

export default function RootLayout() {
  return (
    <ClerkProvider publishableKey={publishableKey}>
      <Stack screenOptions={{ headerShown: false }} />
    </ClerkProvider>
  );
  
}