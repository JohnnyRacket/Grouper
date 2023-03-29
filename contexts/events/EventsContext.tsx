import { Event } from '@/types/Event';
import React, { createContext, useReducer, ReactNode } from 'react';

import EventsReducer, { EventActionTypes } from './EventsReducer';
import { EventsReducers, EventsState, initialState } from './EventsState';



export const EventsContext = createContext<EventsState & EventsReducers>(initialState);

export const EventsProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(EventsReducer, initialState);

  // Actions for changing state

  const setEvents = (events: Event[]) => {
    dispatch({
      type: EventActionTypes.SET_EVENTS,
      events: events
    });
  }
  const addGroupFilter = (filter: string) => {
    dispatch({
      type: EventActionTypes.ADD_GROUP_FILTER,
      filter: filter
    });
  }
  const removeGroupFilter = (filter: string) => {
    dispatch({
      type: EventActionTypes.REMOVE_GROUP_FILTER,
      filter: filter
    });
  }
  const clearGroupFilters = () => {
    dispatch({
      type: EventActionTypes.CLEAR_GROUP_FILTERS,
    });
  }
  const addRsvpFilter = (filter: string) => {
    dispatch({
      type: EventActionTypes.ADD_RSVP_FILTER,
      filter: filter
    });
  }
  const removeRsvpFilter = (filter: string) => {
    dispatch({
      type: EventActionTypes.REMOVE_RSVP_FILTER,
      filter: filter
    });
  }
  const clearRsvpFilters = () => {
    dispatch({
      type: EventActionTypes.CLEAR_RSVP_FILTERS,
    });
  }
  const setSearchFilter = (filter: string) => {
    dispatch({
      type: EventActionTypes.SET_SEARCH_FILTER,
      filter: filter
    });
  }
  const clearSearchFilter = () => {
    dispatch({
      type: EventActionTypes.CLEAR_SEARCH_FILTER,
    });
  }

  return (
    <EventsContext.Provider value={
      {
        upNext: state.upNext,
        events: state.events,
        groupFilters: state.groupFilters,
        rsvpFilters: state.rsvpFilters,
        searchFilter: state.searchFilter,
        setEvents,
        addGroupFilter,
        removeGroupFilter,
        clearGroupFilters,
        addRsvpFilter,
        removeRsvpFilter,
        clearRsvpFilters,
        setSearchFilter,
        clearSearchFilter
      }} >
      {children}
    </EventsContext.Provider>
  )
}