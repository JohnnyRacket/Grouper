'use client';
import { Text, Space, Box, Stack, Chip, ScrollArea, Flex, Title, Avatar, useMantineTheme } from '@mantine/core';

export default function DateDisplay({month, day}: {month: string, day: number}) {
  const theme = useMantineTheme();
  return (
    <>
      <Flex
        miw={56}
        align="center"
        justify="center"
        direction="column"
        sx={{ borderRadius: "6px", overflow: "hidden" }}
      >
        <Flex
          bg="#a13a24"
          h={20}
          w={56}
          align="center"
          justify="center"
        ><Title order={6}>{month}</Title></Flex>
        <Flex
          bg={theme.colors.dark[4]}
          h={36}
          w={56}
          align="center"
          justify="center"
        ><Title order={3}>{day}</Title></Flex>

      </Flex>

    </>
  )
}
