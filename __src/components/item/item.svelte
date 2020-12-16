<style>
@import './item.css';
</style>

<script>
import Button from '../../UI/button/button.svelte';

export let title;
export let subtitle;
export let image;
export let description;
export let email;
export let address;
</script>

<article>
    <header>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <address>
            {address}
        </address>
    </header>
    <div class="image">
        <img src={image} alt={title} />
    </div>
    <div class="content">
        <p>
            {description}
        </p>
    </div>
    <footer>
        <a href="mailto:{email}">Contact me</a>
        <Button content="Show Details" />
        <Button content="Favorite" mode="outline" />
    </footer>
</article>
