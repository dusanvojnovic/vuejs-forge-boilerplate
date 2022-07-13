<script setup lang="ts">
import { useAlerts } from '@/stores/alerts';
import { Fade } from '@progress/kendo-vue-animation';
import {
  Notification,
  NotificationGroup,
} from '@progress/kendo-vue-notification';
import { storeToRefs } from 'pinia';

const store = useAlerts();
const { remove } = store;

const { items } = storeToRefs(store);
</script>

<template>
  <div class="z-10">
    <NotificationGroup
      :style="{
        right: '10px',
        bottom: '10px',
        alignItems: 'flex-start',
        flexWrap: 'wrap-reverse',
      }"
    >
      <Fade v-for="alert in items" :key="alert.id" appear>
        <Notification
          :type="{
            style: alert.style,
            icon: true,
          }"
          :closable="true"
          @close="remove(alert.id)"
        >
          <div v-if="alert.html" v-html="alert.message"></div>
          <div v-else>{{ alert.message }}</div>
          <span>{{ alert.message }}</span>
        </Notification>
      </Fade>
    </NotificationGroup>
  </div>
</template>
