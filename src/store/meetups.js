import {writable} from 'svelte/store';

const store = writable([
    {
        id: 'm1',
        title: 'Coding Bootcamp',
        subtitle: 'Learn to code in 2 hours',
        description: 'In this meetup, we will have some experts that teach you how to code',
        image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Caffe_Nero_coffee_bar%2C_High_St%2C_Sutton%2C_Surrey%2C_Greater_London.JPG/800px-Caffe_Nero_coffee_bar%2C_High_St%2C_Sutton%2C_Surrey%2C_Greater_London.JPG',
        address: '27th Nerd Road, 32523 New York',
        email: 'code@test.com',
        isFavorite: false,
    },
    {
        id: 'm2',
        title: 'Swim Together',
        subtitle: 'Let go for some swimming',
        description: 'We will simply swim some rounds',
        image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Olympic_swimming_pool_%28Tbilisi%29.jpg/800px-Olympic_swimming_pool_%28Tbilisi%29.jpg',
        address: '27th Nerd Road, 32523 New York',
        email: 'swim@test.com',
        isFavorite: false,
    },
]);

const meetups = {
    subscribe: store.subscribe,
    add: data => {
        const meetup = {
            id: Math.ceil(Math.random() * 10000000000).toString(),
            isFavorite: false,
            ...data,
        };

        store.update(items => [meetup, ...items]);
    },
    update: (id, data) => {
        store.update(items => {
            const index = items.findIndex(item => item.id === id);
            const updated = {...items[index], ...data};
            const copy = [...items];

            copy[index] = updated;

            return copy;
        });
    },
    remove: id => {
        store.update(items => items.filter(item => item.id !== id));
    },
    toggleFavorite: id => {
        store.update(items => {
            const meetup = {...items.find(item => item.id === id)};
            const index = items.findIndex(item => item.id === id);

            meetup.isFavorite = !meetup.isFavorite;

            const updated = [...items];

            updated[index] = meetup;

            return updated;
        });
    },
};

export default meetups;
