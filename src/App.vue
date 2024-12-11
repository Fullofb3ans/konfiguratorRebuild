<template>
    <PageHeader />
    <div class="main-content">
        <RouterView />
    </div>
    <PageFooter />
</template>
<script>
import PageHeader from "./components/layout/PageHeader.vue";
import PageFooter from "./components/layout/PageFooter.vue";
export default {
    components: {
        PageHeader,
        PageFooter
    }
}
</script>
