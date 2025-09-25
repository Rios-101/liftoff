import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useRef, useState } from "react";
import {
    Animated,
    PanResponder,
    Text,
    View,
} from "react-native";

const BUTTON_WIDTH = 200;
const SWIPE_THRESHOLD = BUTTON_WIDTH * 0.35;

const activeColors = ["#34C8E8", "#4E4AF2"] as const;

const SwipeButton = ({ onSwipeComplete }: { onSwipeComplete: () => void }) => {
    const [swiped, setSwiped] = useState(false);
    const translateX = useRef(new Animated.Value(0)).current;
    const maxSwipe = BUTTON_WIDTH - 75;

    // Track threshold crossing for haptics
    const hasTriggeredThreshold = useRef(false);

    useEffect(() => {
        const listenerId = translateX.addListener(({ value }) => {
            // Clamp
            if (value < 0) translateX.setValue(0);
            if (value > maxSwipe) translateX.setValue(maxSwipe);

            // Fire haptic when crossing threshold
            if (!hasTriggeredThreshold.current && value > SWIPE_THRESHOLD) {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                hasTriggeredThreshold.current = true;
            }
            if (value < SWIPE_THRESHOLD) {
                hasTriggeredThreshold.current = false;
            }
        });

        return () => translateX.removeListener(listenerId);
    }, [maxSwipe, translateX]);

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => !swiped,
            onMoveShouldSetPanResponder: () => !swiped,

            onPanResponderGrant: () => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            },

            onPanResponderMove: Animated.event(
                [null, { dx: translateX }],
                { useNativeDriver: false } // must be false for non-style props
            ),

            onPanResponderRelease: (evt, gestureState) => {
                if (gestureState.dx > SWIPE_THRESHOLD && !swiped) {
                    Animated.timing(translateX, {
                        toValue: maxSwipe,
                        duration: 200,
                        useNativeDriver: true,
                    }).start(() => {
                        setSwiped(true);
                        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
                        onSwipeComplete();

                        // Reset after 3s
                        setTimeout(() => {
                            Animated.spring(translateX, {
                                toValue: 0,
                                useNativeDriver: true,
                                friction: 5,
                                tension: 40,
                            }).start(() => {
                                setSwiped(false);
                            });
                        }, 3000);
                    });
                } else {
                    Animated.spring(translateX, {
                        toValue: 0,
                        useNativeDriver: true,
                        friction: 5,
                        tension: 40,
                    }).start();
                }
            },
        })
    ).current;

    const textOpacity = translateX.interpolate({
        inputRange: [0, maxSwipe * 0.5, maxSwipe],
        outputRange: [1, 0.3, 0],
        extrapolate: "clamp",
    });

    const doneOpacity = translateX.interpolate({
        inputRange: [maxSwipe * 0.7, maxSwipe],
        outputRange: [0, 1],
        extrapolate: "clamp",
    });

    return (
        <View className="pb-6 items-center">
            <View
                className="rounded-2xl overflow-hidden"
                style={{
                    height: 50,
                    width: BUTTON_WIDTH,
                    backgroundColor: "#1E293B",
                }}
            >
                {/* Checkout Text */}
                <Animated.View
                    className="absolute inset-0 items-center justify-center"
                    style={{ opacity: textOpacity }}
                >
                    <Text className="text-white/70 font-poppins-medium text-base">
                        Checkout
                    </Text>
                </Animated.View>

                {/* Done Text */}
                <Animated.View
                    className="absolute inset-0 items-center justify-center"
                    style={{ opacity: doneOpacity }}
                >
                    <Text className="text-white font-poppins-bold text-lg">Done!</Text>
                </Animated.View>

                {/* Swipeable Button */}
                <Animated.View
                    {...panResponder.panHandlers}
                    style={{
                        transform: [{ translateX }],
                        position: "absolute",
                        left: 4,
                        top: 4,
                        bottom: 4,
                        width: 55,
                        borderRadius: 16,
                        overflow: "hidden",
                        shadowColor: "#4A90E2",
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.3,
                        shadowRadius: 8,
                        elevation: 6,
                    }}
                >
                    <LinearGradient
                        colors={activeColors}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 16,
                        }}
                    >
                        <Ionicons name="chevron-forward" size={22} color="white" />
                    </LinearGradient>
                </Animated.View>
            </View>
        </View>
    );
};

export default SwipeButton;
