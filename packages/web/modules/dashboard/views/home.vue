<template>
  <div class="
    tw-flex
    tw-flex-wrap
    tw-gap-6
  ">
    <sv-box class="tw-w-full">
      <pre>{{
          {
            $id: store.description.$id,
            properties: store.description.properties
          }
        }}
      </pre>
    </sv-box>
    <sv-box class="tw-flex-1">
      <sv-form
        v-bind="{
          collection: 'construction',
          form: store.properties,
          formData: store.item
        }"
      ></sv-form>
    </sv-box>

    <sv-box class="tw-w-2/5">
      <pre>{{
        store.item
      }}
      </pre>
    </sv-box>
  </div>
</template>

<script setup lang="ts">
import { SvBox, SvForm } from '@savitri/ui'
import { useStore } from '@savitri/web'

const store = useStore('construction')
</script>
