<script>
    import products from '../../store/products';
    import Product from '../product/product.svelte';
</script>

<style>
    section {
        width: 30rem;
        max-width: 90%;
        margin: 2rem auto;
    }
</style>

<section>
    <h1>Products</h1>
    {#each $products as product (product.id)}
        <Product id={product.id} title={product.title} price={product.price} description={product.description} />
    {/each}
</section>
