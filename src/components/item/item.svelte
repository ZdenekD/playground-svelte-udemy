<script>
    import {createEventDispatcher} from 'svelte';
    import {fade} from 'svelte/transition';
    import meetups from '../../store/meetups';
    import Button from '../../UI/button/button.svelte';
    import Badge from '../../UI/badge/badge.svelte';

    export let id;
    export let title;
    export let subtitle;
    export let image;
    export let description;
    export let email;
    export let address;
    export let isFavorite;

    const dispatch = createEventDispatcher();
    const toggleFavorite = () => {
        meetups.toggleFavorite(id);
    };
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
    <div class="image"><img transition:fade={{duration: 400}} src={image} alt={title} /></div>
    <div class="content">
        <p>{description}</p>
    </div>
    <footer>
        <a href="mailto:{email}">Contact me</a>
        <Button type="button" mode="outline" on:click={() => dispatch('edit', id)}>Edit</Button>
        <Button on:click={() => dispatch('detail', id)}>Show Details</Button>
        <Button mode="outline" state={isFavorite ? null : 'success'} on:click={toggleFavorite}>{isFavorite ? 'Dislike' : 'Favorite'}</Button>
    </footer>
</article>
