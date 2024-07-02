import type { ExtractPropTypes, PropType } from "vue";

export type ButtonType =
    | "primary"
    | "success"
    | "warning"
    | "danger"
    | "info"
    | "";
export type ButtonSize = "large" | "medium" | "small";

export const buttonProps = {
    type: {
        type: String as PropType<ButtonType>,
        validator: (val: string) =>
            ["primary", "success", "warning", "danger", "info", ""].includes(
                val
            ),
        default: "",
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    round: {
        type: Boolean,
        default: false,
    },
    size: {
        type: String as PropType<ButtonSize>,
        default: "medium",
    },
    loading: {
        type: Boolean,
        default: false,
    },
    icon: {
        type: String,
        default: "",
    },
    nativeType: {
        type: String,
        default: "button",
    },
} as const;

export const buttonEmits = {
    click: (event: MouseEvent) => event instanceof MouseEvent,
    mousedown: (event: MouseEvent) => event instanceof MouseEvent,
};

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
export type ButtonEmits = typeof buttonEmits;
