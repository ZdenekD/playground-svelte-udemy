import {writable} from 'svelte/store';

const store = writable([]);

const meetups = {
    subscribe: store.subscribe,
    add: data => {
        const meetup = {...data};

        store.update(items => [meetup, ...items]);
    },
    setList: data => {
        store.set(data);
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
