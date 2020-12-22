<script>
    import {onMount} from 'svelte';
    import hobbyStore from '../../store/hobby';

    let input;
    let isLoading = false;

    const getHobbies = fetch('https://svelte-c89da-default-rtdb.europe-west1.firebasedatabase.app/hobbies.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed!');
            }

            return response.json();
        })
        .then(data => {
            isLoading = false;

            return Object.values(data);
        })
        .catch(error => {
            isLoading = false;
            console.log(error);
        });

    onMount(() => {
        isLoading = true;
        fetch('https://svelte-c89da-default-rtdb.europe-west1.firebasedatabase.app/hobbies.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed!');
                }

                return response.json();
            })
            .then(data => {
                isLoading = false;
                hobbyStore.setHobbies(Object.values(data));
            })
            .catch(error => {
                isLoading = false;
                console.log(error);
            });
    });

    const handleClick = () => {
        hobbyStore.addHobby(input.value);

        isLoading = true;
        fetch('https://svelte-c89da-default-rtdb.europe-west1.firebasedatabase.app/hobbies.json', {
            method: 'POST',
            body: JSON.stringify(input.value),
            headers: {'Content-Type': 'application/json'},
        })
            .then(response => {
                isLoading = false;

                if (!response.ok) {
                    throw new Error('Failed!');
                }

                console.log('Successfully!');
            })
            .catch(error => {
                isLoading = false;
                console.log(error);
            });
    };
</script>

<label for="hobby">Hobby</label>
<input type="text" id="hobby" bind:this={input} />
<button on:click={handleClick}>Add Hobby</button>

{#if isLoading}
    <p>Loading &hellip;</p>
{:else}
    <ul>
        {#each $hobbyStore as hobby}
            <li>{hobby}</li>
        {/each}
    </ul>
{/if}

{#await getHobbies}
    <p>Loading &hellip;</p>
{:then hobbyData}
    <ul>
        {#each hobbyData as hobby}
            <li>{hobby}</li>
        {/each}
    </ul>
{:catch error}
    <p>{error.message}</p>
{/await}
