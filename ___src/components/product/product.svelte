<script>
    import {createEventDispatcher} from 'svelte';

    export let title;
    export let price;
    export let bestseller = false;

    const dispatch = createEventDispatcher();
    const add = () => {
        dispatch('add', {data: 'Hello world!'});
    };
    const remove = () => {
        dispatch('delete');
    };
</script>

<article>
    <h1>{title}</h1>
    <h2>${price}</h2>

    {#if bestseller}
        <h3>Bestseller</h3>
    {/if}

    <button on:click={add}>Add to Cart</button>
    <button on:click={remove}>Delete</button>
</article>
