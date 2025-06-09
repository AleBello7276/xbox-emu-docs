<script setup>
import DefaultTheme from "vitepress/theme";
import { onMounted } from "vue";
import { useRouter } from "vitepress";
import mediumZoom from "medium-zoom";

const { Main } = DefaultTheme;
const router = useRouter();

const setupZoom = () => {
  mediumZoom("[data-zoomable]", {
    background: "transparent",
  });
};

onMounted(setupZoom);
router.onAfterRouteChanged = setupZoom;


</script>

<style>
    .zoom-overlay {
        backdrop-filter: blur(10px);
    }

    .zoom-overlay,
    .zoom-image--opened {
        z-index: 10000;
    }
</style>

<template>
    <Main />
</template>