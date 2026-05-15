import { useClerk } from "@clerk/expo";
import { useRouter } from "expo-router";
import { TouchableOpacity, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants/colors";

export const SignOutButton = () => {
  const { signOut } = useClerk();
  const router = useRouter();

  const handleSignOut = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Logout",
          style: "destructive",
          onPress: async () => {
            await signOut();
            router.replace("/(auth)/sign-in");
          },
        },
      ]
    );
  };

  return (
    <TouchableOpacity
      onPress={handleSignOut}
      style={{
        padding: 10,
        borderRadius: 20,
        backgroundColor: COLORS.card,
      }}
    >
      <Ionicons
        name="log-out-outline"
        size={22}
        color={COLORS.text}
      />
    </TouchableOpacity>
  );
};