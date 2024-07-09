/* prettier-ignore */
// @ts-nocheck
import '@vue/runtime-core'

declare module "@vue/runtime-core" {
    export interface GlobalComponents {
        TgIcon: typeof import("threegold-ui")["TgIcon"];
        TgButton: typeof import("threegold-ui")["TgButton"];
    }
    interface ComponentCustomProperties {
        $t: typeof import("vue-i18n")["default"]["$t"];
    }
}

export {};
