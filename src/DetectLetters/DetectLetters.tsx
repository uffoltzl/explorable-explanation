import { FunctionComponent, useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  GestureResponderEvent,
} from "react-native";
import { Svg, Path } from "react-native-svg";

const { height, width } = Dimensions.get("window");

export const DetectLetters: FunctionComponent = () => {
  const [paths, setPaths] = useState<string[][]>([]);
  const [currentPath, setCurrentPath] = useState<string[]>([]);

  const onTouchMove = (event: GestureResponderEvent) => {
    const newPath = [...currentPath];

    //get current user touches position
    const locationX = event.nativeEvent.locationX;
    const locationY = event.nativeEvent.locationY;

    // create new point
    const newPoint = `${newPath.length === 0 ? "M" : ""}${locationX.toFixed(
      0
    )},${locationY.toFixed(0)} `;

    // add the point to older points
    newPath.push(newPoint);
    setCurrentPath(newPath);
  };
  const onTouchEnd = () => {
    const currentPaths = [...paths];
    const newPath = [...currentPath];

    //push new path with old path and clean current path state
    currentPaths.push(newPath);
    setPaths(currentPaths);
    setCurrentPath([]);
  };
  return (
    <View style={styles.container}>
      <View
        style={styles.svgContainer}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <Svg height={height * 0.7} width={width}>
          <Path
            d={currentPath.join("")}
            stroke={"green"}
            fill={"transparent"}
            strokeWidth={2}
            strokeLinejoin={"round"}
            strokeLinecap={"round"}
          />

          {paths.length > 0 &&
            paths.map((path, index) => (
              <Path
                key={`path-${index}`}
                d={path.join("")}
                stroke={"red"}
                fill={"transparent"}
                strokeWidth={2}
                strokeLinejoin={"round"}
                strokeLinecap={"round"}
              />
            ))}
        </Svg>
      </View>
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
  svgContainer: {
    height: height * 0.7,
    width,
    borderColor: "black",
    backgroundColor: "white",
    borderWidth: 1,
  },
});
