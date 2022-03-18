<template>
  <AntdConfigProvider :prefixCls="prefixCls">
    <Header />
    <app-shell />
    <router-view />
  </AntdConfigProvider>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { ConfigProvider as AntdConfigProvider } from 'ant-design-vue'

import { ThemeConf } from '@/config/theme.conf'
import Header from '@/components/Header/header'
import AppShell from '@/components/AppShell/appShell'

export default defineComponent({
  name: 'App',
  components: {
    AppShell,
    Header,
    AntdConfigProvider
  },
  setup() {
    const prefixCls = ref(null)

    prefixCls.value = ThemeConf.prefix

    return {
      prefixCls
    }
  }
})
</script>
