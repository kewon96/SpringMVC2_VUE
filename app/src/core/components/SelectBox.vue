<template>
  <label>{{ title }}</label>

  <article>
    <select v-model="modelValue"
            :disabled="disabled"
    >
      <option :value="undefined">==배송 방식 선택==</option>
      <option v-for="delivery in deliveryCodes"
              :value="delivery.code"
      >
        {{ delivery.displayName }}
      </option>
    </select>
  </article>
</template>

<script setup lang="ts">
import {nextTick, onMounted, reactive, ref, watch, watchEffect} from "vue";
import {http} from "@/core";
import {ItemValid} from "@/views/item/validator/ItemValid";


/******** Type & Interface **********/


/******** Instance **********/


/******** Reactive Instance **********/

const props = defineProps<{
  disabled: boolean
  title: string
  modelValue?: string
}>()

const emits = defineEmits<{
  ( e: 'update:modelValue', code: string | undefined ): void
}>()

const deliveryCodes = reactive<DeliveryCode[]>([])


/******** Hooks **********/

onMounted(fetchDeliveryCodes)
watchEffect(() => {
  emits('update:modelValue', props.modelValue)
})

/******** Functions **********/
async function fetchDeliveryCodes(): Promise<void> {
  const { data } = await http.get("/item/get/deliveryCodes")
  Object.assign(deliveryCodes, data)
}

</script>

<style scoped>

</style>