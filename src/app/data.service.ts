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
                    'https://www.dccomics.com/sites/default/files/styles/character_thumb_160x160/public/Char_Profile_Superman_20190116_5c3fc2758f6a12.25513240.jpg?itok=RsWdMSw6',
            },
            {
                id: 2,
                name: 'Batman',
                imageUrl:
                    'https://www.dccomics.com/sites/default/files/styles/character_thumb_160x160/public/Char_Profile_Batman_20190116_5c3fc4b40faec2.47318964.jpg?itok=wIPTW6Lq',
            },
            {
                id: 3,
                name: 'Wonder Woman',
                imageUrl:
                    'https://www.dccomics.com/sites/default/files/styles/character_thumb_160x160/public/Char_Profile_WonderWoman_20190116_5c3fc6aa51d0e3.49076914.jpg?itok=dkBqiwvo',
            },
            {
                id: 4,
                name: 'Green Lantern',
                imageUrl:
                    'https://www.dccomics.com/sites/default/files/styles/character_thumb_160x160/public/Char_Profile_GreenLantern_20190116_5c3fc8c14ceda8.50076512.jpg?itok=VR8bn0Si',
            },
            {
                id: 5,
                name: 'The Flash',
                imageUrl:
                    'https://www.dccomics.com/sites/default/files/styles/character_thumb_160x160/public/Char_Profile_Flash_20190116_5c3fcaaa18f0e8.03668117.jpg?itok=VCHiwig6',
            },
            {
                id: 6,
                name: 'Aquaman',
                imageUrl:
                    'https://www.dccomics.com/sites/default/files/styles/character_thumb_160x160/public/Char_Profile_Aquaman_5c411a95e71072.35445903.jpg?itok=NrW14I8l',
            },
            {
                id: 7,
                name: 'Cyborg',
                imageUrl:
                    'https://www.dccomics.com/sites/default/files/styles/character_thumb_160x160/public/Char_Profile_Cyborg_20190116_5c3fcd9048a161.67999729.jpg?itok=hKl0IkJX',
            },
            {
                id: 8,
                name: 'Black Manta',
                imageUrl:
                    'https://www.dccomics.com/sites/default/files/styles/character_thumb_160x160/public/Char_Profile_BlackManta_5c1023b79ab113.73450328.jpg?itok=9Wl6rPOr',
            },
            {
                id: 9,
                name: 'Harley Quinn',
                imageUrl:
                    'https://www.dccomics.com/sites/default/files/styles/character_thumb_160x160/public/Char_Profile_HarleyQuinn_5c4a3e75812334.21707976.jpg?itok=xMb85MG1',
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
