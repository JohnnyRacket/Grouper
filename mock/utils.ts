import { snowflakeGenerator } from 'snowflake-id-js';

export const idGenerator = snowflakeGenerator(512);

export const generatreRandomDateBetween = (start: Date, end: Date) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
