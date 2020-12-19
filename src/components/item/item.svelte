<script>
    import {createEventDispatcher} from 'svelte';
    import Button from '../../UI/button/button.svelte';
    import Badge from '../../UI/badge/badge.svelte';

    const dispatch = createEventDispatcher();

    export let id;
    export let title;
    export let subtitle;
    export let image;
    export let description;
    export let email;
    export let address;
    export let isFavorite;
</script>

<style>
    @import './item.css';
</style>

<article>
    <header>
        <h1>
            {title}
            {#if isFavorite}
                <Badge>Favorite</Badge>
            {/if}
        </h1>
        <h2>{subtitle}</h2>
        <address>{address}</address>
    </header>
    <div class="image"><img src={image} alt={title} /></div>
    <div class="content">
        <p>{description}</p>
    </div>
    <footer>
        <a href="mailto:{email}">Contact me</a>
        <Button>Show Details</Button>
        <Button mode="outline" state={isFavorite ? null : 'success'} on:click={() => dispatch('togglefavorite', id)}>
            {isFavorite ? 'Dislike' : 'Favorite'}
        </Button>
    </footer>
</article>
