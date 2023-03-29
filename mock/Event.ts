import { Event } from "@/types/Event";
import { generateRandomMockGroup } from "./Group";
import { mockImage } from "./image";
import { generateRandomPublicUser } from "./PublicUser";
import { generatreRandomDateBetween, idGenerator } from "./utils";


export const mockEvent: Event = {
    id: '23434-dfsg-234-sdfg',
    title: 'test Event',
    author: { 
        id: '3243-dsfg-2344-sdf',
        name: 'Test Testerson',
        initials: 'TT',
    },
    dateCreated: new Date(),
    body: '',
    image: mockImage,
    location: '4546 Eli St, Houston TX',
    start: new Date('2023-3-23T03:24:00'),
    group: {
        id: 'asfd098sfdsfd',
        name: 'Book Club',
    },
    rsvpYes: [],
    rsvpMaybe: [],
    rsvpNo: []
};

const words = [
    'Elite',
    'Shadow',
    'Garden',
    'Dark',
    'Bhutanese',
    'Caelid',
    'Adventure',
    'Swag',
    'Dynasty',
    'Emporium',
    'Event',
    'Party',
    'Throwdown',
];

const getRandomWord = () => {
    return words[Math.floor(Math.random() * words.length)];
}

export const generateRandomMockEvent = () => {
    const id = idGenerator.next().value;

    const numberAttending = Math.floor(Math.random() * 10);
    const numberMaybe = Math.floor(Math.random() * 10);
    const numberNo = Math.floor(Math.random() * 10);

    const randomizedEvent = {
        ...mockEvent,
        id: id,
        title: `${getRandomWord()} ${getRandomWord()} ${getRandomWord()} ${getRandomWord()}`,
        author: generateRandomPublicUser(),
        location: `${Math.floor(Math.random() * 5000)} ${getRandomWord()} St, Houston TX`,
        start: generatreRandomDateBetween( new Date() ,new Date(2024, 2, 1)),
        group: generateRandomMockGroup(),
        
        rsvpYes: [...Array(numberAttending)].map(() => generateRandomPublicUser()),
        rsvpMaybe: [...Array(numberMaybe)].map(() => generateRandomPublicUser()),
        rsvpNo: [...Array(numberNo)].map(() => generateRandomPublicUser()),
    };

    return randomizedEvent;
}