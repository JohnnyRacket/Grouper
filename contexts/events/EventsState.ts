import { Event } from '@/types/Event';

export type EventsState = {
    events: Event[],
}

export type EventsReducers = {
    setEvents: Function,
}

export const initialState: EventsState = {
    events: []
}