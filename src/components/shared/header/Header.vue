<template>
  <div class="header">
    <div class="language-options" @click="$emit('shiftLanguage')">
         <div v-bind:class="{ active: isActive[0] }" class="checkbox"></div>
          Íslenska
          <div v-bind:class="{ active: isActive[1] }" class="checkbox" ></div>
          English
    </div>
    <div v-if="location" class="nav-menu">Valmynd</div>
  </div>
</template>

<script>

export default {
  name: "Header",
  props: {
      isActive: Array,
      location: Boolean,
  }

};
</script>
<style>
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.nav-menu {
  font-size: 96px;
  font-weight: 600;
}
.checkbox {
  margin: 0 4px 0 15px;
  border: 2px solid #000000;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
}
.active {
  background: #00FF38;
}
.language-options {
  display: flex;
}
</style>
