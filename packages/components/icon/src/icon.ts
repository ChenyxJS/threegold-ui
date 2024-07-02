// 这里准备组件的属性和ts类型

import type { ExtractPropTypes, PropType } from "vue";

export const iconProps = {
    name: String,
    size: [String, Number] as PropType<number | string>,
    color: String,
} as const;

export type IconProps = ExtractPropTypes<typeof iconProps>;
