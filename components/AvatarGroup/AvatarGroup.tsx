'use client';
import { PublicUser } from '@/types/PublicUser';
import { Text, Tooltip, Avatar } from '@mantine/core';

export default function AvatarGroup({ users }: { users: PublicUser[] }) {
  return (
    <>
      <Tooltip.Group openDelay={300} closeDelay={100}>
        <Avatar.Group spacing="md" sx={{ display: 'flex', justifyContent: 'flex-end' }}>
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
          {users?.slice(3, 8).length > 0 &&
            <Tooltip
              label={
                <>
                  {users?.slice(3, 8).map((user, index) => (
                    <Text key={index}>{user.name}</Text>
                  ))}
                  {users?.slice(8).length > 0 && <Text>+{users?.slice(8).length} more</Text>}
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
