import GradientButton from "@/components/general/GradientButton";
import { Image, Text, TouchableOpacity } from "react-native";

interface FilterOption {
  label: string;
  text?: string;
  image?: any;
  isActive: boolean;
}

interface FilterChipProps {
  option: FilterOption;
  index: number;
  onPress: (label: string) => void;
}

export default function FilterChip({ option, index, onPress }: FilterChipProps) {
  // Create wave pattern: low -> mid -> high -> mid -> low
  const waveOffsets = [48, 36, 24, 12, 0];
  const verticalOffset = waveOffsets[index] || 0;

  return (
    <TouchableOpacity
      onPress={() => onPress(option.label)}
      style={{
        width: 50,
        height: 50,
        marginHorizontal: 4,
        transform: [{ translateY: verticalOffset }],
      }}
      activeOpacity={0.8}
    >
      <GradientButton
        isActive={option.isActive}
        style={{
          width: 50,
          height: 50,
          borderRadius: 16,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {option.image && (
          <Image
            source={option.image}
            style={{
              width: 20,
              height: 20,
              tintColor: option.isActive ? "white" : "#94a3b8",
            }}
            resizeMode="contain"
          />
        )}

        {option.text && (
          <Text
            style={{
              fontWeight: "600",
              textAlign: "center",
              color: option.isActive ? "white" : "#94a3b8",
            }}
          >
            {option.text}
          </Text>
        )}
      </GradientButton>
    </TouchableOpacity>
  );
}
