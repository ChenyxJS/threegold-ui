<script setup lang="ts">
import { useNamespace } from "@threegold-ui/hooks";
import { buttonEmits, buttonProps } from "./button";

defineOptions({
    name: "TgButton",
});
const props = defineProps(buttonProps);
const emits = defineEmits(buttonEmits);

const ns = useNamespace("button");

function emitClick(e: MouseEvent) {
    emits("click", e);
}
</script>
<template>
    <button
        :class="[
            ns.b(),
            ns.m(props.size),
            ns.m(props.type),
            ns.is('loading', props.loading),
            ns.is('disabled', props.disabled),
            ns.is('round', props.round),
        ]"
        @click="emitClick"
    >
        <slot />
    </button>
</template>
