import { Event } from '@/types/Event';
import React from 'react';
import { EventsState } from './EventsState';

export type EventsActions =
 | { type: 'SET_EVENTS', events: Event[] }
 
const EventsReducer =  (state: EventsState, action: EventsActions) => {
    console.log('in the reducer')
   switch(action.type) {
       case 'SET_EVENTS':
           return {
                events: action.events
           }
       default:
           return state;
   }
}

export default EventsReducer;