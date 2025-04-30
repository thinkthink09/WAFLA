import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Text, View, StyleSheet } from "react-native";

export default function NewTarget() {
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
          color: "#666",
        }}
      >
        Latest transactions{" "}
        <MaterialIcons
          name="shower"
          size={24}
          color="#666"
          animationSpec={{ effect: { type: "pulse" }, repeating: true }}
        />
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
