import { useNavigation } from "@react-navigation/native";
import { Button, View } from "react-native";
import { RootStackParamList } from "../../App";
import { FunctionComponent } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export const Home: FunctionComponent<Props> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Depth Zoom"
        onPress={() => navigation.navigate("DepthZoom")}
      />
    </View>
  );
};
