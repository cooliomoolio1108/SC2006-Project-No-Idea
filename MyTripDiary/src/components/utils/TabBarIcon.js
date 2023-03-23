import React from "react";
import { themeColor, useTheme } from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";

/**
 * A reusable component that renders an Ionicons icon.
 * @param {Object} props - The props for the component.
 * @param {string} props.icon - The name of the Ionicons icon to render.
 * @param {boolean} props.focused - A boolean value that indicates whether the component is currently focused.
 * @returns {JSX.Element} - The rendered Ionicons icon component.
 */
export default (props) => {
  const { isDarkmode } = useTheme();
  return (
    <Ionicons
      name={props.icon}
      style={{ marginBottom: -7 }}
      size={24}
      color={
        props.focused
          ? isDarkmode
            ? themeColor.white100
            : themeColor.primary
          : "rgb(143, 155, 179)"
      }
    />
  );
};
