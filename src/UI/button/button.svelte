<script>
    export let type = 'button';
    export let mode = null;
    export let state = null;
    export let disabled = false;
</script>

<style>
    @import './button.css';
</style>

<button class="{mode} {state}" {type} {disabled} on:click><slot /></button>
