<script>
    export let controlType = 'input';
    export let id;
    export let label;
    export let type = 'text';
    export let value;
    export let isValid = true;
    export let message = '';

    let hasBeenTouched = false;
</script>

<style>
    @import './input.css';
</style>

<div class="form-control">
    <label for={id}>{label}</label>

    {#if controlType === 'textarea'}
        <textarea
            {id}
            {value}
            on:input
            on:blur={() => {
                hasBeenTouched = true;
            }}
            class:invalid={!isValid && hasBeenTouched} />
    {:else}
        <input
            {id}
            {type}
            {value}
            on:input
            on:blur={() => {
                hasBeenTouched = true;
            }}
            class:invalid={!isValid && hasBeenTouched} />
    {/if}
    {#if message && !isValid && hasBeenTouched}
        <p class="message">{message}</p>
    {/if}
</div>
