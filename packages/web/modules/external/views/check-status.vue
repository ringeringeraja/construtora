<template>
  <sv-form
    v-bind="{
      collection: 'customer',
      form: customerStore.useProperties([
        'name',
        'document'
      ]),
      formData: customerStore.item
    }"
  ></sv-form>

  <sv-button class="tw-self-end">
    Buscar
  </sv-button>
</template>

<script setup lang="ts">
import { SvForm, SvButton } from '@savitri/ui'
import { useStore } from '@savitri/web'

const customerStore = useStore('customer')
</script>
