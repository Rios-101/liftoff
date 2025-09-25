import { images } from "@/constant";
import { Tabs } from "expo-router";
import React from "react";
import { Dimensions, Image, TouchableOpacity, View } from "react-native";
import Svg, {
  ClipPath,
  Defs,
  G,
  LinearGradient,
  Path,
  Stop,
} from "react-native-svg";

const { width: screenWidth } = Dimensions.get("window");

// Custom Tab Bar Component
function CustomTabBar({ state, descriptors, navigation }: any) {
  return (
    <View style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
      {/* SVG Background with slant */}
      <Svg
        width={screenWidth + 60}
        height={103}
        viewBox={`-30 0 ${screenWidth + 60} 103`}
        fill="url(#paint0_linear)"
        style={{
          position: "absolute",
          bottom: -20,

          left: -30,
          backgroundColor: "transparent",
        }}
      >
        <Defs>
          <ClipPath id="bgblur_clip_path">
            <Path
              d={`M-30 20L${screenWidth + 30} 0V53.5C${screenWidth + 30
                } 81.1142 ${screenWidth + 30 - 22.3858} 103.5 ${screenWidth + 30 - 50
                } 103.5H20C-7.6142 103.5 -30 81.1142 -30 53.5V20Z`}
            />
          </ClipPath>
          <LinearGradient
            id="paint0_linear"
            x1="0"
            y1="0"
            x2="0"
            y2="103"
            gradientUnits="userSpaceOnUse"
          >
            <Stop offset="0" stopColor="#363E51" />
            <Stop offset="1" stopColor="#181C24" />
          </LinearGradient>
          <LinearGradient
            id="paint1_linear"
            x1="50%"
            y1="0%"
            x2="50%"
            y2="40%"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="white" />
            <Stop offset="1" stopOpacity="0" />
          </LinearGradient>
        </Defs>
        <G>
          <Path
            d={`M-30 20L${screenWidth + 30} 0V53.5C${screenWidth + 30
              } 81.1142 ${screenWidth + 30 - 22.3858} 103.5 ${screenWidth + 30 - 50
              } 103.5H20C-7.6142 103.5 -30 81.1142 -30 53.5V20Z`}
            fill="url(#paint0_linear)"
            fillOpacity="1"
          />
          <Path
            d={`M${screenWidth + 30 - 1} 53.5C${screenWidth + 30 - 1} 80.562 ${screenWidth + 30 - 22.938
              } 102.5 ${screenWidth + 30 - 50
              } 102.5H20C-7.062 102.5 -29 80.562 -29 53.5V20.9502L${screenWidth + 30 - 1
              } 1.05273V53.5Z`}
            stroke="url(#paint1_linear)"
            strokeOpacity="0.2"
            strokeWidth="2"
          />
        </G>
      </Svg>

      {/* Tab Icons */}
      <View
        style={{
          flexDirection: "row",
          paddingTop: 15,
          paddingBottom: 5,
          // paddingHorizontal: 10,
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {state.routes.map((route: any, index: number) => {
          const isFocused = state.index === index;
          const { options } = descriptors[route.key];

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const getIcon = () => {
            const iconStyle = {
              width: 28,
              height: 28,
              tintColor: isFocused ? "white" : "rgba(255,255,255,0.6)",
              resizeMode: "contain" as const,
            };

            switch (route.name) {
              case "index": // Home tab
                return (
                  <Image source={images.iconBike} style={iconStyle} />
                );
              case "map":
                return (
                  <Image source={images.menu1} style={iconStyle} />
                );
              case "cart":
                return (
                  <Image source={images.menu2} style={iconStyle} />
                );
              case "person":
                return (
                  <Image source={images.menu3} style={iconStyle} />
                );
              case "file":
                return (
                  <Image source={images.menu4} style={iconStyle} />
                );
              default:
                return null;
            }
          };

          return (
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              key={index}
            >
              {/* Active Indicator SVG */}
              {isFocused && (
                <Svg
                  width="150"
                  height="100"
                  viewBox="0 0 107 111"
                  fill="none"
                  style={{
                    position: "absolute",
                    top: -12,
                    zIndex: 1,
                    transform: [{ translateX: 3 }],
                  }}
                >
                  <Defs>
                    <LinearGradient
                      id={`active_gradient_${index}`}
                      x1="20"
                      y1="8"
                      x2="61.7906"
                      y2="89.0429"
                      gradientUnits="userSpaceOnUse"
                    >
                      <Stop stopColor="#34C8E8" />
                      <Stop offset="1" stopColor="#4E4AF2" />
                    </LinearGradient>
                    <LinearGradient
                      id={`active_stroke_${index}`}
                      x1="17"
                      y1="8"
                      x2="51.0751"
                      y2="80.2302"
                      gradientUnits="userSpaceOnUse"
                    >
                      <Stop stopColor="white" />
                      <Stop offset="1" stopOpacity="0" />
                    </LinearGradient>
                  </Defs>
                  <G>
                    <Path
                      d="M17 28.198C17 23.4312 20.3646 19.3271 25.0388 18.3922L65.0388 10.3922C71.2268 9.15465 77 13.8876 77 20.198V47.802C77 52.5688 73.6354 56.6729 68.9612 57.6078L28.9612 65.6078C22.7732 66.8454 17 62.1124 17 55.802V28.198Z"
                      fill={`url(#active_gradient_${index})`}
                    />
                    <Path
                      d="M65.1367 10.8828C71.0152 9.70711 76.5 14.2033 76.5 20.1982V47.8018C76.5 52.3302 73.3037 56.229 68.8633 57.1172L28.8633 65.1172C22.9848 66.2929 17.5 61.7967 17.5 55.8018V28.1982C17.5 23.6698 20.6963 19.771 25.1367 18.8828L65.1367 10.8828Z"
                      stroke={`url(#active_stroke_${index})`}
                      strokeOpacity="0.6"
                    />
                  </G>
                </Svg>
              )}

              {/* Tab Button */}
              <TouchableOpacity
                onPress={onPress}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  paddingVertical: 25,
                  paddingHorizontal: 30,
                  marginLeft: -8,
                  position: "relative",
                  zIndex: 3,
                }}
              >
                <View
                  style={{
                    transform: [{ translateY: isFocused ? -15 : 0 }],
                    zIndex: 2,
                  }}
                >
                  {getIcon()}
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </View>
  );
}

// Main Tab Layout
export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen name="index" />   {/* bike */}
      <Tabs.Screen name="map" />     {/* menu1 */}
      <Tabs.Screen name="cart" />    {/* menu2 */}
      <Tabs.Screen name="person" />  {/* menu3 */}
      <Tabs.Screen name="file" />    {/* menu4 */}
    </Tabs>
  );
}
