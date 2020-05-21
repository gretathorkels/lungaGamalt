<template>
  <div class="modal-backdrop"
    v-show="isOpen"
    :class="{open: isOpen}"
    >
    <div class="modal-dialog" :class="{open: isOpen}" @click.stop >
      <div class="modal-close" @click="$emit('onClose')" >
        <div class="modal-button" >x</div>
        <div class="modal-label"><p>Close </p><p>pop-up</p></div>
      </div>
        <h1 class="modal-title" v-if="title">LungA 2020 Cancelled</h1>
      <div class="modal-body">
        <p>In these difficult times, we at team LungA have taken the difficult decision to postpone LungA's 20 year anniversary until summer 2021. 
          The reason is simple: we can't take the risk of gathering thousands of people together in Seyðisfjörður in the times of COVID 19. 
          That means all workshops and concerts will be canceled.</p>
        <p>We will try our best to celebrate creativity, arts, and culture by hosting smaller events for the locals of Seyðisfjörður. 
  We aim to use the magic of the internet and do an online art gallery. 
  Additionally, we will publish LungA's 20 years birthday book this summer and launch LungA's birthday merch on our website.</p>
<p>For those of you that have already bought tickets to this year LungA can get them refunded or use it for next year’s LungA by contacting tix.is.</p>
<p>This is a shock to all of us, as a lot of work and excitement has already been put into LungA's birthday but we react to these unpredictable times and 
  come back stronger than ever for 2021! </p>
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
  font-size: 0.8125rem;
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
  font-size: 1.5rem;
  font-weight: 600;
}
</style>