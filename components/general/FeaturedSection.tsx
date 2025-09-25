import FeaturedBikeCard from "@/components/general/FeaturedBikeCard";
import FilterChips from "@/components/general/FilterChips";
import { View } from "react-native";

interface FilterOption {
  label: string;
  text?: string;
  image?: any;
  isActive: boolean;
}

interface FeaturedSectionProps {
  discount: string;
  image: any;
  filterOptions: FilterOption[];
  onFilterPress: (label: string) => void;
}

export default function FeaturedSection({
  discount,
  image,
  filterOptions,
  onFilterPress
}: FeaturedSectionProps) {
  return (
    <View className="relative pb-10 my-5">
      {/* Featured Bike Card */}
      <FeaturedBikeCard
        discount={discount}
        image={image}
      />

      {/* Filter Chips */}
      <FilterChips
        options={filterOptions}
        onFilterPress={onFilterPress}
      />
    </View>
  );
}