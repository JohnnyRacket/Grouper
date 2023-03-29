import { Event } from '@/types/Event';
import { EventsState } from './EventsState';

export enum EventActionTypes {
  SET_EVENTS = 'SET_EVENTS',
  ADD_GROUP_FILTER = 'ADD_GROUP_FILTER',
  REMOVE_GROUP_FILTER = 'REMOVE_GROUP_FILTER',
  CLEAR_GROUP_FILTERS = 'CLEAR_GROUP_FILTERS',
  ADD_RSVP_FILTER = 'ADD_RSVP_FILTER',
  REMOVE_RSVP_FILTER = 'REMOVE_RSVP_FILTER',
  CLEAR_RSVP_FILTERS = 'CLEAR_GRSVP_FILTERS',
  SET_SEARCH_FILTER = 'SET_SEARCH_FILTER',
  CLEAR_SEARCH_FILTER = 'CLEAR_SEARCH_FILTER',
}

export type EventsActions =
  | { type: EventActionTypes.SET_EVENTS, events: Event[] }
  | { type: EventActionTypes.ADD_GROUP_FILTER, filter: string }
  | { type: EventActionTypes.REMOVE_GROUP_FILTER, filter: string }
  | { type: EventActionTypes.CLEAR_GROUP_FILTERS }
  | { type: EventActionTypes.ADD_RSVP_FILTER, filter: string }
  | { type: EventActionTypes.REMOVE_RSVP_FILTER, filter: string }
  | { type: EventActionTypes.CLEAR_RSVP_FILTERS }
  | { type: EventActionTypes.SET_SEARCH_FILTER, filter: string }
  | { type: EventActionTypes.CLEAR_SEARCH_FILTER }

const EventsReducer = (state: EventsState, action: EventsActions): EventsState =>  {
  console.log('in the reducer')
  switch (action.type) {
    case EventActionTypes.SET_EVENTS:
      action.events.sort(function (a, b) {
        return new Date(a.start) as any - (new Date(b.start) as any);
      });

      return {
        ...state,
        events: action.events,
        upNext: action.events?.[0],
      }
    case EventActionTypes.ADD_GROUP_FILTER:
      return {
        ...state,
        groupFilters: [...state.groupFilters, action.filter],
      }
    case EventActionTypes.REMOVE_GROUP_FILTER:
      return {
        ...state,
        groupFilters: state.groupFilters.filter(filter => filter !== action.filter),
      }
    case EventActionTypes.CLEAR_GROUP_FILTERS:
      return {
        ...state,
        groupFilters: [],
      }
    case EventActionTypes.ADD_RSVP_FILTER:
      return {
        ...state,
        rsvpFilters: [...state.groupFilters, action.filter],
      }
    case EventActionTypes.REMOVE_RSVP_FILTER:
      return {
        ...state,
        rsvpFilters: state.groupFilters.filter(filter => filter !== action.filter),
      }
    case EventActionTypes.CLEAR_RSVP_FILTERS:
      return {
        ...state,
        rsvpFilters: [],
      }
    case EventActionTypes.SET_SEARCH_FILTER:
      return {
        ...state,
        searchFilter: action.filter,
      }
    case EventActionTypes.CLEAR_SEARCH_FILTER:
      return {
        ...state,
        searchFilter: '',
      }
    default:
      return state;
  }
}

export default EventsReducer;