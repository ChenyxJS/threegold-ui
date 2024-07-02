import { withInstall } from "@threegold-ui/utils";
import Icon from "./src/icon.vue";

export const TgIcon = withInstall(Icon);

export default TgIcon;

export * from "./src/icon";

// declare module "vue" {
//     export interface GlobalComponents {
//         TgIcon: typeof TgIcon;
//     }
// }
