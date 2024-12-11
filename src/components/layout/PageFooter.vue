<template>
  <footer class="footer-wrapper bg-light mt-auto">
    <div class="footer-container container">
      <div class="row">
        <div class="col-md-6">
          <p>&copy; {{ currentYear }}</p>
        </div>
        <div class="col-md-6 text-md-end">
          <ul class="list-inline">
            <li class="list-inline-item">
              <a href="#">Поддержка сайта</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  setup() {

    return {
      currentYear: (new Date).getFullYear(),
    }
  }
}
</script>