<script lang="ts" setup>
import {useDialog} from 'naive-ui'
// 挂载在 window
window['$dialog'] = useDialog()
</script>