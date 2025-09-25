import GradientButton from "@/components/general/GradientButton";
import SearchBar from "@/components/general/SearchBar";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Text, View } from "react-native";

interface HeaderProps {
  title: string;
  onSearch?: (query: string) => void;
}

export default function Header({ title, onSearch }: HeaderProps) {
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchToggle = () => {
    setShowSearch(!showSearch);
    if (showSearch && onSearch) {
      onSearch(""); // Clear search when closing
    }
  };

  const handleSearch = (query: string) => {
    if (onSearch) {
      onSearch(query);
    }
  };

  const handleSearchClose = () => {
    setShowSearch(false);
    if (onSearch) {
      onSearch(""); // Clear search when closing
    }
  };

  if (showSearch) {
    return (
      <View className="mb-6">
        <SearchBar
          onSearch={handleSearch}
          onClose={handleSearchClose}
          placeholder="Search bikes..."
        />
      </View>
    );
  }

  return (
    <View className="flex-row font-poppins-bold justify-between items-center mb-2">
      <Text className="text-white text-3xl font-bold">{title}</Text>
      <GradientButton onPress={handleSearchToggle}>
        <Ionicons name="search" size={24} color="white" />
      </GradientButton>
    </View>
  );
}