import { FunctionComponent } from "react";
import { StyleSheet, Text, View } from "react-native";

export const DetectLetters: FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <Text>Detect letters</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
