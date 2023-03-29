import { Event } from '@/types/Event';

export interface EventsState {
    upNext?: Event,
    events: Event[],
    groupFilters: string[],
    rsvpFilters: string[],
    searchFilter: string,
}

export interface EventsReducers {
    setEvents: (events: Event[]) => void,
    addGroupFilter: (filter: string) => void,
    removeGroupFilter: (filter: string) => void,
    clearGroupFilters: () => void,
    addRsvpFilter: (filter: string) => void,
    removeRsvpFilter: (filter: string) => void,
    clearRsvpFilters: () => void,
    setSearchFilter: (filter: string) => void,
    clearSearchFilter: () => void,
}

export const initialState: EventsState & EventsReducers = {
    upNext: undefined,
    events: [],
    groupFilters: [],
    rsvpFilters: [],
    searchFilter: '',
    setEvents: (events: Event[]) => {console.log('Set Events Reducer not set.')},
    addGroupFilter: (filter: string) => {console.log('Add Group Reducer not set.')},
    removeGroupFilter: (filter: string) => {console.log('Remove Group Reducer not set.')},
    clearGroupFilters: () => {console.log('Clear Groups Reducer not set.')},
    addRsvpFilter: (filter: string) => {console.log('Add Rsvp Reducer not set.')},
    removeRsvpFilter: (filter: string) => {console.log('Remove Rsvp Reducer not set.')},
    clearRsvpFilters: () => {console.log('Clear Rsvp Reducer not set.')},
    setSearchFilter: (filter: string) => {console.log('Set Search Reducer not set.')},
    clearSearchFilter: () => {console.log('Clear Search Reducer not set.')},
}