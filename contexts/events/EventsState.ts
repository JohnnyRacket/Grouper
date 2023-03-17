import { Event } from '@/types/Event';

export interface EventsState {
    events: Event[],
}

export interface EventsReducers {
    setEvents: (events: Event[]) => void,
}

export const initialState: EventsState & EventsReducers = {
    events: [],
    setEvents: (events: Event[]) => {console.log('Set Events Reducer not set.')},
}