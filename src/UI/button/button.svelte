<script>
    export let type = 'button';
    export let mode = null;
    export let state = null;
</script>

<style>
    @import './button.css';
</style>

<button class="{mode} {state}" {type} on:click><slot /></button>
