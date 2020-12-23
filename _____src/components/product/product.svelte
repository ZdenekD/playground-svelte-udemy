<script>
    import cartItems from '../../store/cart';
    import Button from '../../UI/button/button.svelte';

    export let id;
    export let title;
    export let price;
    export let description;

    const addToCart = () => {
        cartItems.update(items => [
            ...items,
            {
                id,
                title,
                price,
            },
        ]);
    };
</script>

<style>
    @import './product.css';
</style>

<div class="product">
    <div>
        <h1>{title}</h1>
        <h2>{price}</h2>
        <p>{description}</p>
    </div>
    <div>
        <Button on:click={addToCart}>Add to Cart</Button>
    </div>
</div>
