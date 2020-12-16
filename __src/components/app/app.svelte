<style>
@import './app.css';
</style>

<script>
import Grid from '../grid/grid.svelte';
import Header from '../../UI/header/header.svelte';
import Button from '../../UI/button/button.svelte';
import Input from '../../UI/input/input.svelte';

let meetups = [
    {
        id: 'm1',
        title: 'Coding Bootcamp',
        subtitle: 'Learn to code in 2 hours',
        description: 'In this meetup, we will have some experts that teach you how to code',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Caffe_Nero_coffee_bar%2C_High_St%2C_Sutton%2C_Surrey%2C_Greater_London.JPG/800px-Caffe_Nero_coffee_bar%2C_High_St%2C_Sutton%2C_Surrey%2C_Greater_London.JPG',
        address: '27th Nerd Road, 32523 New York',
        email: 'code@test.com',
    }, {
        id: 'm2',
        title: 'Swim Together',
        subtitle: 'Let\'s go for some swimming',
        description: 'We will simply swim some rounds',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Olympic_swimming_pool_%28Tbilisi%29.jpg/800px-Olympic_swimming_pool_%28Tbilisi%29.jpg',
        address: '27th Nerd Road, 32523 New York',
        email: 'swim@test.com',
    },
];

const initialState = {
    title: '',
    subtitle: '',
    address: '',
    email: '',
    image: '',
    description: '',
};
const values = {...initialState};
const handleSubmit = () => {
    const meetup = {
        id: Math.ceil(Math.random() * 10000000000).toString(),
        ...values,
    };

    meetups = [meetup, ...meetups];
};
</script>

<Header />
<main>
    <Grid {meetups} />
    <form on:submit|preventDefault={handleSubmit}>
        <Input
            id='title'
            label='Title'
            value={values.title}
            on:input={event => {values.title = event.target.value;}}
        />
        <Input
            id='subtitle'
            label='Subtitle'
            value={values.subtitle}
            on:input={event => {values.subtitle = event.target.value;}}
        />
        <Input
            id='address'
            label='Address'
            value={values.address}
            on:input={event => {values.address = event.target.value;}}
        />
        <Input
            id='image'
            label='Image'
            value={values.image}
            on:input={event => {values.image = event.target.value;}}
        />
        <Input
            id='email'
            label='E-mail'
            value={values.email}
            type='email'
            on:input={event => {values.email = event.target.value;}}
        />
        <Input
            id='description'
            label='Description'
            value={values.description}
            controlType='textarea'
            on:input={event => {values.description = event.target.value;}}
        />
        <Button type='submit' content='Submit' />
    </form>
</main>

