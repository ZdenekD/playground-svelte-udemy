<script>
    import {bubble} from 'svelte/internal';
    import Input from '../input/input.svelte';

    const heading = 'Hello world';
    let value = '';
    let favoriteColor = 'blue';
    let agreed;
    let username;

    $: console.log(value);
    $: console.log(favoriteColor);
    $: console.log(agreed);

    const handleInput = event => {
        value = event.target.value;
    };
    const handleSave = () => {
        console.log(username.value);
        console.dir(username);
    };
</script>

<style>
    h1 {
        color: #333;
    }
</style>

<h1>{heading}</h1>

<input type="text" {value} on:input={handleInput} />
<input type="text" bind:value />
<Input bind:value />

<label> <input type="checkbox" bind:checked={agreed} /> Agreement </label>

<h1>Favorite color</h1>
<label> <input type="radio" name="color" value="red" bind:group={favoriteColor} /> Red </label>
<label> <input type="radio" name="color" value="green" bind:group={favoriteColor} /> Green </label>
<label> <input type="radio" name="color" value="blue" bind:group={favoriteColor} /> Blue </label>

<h1>Favorite color</h1>
<label> <input type="checkbox" name="color" value="red" bind:group={favoriteColor} /> Red </label>
<label> <input type="checkbox" name="color" value="green" bind:group={favoriteColor} /> Green </label>
<label> <input type="checkbox" name="color" value="blue" bind:group={favoriteColor} /> Blue </label>

<select bind:value={favoriteColor}>
    <option defaultValue="">Choose one</option>
    <option value="green">Green</option>
    <option value="red">Red</option>
    <option value="blue">Blue</option>
</select>

<hr />

<input type="text" bind:this={username} />
<button on:click={handleSave}>Save</button>
