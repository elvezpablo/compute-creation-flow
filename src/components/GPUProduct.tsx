import * as React from 'react';
import { Paper, Title, Text, Group } from '@mantine/core';

type Props = {
  type: string;
  name: string;
  size: string;
  features: { [key: string]: string };
};

export default function GPUProduct({ type, name, size, features }: Props) {
  return (
    <Paper p="md" sx={{ width: '200px' }}>
      <Group position="apart">
        <Title order={5}>
          `${name} ${type}`
        </Title>
        <Title order={5}>{size}</Title>
      </Group>
      {Object.keys(features).map((key) => {
        return (
          <Group sx={{ borderBottom: '1px solid #999' }} position="apart">
            <Text size="sm">NVMe SSD</Text>
            <Text size="sm">2.5TB</Text>
          </Group>
        );
      })}
    </Paper>
  );
}
