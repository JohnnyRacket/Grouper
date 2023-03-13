import { Event } from '@/types/Event';
import React, { createContext, useReducer, ReactNode } from 'react';

import EventsReducer from './EventsReducer';
import { EventsReducers, EventsState, initialState } from './EventsState';



export const EventsContext = createContext<EventsState | EventsReducers>(initialState);

export const EventsProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(EventsReducer, initialState);

    // Actions for changing state

    function setEvents(events: Event[]) {
        dispatch({
            type: 'SET_EVENTS',
            events: events
        });
    }

    return (
        <EventsContext.Provider value={{ events: state.events, setEvents }} >
            { children }
        </EventsContext.Provider>
    )
}