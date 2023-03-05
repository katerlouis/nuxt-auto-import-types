<template>
  <div class="note">
    Note: {{ noteName }}
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  // no idea how to say `note` is required
  note: MyNote, // why is this linter not happy here?
}>();

const note = computed(() => getNote(props.note)); // but getNote is auto-imported?
const noteName = computed(() => note.value.name);
</script>

<style lang="scss" scoped>
// 
</style>
