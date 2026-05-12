
import { Stack } from "expo-router";
import { ClerkProvider } from "@clerk/expo";
import  SafeScreen  from "@/components/SafeScreen";

const publishableKey =
  process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

export default function RootLayout() {
  return (
    <ClerkProvider publishableKey={publishableKey}>
      <SafeScreen>
          <Stack screenOptions={{ headerShown: false }} />
      </SafeScreen>
    
    </ClerkProvider>
  );
  
}