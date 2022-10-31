<template>
  <article>
    <select v-model="modelValue"
            :disabled="disabled"
            @change="updateValue"
    >
      <option value="undefined">==배송 방식 선택==</option>
      <option v-for="delivery in deliveryCodes"
              :value="delivery.code"
      >
        {{ delivery.displayName }}
      </option>
    </select>
  </article>
</template>

<script setup lang="ts">
import {onMounted, reactive} from "vue";
import {DeliveryCode, ItemType} from "@/types/Type";
import {http} from "@/core";


/******** Type & Interface **********/


/******** Instance **********/


/******** Reactive Instance **********/
const props = defineProps<{
  disabled: boolean
  modelValue?: string
}>()

const emits = defineEmits<{
  ( e: 'update:modelValue', code: string ): void
}>()

const deliveryCodes = reactive<DeliveryCode[]>([])

/******** Hooks **********/
onMounted(fetchDeliveryCodes)

/******** Functions **********/
async function fetchDeliveryCodes(): Promise<void> {
  const { data } = await http.get("/item/get/deliveryCodes")
  Object.assign(deliveryCodes, data)
}

function updateValue() {
  emits('update:modelValue', props.modelValue)
}

</script>

<style scoped>

</style>