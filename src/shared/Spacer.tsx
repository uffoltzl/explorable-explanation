import { FunctionComponent } from "react";
import { View } from "react-native";

interface SpacerProps {
  width?: number;
  height?: number;
}

export const BASE_SPACER = 4;

export const Spacer: FunctionComponent<SpacerProps> = ({
  width = 0,
  height = 0,
}) => {
  return <View style={{ width, height }}></View>;
};
