import { Group } from "@/types/Group";
import { idGenerator } from "./utils";

export const mockGroup: Group = {
    id: 'fsd89hsdg8hugfo',
    name: 'Book Club',
}

const groups = [
    'Flexxon',
    'Book Club',
    'Random Guys',
];

const getRandomGroup = () => {
    return groups[Math.floor(Math.random() * groups.length)];
}

export const generateRandomMockGroup = (): Group => {
    return {
        id: idGenerator.next().value,
        name: getRandomGroup(),
    }
}
