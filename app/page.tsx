'use client';
import Head from 'next/head';
import { Container, Divider, MantineProvider, TextInput } from '@mantine/core';
import { Event } from '@/types/Event';
import { useQuery, useQueryClient } from 'react-query';
import EventCardListView from '@/components/EventsListView/EventsListView';
import { useContext, useEffect } from 'react';
import { EventsContext } from '@/contexts/events/EventsContext';
import { EventsReducers, EventsState } from '@/contexts/events/EventsState';

export default function Home() {
  const queryClient = useQueryClient()
  const {events, setEvents} = useContext(EventsContext);

  const { isLoading, error, data }  = useQuery<Event[]>('events', () =>
  fetch(`http://localhost:3000/api/events`).then(res => res.json()));

  useEffect(()=>{
    if(!isLoading) {
      console.log('done loading');
      if (data){
        console.log('hi');
        setEvents(data);
      }
    }
  },[isLoading, data])

  console.log('events', events)
  return (
    <>
      <Head>
        <title>Upcoming Events</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <Container size="md">
        {!isLoading && <EventCardListView events={events} />}
      </Container>
    </>
  )
}
