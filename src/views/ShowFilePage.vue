<script setup>
const props = defineProps(["path"]);

const file = props.path || "/";
window.location.href = file;

</script>