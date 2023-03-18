import { Event } from "@/types/Event";
import {snowflakeGenerator} from 'snowflake-id-js';


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
    location: '4546 Eli St, Houston TX',
    start: new Date('2023-3-23T03:24:00'),
};

const generator = snowflakeGenerator(512);

const names =[
    'Sarah',
    'Evan',
    'John',
    'Salah',
    'Taylor',
    'Donald',
    'Kevin',
    'Sidney',
    'James',
    'Aldo',
];

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

const getRandomName = () => {
    return names[Math.floor(Math.random() * names.length)];
}

const getRandomWord = () => {
    return words[Math.floor(Math.random() * words.length)];
}

const randomDate = (start: Date, end: Date) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }


export const generateRandomEvent = () => {
    const name = `${getRandomName()} ${getRandomName()}`
    const matches = name.match(/\b(\w)/g); // get first initial of each word
    let initials = 'XX';
    if (matches) initials = matches.join('');
    const id = generator.next().value;
    const randomizedEvent = {
        ...mockEvent,
        id: id,
        title: `${getRandomWord()} ${getRandomWord()} ${getRandomWord()} ${getRandomWord()}`,
        author: {
            id: generator.next().value,
            name: `${getRandomName()} ${getRandomName()}`,
            initials: initials
        },
        location: `${Math.random() * 5000} ${getRandomWord()} St, Houston TX`,
        startDate: randomDate( new Date() ,new Date(2024, 2, 1)),
         

    };

    return randomizedEvent;
}