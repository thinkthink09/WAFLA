import { Text, View, StyleSheet } from "react-native";

export default function About() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#25292e",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: "#fff",
        }}
      >
        About screen
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
