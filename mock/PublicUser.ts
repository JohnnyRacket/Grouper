import { PublicUser } from "@/types/PublicUser";
import { idGenerator } from "./utils";

export const mockPublicUser: PublicUser = {
    id: 'jdf98d7yhfdsfdf',
    name: 'Mockson Mockerton',
    initials: 'MM',
}

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

const getRandomName = () => {
    return names[Math.floor(Math.random() * names.length)];
}

export const generateRandomPublicUser = (): PublicUser => {
    const name = `${getRandomName()} ${getRandomName()}`
    const matches = name.match(/\b(\w)/g); // get first initial of each word
    let initials = 'XX';
    if (matches) initials = matches.join('');
    const id = idGenerator.next().value;

    return {
        id: id,
        name: name,
        initials: initials,
    }
}