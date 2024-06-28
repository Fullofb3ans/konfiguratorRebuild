<script setup></script>
<template>
  <div class="fixedMark">
    <div class="marknnumbers">
      <div id="mark-gen" class="lead mb-3 form-control">ЭП4-X-X-X-X-X-X-XX</div>
    </div>
  </div>
</template>
<style scoped>
.fixed-mark {
  position: sticky;
  top: 0;
  z-index: 99999;
  background-color: #f5821f;
  padding: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

#mark-gen {
  background-color: #fff;
  padding: 10px;
  /* border-radius: 8px; */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 1.2rem;
  word-break: break-word;
  color: #333;
  text-align: center;
}

.mark-numbers {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
