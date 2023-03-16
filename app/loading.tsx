
'use client';
import {Divider, Stack } from '@mantine/core';
import EventCardSkeleton from '@/components/EventCard/EventCardSkeleton';

export default function HomeLoading() {
  return (
    <>
      <Stack px="md">
          <Divider my="xs" mx="md" label="Loading..." labelPosition="center" />
          <EventCardSkeleton />
          <EventCardSkeleton />
          <EventCardSkeleton />
        </Stack>
    </>
  )
}
