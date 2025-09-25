import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type NeumorphicTabButtonProps = {
    label: string;
    active: boolean;
    onPress: () => void;
    width?: number;
};

export const NeumorphicTabButton: React.FC<NeumorphicTabButtonProps> = ({
    label,
    active,
    onPress,
    width = 133,
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                {
                    borderRadius: 12,
                    width,
                    paddingVertical: 12,
                },
                active
                    ? {
                        backgroundColor: "#323B4F",
                        shadowColor: "#252B39",
                        shadowOffset: { width: 4, height: 4 },
                        shadowOpacity: 1,
                        shadowRadius: 10,
                        elevation: 6, // Android
                    }
                    : {
                        backgroundColor: "#28303F",
                    },
            ]}
        >
            {!active && (
                <LinearGradient
                    colors={["#364055", "#202633"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={{
                        ...StyleSheet.absoluteFillObject,
                        borderRadius: 12,
                        opacity: 0.5, // soften inset effect
                    }}
                />
            )}

            <Text
                className={`text-center font-poppins-medium text-sm ${active ? "text-primary-active" : "text-white/60"
                    }`}
            >
                {label}
            </Text>
        </TouchableOpacity>
    );
};
