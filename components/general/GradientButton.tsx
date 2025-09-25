import { LinearGradient } from "expo-linear-gradient";
import {
  ColorValue,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

interface GradientButtonProps extends TouchableOpacityProps {
  children: React.ReactNode;
  isActive?: boolean;
  activeColors?: readonly [ColorValue, ColorValue, ...ColorValue[]];
  inactiveColors?: readonly [ColorValue, ColorValue, ...ColorValue[]];
  startPoint?: { x: number; y: number };
  endPoint?: { x: number; y: number };
  className?: string;
  gradientClassName?: string;
  size?: number; // 🔑 square fallback
  width?: number; // 🔑 custom override
  height?: number; // 🔑 custom override
}

export default function GradientButton({
  children,
  isActive = true,
  activeColors = ["#34C8E8", "#4E4AF2"] as const,
  inactiveColors = ["#353F54", "#222834"] as const,
  startPoint = { x: 0, y: 0 },
  endPoint = { x: 1, y: 1 },
  className = "rounded-2xl",
  gradientClassName,
  style,
  disabled,
  size = 50,
  width,
  height,
  ...props
}: GradientButtonProps) {
  const colors = isActive ? activeColors : inactiveColors;

  // 👇 Fallback logic
  const finalWidth = width ?? size;
  const finalHeight = height ?? size;
  const finalRadius = Math.min(finalWidth, finalHeight) / 3;

  return (
    <TouchableOpacity
      className={className}
      style={[
        {
          width: finalWidth,
          height: finalHeight,
          borderRadius: finalRadius,
          shadowColor: "#10141C",
          shadowOffset: { width: 0, height: 20 },
          shadowOpacity: 1,
          shadowRadius: 30,
          elevation: 20,
        },
        style,
      ]}
      disabled={disabled || !isActive}
      {...props}
    >
      <LinearGradient
        colors={colors}
        start={startPoint}
        end={endPoint}
        style={[
          styles.gradient,
          {
            width: finalWidth,
            height: finalHeight,
            borderRadius: finalRadius,
          },
        ]}
      >
        {children}
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  gradient: {
    alignItems: "center",
    justifyContent: "center",
  },
});
