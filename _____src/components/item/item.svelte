<script>
    import cartItems from '../../store/cart';
    import Button from '../../UI/button/button.svelte';

    export let title;
    export let price;
    export let id;

    let showDescription = false;

    function displayDescription() {
        showDescription = !showDescription;
    }

    function removeFromCart() {
        cartItems.update(items => items.filter(item => item.id !== id));
    }
</script>

<style>
    @import './item.css';
</style>

<li>
    <h1>{title}</h1>
    <h2>{price}</h2>
    <Button mode="outline" on:click={displayDescription}>{showDescription ? 'Hide Description' : 'Show Description'}</Button>
    <Button on:click={removeFromCart}>Remove from Cart</Button>
    {#if showDescription}
        <p>Not available :(</p>
    {/if}
</li>
