// GlobalComponents for Volar
declare module "@vue/runtime-core" {
    export interface GlobalComponents {
        TgIcon: typeof import("threegold-ui")["TgIcon"];
    }

    interface ComponentCustomProperties {}
}

export {};
