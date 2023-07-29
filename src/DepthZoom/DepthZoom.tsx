import { FunctionComponent } from "react";
import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

export const DepthZoom: FunctionComponent = () => {
  const scale = useSharedValue(1);
  const savedScale = useSharedValue(1);

  const pinchGesture = Gesture.Pinch()
    .onUpdate((e) => {
      console.log("update");
      scale.value = savedScale.value * e.scale;
    })
    .onEnd(() => {
      console.log("end");
      savedScale.value = scale.value;
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));
  return (
    <GestureHandlerRootView style={styles.container}>
      <GestureDetector gesture={pinchGesture}>
        <Animated.View style={[styles.view1, animatedStyle]} />
        {/* <Animated.View style={[styles.view2, animatedStyle]} /> */}
      </GestureDetector>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  view1: {
    width: 200,
    height: 200,
    backgroundColor: "violet",
  },
  view2: {
    width: 200,
    height: 200,
    backgroundColor: "green",
  },
});
