<script>
    // import {onDestroy} from 'svelte';
    import cartItems from '../../store/cart';
    import Item from '../item/item.svelte';

    // let items;

    // const subscription = cartItems.subscribe(item => {
    //     items = item;
    // });

    // // Unsubscribe
    // onDestroy(() => {
    //     if (subscription) {
    //         subscription();
    //     }
    // });
</script>

<style>
    @import './cart.css';
</style>

<section>
    <h1>Cart</h1>
    <ul>
        {#each $cartItems as item (item.id)}
            <Item id={item.id} title={item.title} price={item.price} />
        {:else}
            <p>No items in cart yet!</p>
        {/each}
    </ul>
</section>
