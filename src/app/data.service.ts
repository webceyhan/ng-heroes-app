import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Hero } from './hero';

@Injectable({
    providedIn: 'root',
})
export class DataService implements InMemoryDbService {
    createDb() {
        const heroes: Hero[] = [
            {
                id: 1,
                name: 'Superman',
                imageUrl:
                    'https://static.dc.com/2023-02/Char_WhosWho_Superman_20190116_5c3fc71f524f38.28405711.jpg?w=184',
            },
            {
                id: 2,
                name: 'Batman',
                imageUrl:
                    'https://static.dc.com/2023-02/Char_WhosWho_Batman_20190116_5c3fc4b40faf04.59002472.jpg?w=184',
            },
            {
                id: 3,
                name: 'Wonder Woman',
                imageUrl:
                    'https://static.dc.com/2023-02/Char_WhosWho_WonderWoman_20190116_5c3fc6aa51d124.25659603.jpg?w=184',
            },
            {
                id: 4,
                name: 'Green Lantern',
                imageUrl:
                    'https://static.dc.com/2023-02/Char_WhosWho_GreenLantern20200721_5f173adcedb982.94529743.jpg?w=184',
            },
            {
                id: 5,
                name: 'The Flash',
                imageUrl:
                    'https://static.dc.com/2023-02/Char_WhosWho_Flash_20190116_5c3fcadbc6a963.74676553.jpg?w=184',
            },
            {
                id: 6,
                name: 'Aquaman',
                imageUrl:
                    'https://static.dc.com/2023-02/Char_WhosWho_Aquaman_5c411a95e710b9.62155274.jpg?w=184',
            },
            {
                id: 7,
                name: 'Cyborg',
                imageUrl:
                    'https://static.dc.com/2023-02/Char_WhosWho_Cyborg_20190116_5c3fcd9048a1a2.67778180.jpg?w=184',
            },
            {
                id: 8,
                name: 'Black Manta',
                imageUrl:
                    'https://static.dc.com/dc/files/default_images/Char_Thumb_BlackManta_5c1023f0360dc3.11295654.jpg?w=640',
            },
            {
                id: 9,
                name: 'Harley Quinn',
                imageUrl:
                    'https://static.dc.com/dc/files/default_images/Char_Thumb_HarleyQuinn_5c4a3e758122a3.39576701.jpg?w=640',
            },
        ];

        return { heroes };
    }

    // Overrides the genId method to ensure that a hero always has an id.
    // If the heroes array is empty,
    // the method below returns the initial number (11).
    // if the heroes array is not empty, the method below returns the highest
    // hero id + 1.
    genId(heroes: Hero[]): number {
        return heroes.length > 0
            ? Math.max(...heroes.map((hero) => hero.id)) + 1
            : 11;
    }
}
