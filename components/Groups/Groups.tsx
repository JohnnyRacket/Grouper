'use client';
import { Text, Space, Box, Stack, Chip, ScrollArea } from '@mantine/core';

export default function Groups() {
  return (
    <>
      <ScrollArea scrollbarSize={6} w="100%" type="auto" sx={(theme) => ({ borderRadius: theme.radius.md })} >
        <Box
          sx={(theme) => ({
            textAlign: 'center',
            backgroundColor: theme.colors.dark[8],
            padding: theme.spacing.md,
            borderRadius: theme.radius.md,
            display: "flex",
            width: "100%",
            overflow: "auto",
            height: "min-content",
            margin: "0 0"
          })}
        >
          <Box
            sx={(theme) => ({
              minHeight: 0,
              margin: "auto 0",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexDirection: "column",
              width: "100%",
            })}
          >
            <Text color="dimmed" mt={-8}>Groups</Text>
            <Space h="sm" />
            <Stack align="flex-start" >
              <Chip defaultChecked size="sm" variant="light" color="teal" >Flexxon</Chip>
              <Chip defaultChecked size="sm" variant="light" color="grape">Book Club</Chip>
              <Chip defaultChecked size="sm" variant="light" color="yellow">Random guys</Chip>
            </Stack>
          </Box>
        </Box>
      </ScrollArea>
    </>
  )
}
