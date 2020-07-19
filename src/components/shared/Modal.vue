<template>
  <div class="modal-backdrop"
    v-show="isOpen"
    :class="{open: isOpen}"
    >
    <div class="modal-dialog" :class="{open: isOpen}" @click.stop >
      <div class="modal-close" @click="$emit('onClose')" >
        <div class="modal-button" >×</div>
        <div class="modal-label"><p>Close</p></div>
      </div>
        <h1 class="modal-title" v-if="title">LungA Webshop Launch!!</h1>
      <div class="modal-body">
        <p><a href="">→WEBSHOP←</a></p>
        <p>LungA 2020 may have been cancelled because of Covid-19 – but we organized our merch archives and have at last set up a webshop! Here you can purchase merchandise from the last ten years. Take a look!</p>
<p>Stay tuned on our social media as we will keep you updated with more information. 
<br/> See you in 2021!</p>

<p>Love, <br/>
Team LungA </p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    isOpen: Boolean,
    title: String
  }
}
</script>

<style scoped>
.modal-backdrop {
  background: unset;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center
}

.modal-dialog {
  width: 80rem;
  height: 51rem;
  background: rgb(255, 255, 255);
  padding: 1.5rem 2rem;
  box-shadow: 0 10px 15px -3px rgba(0, 255, 56, 0.1), 0 4px 6px -2px rgba(0, 255, 56, 0.05);
  text-align: center;
  border: 2px solid #00FF38;
}
.modal-close {
  color: #00FF38;
  position: absolute;
  text-align: right;
  left: 73rem;
  top: -4rem;
}
.modal-close:hover{
  cursor: pointer;
}
.modal-label {
  font-weight: 600;
  font-size: 1rem;
  text-align: center;
  position: absolute;
  top: 11rem;
  left: 1rem;
}
.modal-label > p{
  margin: 0;
  padding: 0;
}
.modal-title {
  font-weight: 600;
  font-size: 3rem;
  color: #00FF38;
  margin-bottom: 1rem;

}
.modal-button {
  font-weight: 600;
  font-size: 9rem; 
}
.modal-body {
  color: #000;
  margin: 0 35px 0 35px;
  font-size: 2.5rem;
  font-weight: 600;
}
</style>