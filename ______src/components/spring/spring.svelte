<script>
    import {writable} from 'svelte/store';
    import {spring} from 'svelte/motion';

    const cards = writable([
        {
            id: 'c1',
            color: 'red',
        },
        {
            id: 'c2',
            color: 'blue',
        },
        {
            id: 'c3',
            color: 'green',
        },
        {
            id: 'c4',
            color: 'orange',
        },
    ]);
    const cardPos = spring(
        [
            {
                rotation: 10,
                dx: 0,
            },
            {
                rotation: -10,
                dx: 0,
            },
            {
                rotation: 19,
                dx: 0,
            },
            {
                rotation: -25,
                dx: 0,
            },
        ],
        {
            stiffness: 0.05,
            damping: 0.9,
            precision: 0.001,
        },
    );

    const discard = index => {
        cardPos.update(items => {
            const updatedCardPositions = [...items];
            const updatedCardPos = {...updatedCardPositions[index]};

            updatedCardPos.dx = 1200;
            updatedCardPos.rotation = 60;
            updatedCardPositions[index] = updatedCardPos;

            return updatedCardPositions;
        });
    };
</script>

<style>
    @import './spring.css';
</style>

<div class="page">
    <div class="cards">
        {#each $cards as card, i (card.id)}
            <div
                class="card"
                style="background: {card.color};
    transform: rotateZ({$cardPos[i].rotation}deg) translateX({$cardPos[i].dx}px);"
                on:click={discard.bind(this, i)} />
        {/each}
    </div>
</div>
