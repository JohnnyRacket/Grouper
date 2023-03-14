'use client';
import Head from 'next/head';
import { Container, Divider, MantineProvider, TextInput } from '@mantine/core';
import EventCard from '@/components/EventCard/EventCard';
import { Event } from '@/types/Event';
import { useQuery, useQueryClient } from 'react-query';
import EventCardListView from '@/components/EventsListView/EventsListView';


// async function getEvents() {
//   const res = await fetch('http://localhost:3000/api/events');
//   const data = await res.json();
//   return data as Event[];
// }

export default function Home() {
  const queryClient = useQueryClient()

  const { isLoading, error, data }  = useQuery('events', () =>
  fetch(`http://localhost:3000/api/events`).then(res => res.json()));

  console.log(data);

  return (
    <>
      <Head>
        <title>Upcoming Events</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <Container size="md">
        {!isLoading && <EventCardListView events={data} />}
        
      </Container>
    </>
  )
}
