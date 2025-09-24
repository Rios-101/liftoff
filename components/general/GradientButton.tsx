import { LinearGradient } from "expo-linear-gradient";
import { ColorValue, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface GradientButtonProps extends TouchableOpacityProps {
  children: React.ReactNode;
  isActive?: boolean;
  activeColors?: readonly [ColorValue, ColorValue, ...ColorValue[]];
  inactiveColors?: readonly [ColorValue, ColorValue, ...ColorValue[]];
  startPoint?: { x: number; y: number };
  endPoint?: { x: number; y: number };
  className?: string;
  gradientClassName?: string;
}

export default function GradientButton({
  children,
  isActive = true,
  activeColors = ['#34C8E8', '#4E4AF2'] as const,
  inactiveColors = ['#353F54', '#222834'] as const,
  startPoint = { x: 0, y: 0 },
  endPoint = { x: 1, y: 1 },
  className = "p-3 rounded-2xl",
  gradientClassName = "p-3 rounded-3xl items-center justify-center",
  style,
  disabled,
  ...props
}: GradientButtonProps) {
  // Determine which colors to use based on active state
  const colors = isActive ? activeColors : inactiveColors;

  return (
    <TouchableOpacity
      className={className}
      style={[
        {
          shadowColor: '#10141C',
          shadowOffset: { width: 0, height: 20 },
          shadowOpacity: 1,
          shadowRadius: 30,
          elevation: 20,
        },
        style,
      ]}
      disabled={disabled || !isActive} // Optionally disable when inactive
      {...props}
    >
      <LinearGradient
        colors={colors}
        start={startPoint}
        end={endPoint}
        className={gradientClassName}
        style={{
          shadowOffset: { width: 0, height: -20 },
          shadowOpacity: 1,
          shadowRadius: 30,
          elevation: 15,
          borderRadius: 10,
        }}
      >
        {children}
      </LinearGradient>
    </TouchableOpacity>
  );
}