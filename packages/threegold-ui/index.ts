import installer from "./defaults";
export * from "../components";
export * from "../hooks";
export * from "./make-installer";

export const install = installer.install;
export default installer;
