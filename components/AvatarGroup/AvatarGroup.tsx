'use client';
import { PublicUser } from '@/types/PublicUser';
import { Text, Tooltip, Avatar } from '@mantine/core';

export default function AvatarGroup({ users }: { users: PublicUser[] }) {
  return (
    <>
      <Tooltip.Group openDelay={300} closeDelay={100}>
        <Avatar.Group spacing="md">
          {users.slice(0, 3).map((user, index) => {
            return (
              <Tooltip label={user.name} withArrow key={index}>
                <Avatar
                  color={user.color}
                  radius="xl"
                  sx={(theme) => ({
                    borderColor: theme.colors.dark[6]
                  })}
                >{user.initials}</Avatar>
              </Tooltip>
            )
          })
          }
          {Math.max(users?.length - 3, 0) > 0 &&
            <Tooltip
              label={
                <>
                  {users?.slice(3).map((user, index) => (
                    <Text key={index}>{user.name}</Text>
                  ))}
                </>
              }
              withArrow
            >
              <Avatar
                radius="xl"
                sx={(theme) => ({
                  borderColor: theme.colors.dark[6]
                })}
              >+{Math.max(users?.length - 3, 0)}</Avatar>
            </Tooltip>
          }
        </Avatar.Group>
      </Tooltip.Group>
    </>
  )
}
