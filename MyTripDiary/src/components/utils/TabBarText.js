import React from "react";
import { Text, themeColor, useTheme } from "react-native-rapi-ui";

/**
 * A functional component that renders a text label based on whether it is focused or not.
 * @param {Object} props - The props for the component.
 * @param {string} props.title - The text to display in the label.
 * @param {boolean} props.focused - Whether the label is currently focused or not.
 * @returns {JSX.Element} - Returns the JSX for the label component.
 */
export default (props) => {
  const { isDarkmode } = useTheme();
  return (
    <Text
      fontWeight="bold"
      style={{
        marginBottom: 5,
        color: props.focused
          ? isDarkmode
            ? themeColor.white100
            : themeColor.primary
          : "rgb(143, 155, 179)",
        fontSize: 10,
      }}
    >
      {props.title}
    </Text>
  );
};
