<template>
  <main>
    <Button type="primary">App</Button>
  </main>
</template>

<script>
import { defineComponent } from 'vue'
import { Button } from 'ant-design-vue'

import { useAppShell } from '@/talons/AppShell'

export default defineComponent({
  name: 'AppShell',
  components: {
    Button
  },
  setup() {
    useAppShell()
  }
})
</script>
