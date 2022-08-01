<template>
  <article>
    <select v-model="props.modelValue"
            :disabled="props.disabled"
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
import {DeliveryCode} from "@/views/item/type";
import {http} from "@/core";


/******** Type & Interface **********/


/******** Instance **********/


/******** Reactive Instance **********/
const props = defineProps<{
  disabled: boolean
  modelValue: string
}>()
const deliveryCodes = reactive<DeliveryCode[]>([])

/******** Hooks **********/
onMounted(fetchDeliveryCodes)

/******** Functions **********/
async function fetchDeliveryCodes(): Promise<void> {
  const { data } = await http.get("/item/get/deliveryCodes")
  Object.assign(deliveryCodes, data)
}

</script>

<style scoped>

</style>