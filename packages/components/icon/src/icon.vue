<script setup lang="ts">
import { computed } from "vue";
import { useNamespace } from "@threegold-ui/hooks/use-namespace";
import { iconProps } from "./icon";
import type { CSSProperties } from "vue";

const props = defineProps(iconProps);
const ns = useNamespace("icon");
defineOptions({
    name: "TgIcon",
});
const style = computed<CSSProperties>(() => {
    // 根据传入的props计算样式
    const style: CSSProperties = {};
    if (props.size) {
        style.fontSize = props.size;
    }
    if (props.color) {
        style.color = props.color;
    }
    return style;
});
const classes = computed(() => {
    // 根据传入的props计算类名
    const classes = [];
    if (props.name) {
        classes.push(ns.b("icon"));
        classes.push(ns.b(`icon-${props.name}`));
    }
    return classes;
});
</script>
<template>
    <i :class="classes" :style="style">
        <slot />
    </i>
</template>
<style lang="scss" scoped></style>
