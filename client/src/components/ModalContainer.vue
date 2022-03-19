<template>
  <b-modal
    :title="title"
    ref="diner-modal"
    hide-footer
  >

    <slot>
        <h2>Sample Text</h2>
    </slot>

  </b-modal>
</template>

<script>
export default {
  name: "ModalContainer",
  props:
    {
      title: String,
    },
  methods: {
    showModal() {
      this.$refs["diner-modal"].show();
    },
    hideModal() {
      this.$refs["diner-modal"].hide();
    },
  },
};
</script>

<style>

</style>
