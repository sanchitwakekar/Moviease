import Realm from 'realm';

const Realm = require('realm');

Movie.schema = {
    name: 'Movie',
    properties: {
        imdbID: 'int',
        Year: 'string',
        Released: 'string',
        Title: 'string',
        Runtime: { type: 'int', default: 0 },
        Actors: 'string'
    }
};

Realm.open({ schema: [Movie] })
    .then(realm => {
        // Create Realm objects and write to local storage
        realm.write(() => {
            const myCar = realm.create('Car', {
                make: 'Honda',
                model: 'Civic',
                miles: 1000,
            });
            myCar.miles += 20; // Update a property value
        });

        // Query Realm for all cars with a high mileage
        const cars = realm.objects('Car').filtered('miles > 1000');

        // Will return a Results object with our 1 car
        cars.length // => 1

        // Add another car
        realm.write(() => {
            const myCar = realm.create('Car', {
                make: 'Ford',
                model: 'Focus',
                miles: 2000,
            });
        });

        // Query results are updated in realtime
        cars.length // => 2
    })
    .catch(error => {
        console.log(error);
    });