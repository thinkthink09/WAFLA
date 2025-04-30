import { View, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! Not Found" }} />
      <View
        style={{
          flex: 1,
          backgroundColor: "#25292e",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link
          href="/"
          style={{
            fontSize: 20,
            textDecorationLine: "underline",
            color: "#fff",
          }}
        >
          Go back to Home screen!
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
