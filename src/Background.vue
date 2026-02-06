<script setup>
import "css/global.css";
import { useLoop } from "@tresjs/core";
import { ref, shallowRef } from "vue";

const donutRef = shallowRef(null);
const {onBeforeRender} = useLoop();

onBeforeRender(({elapsed}) => {
    if (donutRef.value) {
        // Rotate the donut on both X and Y axes
        donutRef.value.rotation.x = elapsed * 0.5
        donutRef.value.rotation.y = elapsed * 0.3
    }
})
</script>


<template>
    <TresCanvas>
        <TresPerspectiveCamera :position="[0, 0, 5]" />

        <!-- The Donut -->
        <!--<TresMesh ref="donutRef" :position="[0, 2, 0]">-->
        <TresMesh>
            <TresBoxGeometry />
            <TresMeshBasicMaterial :color="0xff00ff"/>
            <!--<TresTorusGeometry :args="[1, 0.4, 16, 32]" />-->
            <!--<TresMeshBasicMaterial color="#ff6b35" />-->
        </TresMesh>

    </TresCanvas>
</template>