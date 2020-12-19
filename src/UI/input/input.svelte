<script>
    export let controlType = 'input';
    export let id;
    export let label;
    export let type = 'text';
    export let value;
</script>

<style>
    @import './input.css';
</style>

<div class="form-control">
    <label for={id}>{label}</label>

    {#if controlType === 'textarea'}<textarea {id} {value} on:input />{:else}<input {id} {type} {value} on:input />{/if}
</div>
