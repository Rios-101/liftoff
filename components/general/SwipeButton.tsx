import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { useRef, useState } from 'react';
import {
    Animated,
    PanResponder,
    Text,
    View
} from 'react-native';

const BUTTON_WIDTH = 200; // Fixed width
const SWIPE_THRESHOLD = BUTTON_WIDTH * 0.35; // 35% of button width to trigger

const SwipeButton = ({ onSwipeComplete }: { onSwipeComplete: () => void }) => {
    const [swiped, setSwiped] = useState(false);
    const translateX = useRef(new Animated.Value(0)).current;
    const maxSwipe = BUTTON_WIDTH - 75; // Leave space for the swiper

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => !swiped,
            onMoveShouldSetPanResponder: () => !swiped,

            onPanResponderGrant: () => {
                // Haptic feedback on touch
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            },

            onPanResponderMove: (evt, gestureState) => {
                if (!swiped && gestureState.dx > 0 && gestureState.dx <= maxSwipe) {
                    translateX.setValue(gestureState.dx);

                    // Haptic feedback when reaching threshold
                    if (gestureState.dx > SWIPE_THRESHOLD && gestureState.dx < SWIPE_THRESHOLD + 5) {
                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                    }
                }
            },

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

                        // Reset after 3 seconds
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
        extrapolate: 'clamp',
    });

    const doneOpacity = translateX.interpolate({
        inputRange: [maxSwipe * 0.7, maxSwipe],
        outputRange: [0, 1],
        extrapolate: 'clamp',
    });

    return (
        <View className="pb-6 items-center"> {/* Center the button */}
            <View
                className="rounded-2xl overflow-hidden"
                style={{
                    height: 65,
                    width: BUTTON_WIDTH, // Fixed width
                    backgroundColor: swiped ? '#10B981' : '#1E293B',
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
                    <Text className="text-white font-poppins-bold text-lg">
                        Done!
                    </Text>
                </Animated.View>

                {/* Swipeable Button */}
                <Animated.View
                    {...panResponder.panHandlers}
                    className="bg-blue-500 rounded-2xl"
                    style={{
                        transform: [{ translateX }],
                        position: 'absolute',
                        left: 4,
                        top: 4,
                        bottom: 4,
                        width: 55,
                        justifyContent: 'center',
                        alignItems: 'center',
                        shadowColor: '#4A90E2',
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.3,
                        shadowRadius: 8,
                        elevation: 6,
                    }}
                >
                    <View className="flex-row items-center">
                        <Ionicons name="chevron-forward" size={22} color="white" />
                        {/* <Ionicons name="chevron-forward" size={22} color="white" style={{ marginLeft: -10 }} /> */}
                    </View>
                </Animated.View>
            </View>
        </View>
    );
};

export default SwipeButton;