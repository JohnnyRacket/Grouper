'use client';
import Head from 'next/head';
import { Container, Divider, MantineProvider, TextInput } from '@mantine/core';
import EventCard from '@/components/EventCard/EventCard';

export default function Home() {
  return (
    <>
      <Head>
        <title>Page title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <Container size="md">
        <Divider my="xs" label="This Week" labelPosition="center" w="100%" />
        <EventCard />
        <Divider my="xs" label="Next Week" labelPosition="center" w="100%" />
        <EventCard />
        <EventCard />
        <Divider my="xs" label="Next Month" labelPosition="center" w="100%" />
        <EventCard />

      </Container>
    </>
  )
}
