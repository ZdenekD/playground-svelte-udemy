<script>
    import {tick} from 'svelte';
    import Product from '../product/product.svelte';
    import Modal from '../modal/modal.svelte';

    const products = [
        {
            id: 'p1',
            title: 'A Book',
            price: '9.99',
        },
        {
            id: 'p2',
            title: 'A Shoe',
            price: '199.99',
            bestseller: true,
        },
    ];
    let text = 'This is some dummy text!';
    let show = false;
    const handleClick = () => {
        show = true;
    };
    const handleCancel = () => {
        show = false;
    };
    const handleClose = () => {
        show = false;
    };
    const handleKeydown = event => {
        if (event.which !== 9) {
            return;
        }

        event.preventDefault();

        const {selectionStart, selectionEnd, value} = event.target;

        text = value.slice(0, selectionStart) + value.slice(selectionStart, selectionEnd).toUpperCase() + value.slice(selectionEnd);

        tick().then(() => {
            // eslint-disable-next-line no-param-reassign
            event.target.selectionStart = selectionStart;
            // eslint-disable-next-line no-param-reassign
            event.target.selectionEnd = selectionEnd;
        });
    };
</script>

<h1>Hello World</h1>

<button on:click={handleClick}> Show modal </button>

{#if show}
    <Modal on:cancel={handleCancel} on:close={handleClose} let:didAgreed={closable}>
        <h1 slot="header">Hi</h1>
        <p>This works</p>
        <button slot="footer" on:click={handleClose} disabled={!closable}>Confirm</button>
    </Modal>
{/if}

{#each products as product}
    <Product {...product} on:add={event => console.log(event.detail)} on:delete={event => console.log(event)} />
{/each}

<textarea rows="5" value={text} on:keydown={handleKeydown} />
