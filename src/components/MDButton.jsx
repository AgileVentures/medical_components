import { Button } from "@chakra-ui/react";
import { MDProvider } from "./MDProvider";

const MDButton = ({ colorScheme = "customBlue", ...props }) => {
  const bgColor = colorScheme === "customBlue" ? "customBlue.500" : undefined;
  const hoverBgColor =
    colorScheme === "customBlue" ? { bg: "customBlue.700" } : {};

  return (
    <MDProvider>
      <Button
        colorScheme={colorScheme}
        bg={bgColor}
        _hover={hoverBgColor}
        {...props} // Spread the rest of the props
      >
        {props.children}
      </Button>
    </MDProvider>
  );
};

export default MDButton;
