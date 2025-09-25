import FilterChip from "@/components/general/FilterChip";
import { View } from "react-native";

interface FilterOption {
  label: string;
  text?: string;
  image?: any;
  isActive: boolean;
}

interface FilterChipsProps {
  options: FilterOption[];
  onFilterPress: (label: string) => void;
}

export default function FilterChips({ options, onFilterPress }: FilterChipsProps) {
  return (
    <View className=" absolute bottom-1 w-full">
      <View className="flex-row justify-between" style={{ minHeight: 80 }}>
        {options.map((option, index) => (
          <FilterChip
            key={index}
            option={option}
            index={index}
            onPress={onFilterPress}
          />
        ))}
      </View>
    </View>
  );
}