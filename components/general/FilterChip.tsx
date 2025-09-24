import GradientButton from "@/components/general/GradientButton";
import { Image, Text, View } from "react-native";

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
    <View
      className="flex-1 mx-1"
      style={{ transform: [{ translateY: verticalOffset }] }}
    >
      <GradientButton
        isActive={option.isActive}
        className="w-full"
        gradientClassName="py-3 rounded-2xl h-[50px] w-[50px] items-center justify-center"
        onPress={() => onPress(option.label)}
      >
        {option.image && (
          <Image
            source={option.image}
            style={{
              width: 20,
              height: 20,
              tintColor: option.isActive ? "white" : "#94a3b8"
            }}
            resizeMode="contain"
          />
        )}

        {option.text && (
          <Text className={`font-semibold text-center ${option.isActive ? 'text-white' : 'text-slate-300'}`}>
            {option.text}
          </Text>
        )}
      </GradientButton>
    </View>
  );
}