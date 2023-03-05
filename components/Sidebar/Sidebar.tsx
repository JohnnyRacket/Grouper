'use client';
import { Flex, Button, Avatar, Space, Text, Box, Stack, Chip, Divider, ScrollArea, NavLink, Title, Image } from '@mantine/core';
import Groups from '../Groups/Groups';
import UpNext from '../UpNext/UpNext';

export default function Sidebar() {
  return (
    <>
      <ScrollArea
        scrollbarSize={8}
        h="100%"
        p="sm"
        sx={{
          '> div > div': { height: "100%" }
        }}>
        <Flex

          justify="center"
          align="flex-start"
          direction="column"
          h="100%"
          sx={{ margin: "auto 0", flexGrow: 1 }}
        >
          <Flex
            justify="center"
            align="center"
            direction="column"
            w="100%"
            p="xs"
            sx={{ margin: "auto 0" }}
          >
            <Image src="/grouper_logo_5.svg" alt="GROUPER logo" maw={200} />
            <Space h="md" />

          </Flex>
          <Space h="xs" />
          <Text size="sm" color="dimmed" pl="xs" weight={600}>Up Next:</Text>
          <UpNext />
          <Space h="xs" />
          <Divider size="xs" w="100%" />
          <Space h="sm" />
          <Stack p="xs" w="100%">
            <Box w="100%" p="xs" sx={(theme) => ({
              textAlign: "start",
              cursor: "pointer",
              borderRadius: "4px",
              fontWeight: 600,
              backgroundColor: theme.colors.dark[5],
              '&:hover': {
                backgroundColor: theme.colors.dark[5],
              },
            })}>Upcoming Events</Box>
            <Box w="100%" p="xs" sx={(theme) => ({
              textAlign: "start",
              cursor: "pointer",
              borderRadius: "4px",
              fontWeight: 600,
              '&:hover': {
                backgroundColor: theme.colors.dark[5],
              },
            })}>My Events</Box>
          </Stack>
          <Box
            mih={370}
            sx={{
              flex: "1 1 0",
              textAlign: 'center',
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              flexDirection: "column",
              width: "100%",
            }}>
            <Box
              p="xs"
              sx={(theme) => ({
                textAlign: 'center',
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                flexDirection: "column",
                width: "100%",
                minHeight: 0,
                flex: "1 1 auto"
              })}
            >
              <Groups />
              <Space h="xl" />
              <Space h="xl" />
              <Stack w="100%">
                <Button w="100%" size="md" variant={"gradient"} gradient={{ from: 'violet', to: 'blue', deg: 60 }}>+ Create Event</Button>
                <Button w="100%" size={"sm"} variant={"subtle"}>+ Create Group</Button>
              </Stack>
              <Space h="xl" />
            </Box>
          </Box>
        </Flex>
      </ScrollArea>
    </>
  )
}
