<script>
    export let props;
</script>

<style>
.contact-card {
    max-width: 30rem;
    margin: 1rem 0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .26);
    border-radius: 5px;
}

header {
    height: 7rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.thumb {
    width: 33%;
    height: 100%;
    margin: 1rem;
}

.thumb-placeholder {
    background: #333;
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.data {
    width: 67%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

h1 {
    margin: .5rem 0;
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
}

h2 {
    margin: 0;
    margin-bottom: .5rem;
    color: #5a5a5a;
    font-size: 1rem;
    font-weight: normal;
}

section {
    padding: 1rem;
    border-top: 1px solid #ccc;
}
</style>

<div class="contact-card">
    <header>
        <div class="thumb" class:thumb-placeholder={!props.image}>
            <img src={props.image} alt={props.username} />
        </div>
        <div class="data">
            <h1>{props.username}</h1>
            <h2>{props.title}</h2>
        </div>
    </header>

    <section>
        <p>{props.description}</p>
    </section>
</div>
