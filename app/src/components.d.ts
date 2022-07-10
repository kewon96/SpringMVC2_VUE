import MoveButton from "@/core/components/button/MoveButton.vue";

declare module '@vue/runtime-core' {
    export interface GlobalComponents {
        MoveButton: typeof MoveButton
    }
}

