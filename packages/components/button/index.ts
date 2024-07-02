import { withInstall } from "@threegold-ui/utils";
import Button from "./src/button.vue";

export const TgButton = withInstall(Button);
export default TgButton;

export * from "./src/button";
export type { ButtonProps } from "./src/button";
