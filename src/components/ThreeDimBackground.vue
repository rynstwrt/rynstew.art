<script setup>




</script>



<template>
    <!--<TresCanvas-->
    <!--    :windowSize="true"-->
    <!--    style="z-index: -1"-->
    <!--    :alpha="true"     >-->
    <!--<TresCanvas :alpha="true" window-size>-->
    <TresPerspectiveCamera
        :position="[0, 0, 5]"
        :lookAt="[0, 0, 0]"
        :fov="0.1" />

    <TresMesh
        ref="meshRef"
        :position="[0, 0, 0]">
        <TresBoxGeometry
            :args="[2, 2, 2]" />
        <TresMeshBasicMaterial
            :color="0x00FF00"
            :wireframe="true" />
    </TresMesh>

    <TresAxesHelper />
    <TresGridHelper />
    <!--</TresCanvas>-->
</template>



<style lang="scss" scoped>

</style>