import { useNavigation } from "@react-navigation/native";
import { Button, View } from "react-native";
import { RootStackParamList } from "../../App";
import { FunctionComponent } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BASE_SPACER, Spacer } from "../shared/Spacer";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export const Home: FunctionComponent<Props> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Depth Zoom"
        onPress={() => navigation.navigate("DepthZoom")}
      />
      <Spacer height={BASE_SPACER} />
      <Button
        title="Detect Letters"
        onPress={() => navigation.navigate("DetectLetters")}
      />
    </View>
  );
};
