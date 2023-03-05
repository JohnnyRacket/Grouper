'use client';
import { Text, Space, Box, Stack, Chip, ScrollArea, Flex, Title, Avatar } from '@mantine/core';

export default function HeaderContents() {
  return (
    <>
      <Flex
        w="100%"
        align="center"
        justify="space-between"
        direction="row"
        px="md"
      >
        <Title order={3}>Upcoming Events</Title>
        <Avatar color="cyan" radius="xl">MK</Avatar>
      </Flex>

    </>
  )
}
