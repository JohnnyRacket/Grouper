import { snowflakeGenerator } from 'snowflake-id-js';

export const idGenerator = snowflakeGenerator(512);

export const generatreRandomDateBetween = (start: Date, end: Date): Date => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

export const generateRandomColor = (): string => {
    const colors = [
        'red',
        'orange',
        'lime',
        'yellow',
        'green',
        'teal',
        'blue',
        'cyan',
        'indigo',
        'violet',
        'grape',
        'gray',
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}