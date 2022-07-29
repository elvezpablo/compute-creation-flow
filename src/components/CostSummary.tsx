import * as React from 'react';
import { Paper, Title, Text, Group } from '@mantine/core';

export default function CostSummary() {
  return (
    <Paper p={'sm'} sx={{ position: 'sticky' }}>
      <Title order={4}>Your Server</Title>
      <Text size="xs">
        Summary of the costs per hour for the current server configuration.
      </Text>
      <Group
        sx={{ borderBottom: '1px solid rgb(66,66,66,.5)' }}
        position="apart"
      >
        <Text size="xs">Nvidia A100</Text>
        <Text size="xs">$2.35</Text>
      </Group>
      <Group
        sx={{ borderBottom: '1px solid rgb(66,66,66,.5)' }}
        position="apart"
      >
        <Text size="xs">Ubuntu lts 18.122</Text>
        <Text size="xs">$0</Text>
      </Group>
      <Group
        sx={{ borderBottom: '1px solid rgb(66,66,66,.5)' }}
        position="apart"
      >
        <Text size="xs">Storage 80GB</Text>
        <Text size="xs">$4</Text>
      </Group>

      <Group position="apart" mt={8}>
        <Text size="xs">Total</Text>
        <Text size="xs">$4</Text>
      </Group>
    </Paper>
  );
}
