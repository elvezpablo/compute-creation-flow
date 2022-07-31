import * as React from 'react';
import { Title, Collapse, Text, TextInput } from '@mantine/core';
import { currency } from './Formatters';

type Props = {
  costGbPerHour: number;
};

export default function SectionDiskSize({ costGbPerHour }: Props) {
  return (
    <div>
      <Title order={4}>Disk Size</Title>
      <Collapse in={true}>
        <Text>{`Attached Storage: 80GB @ ${currency.format(
          costGbPerHour
        )}/GB/hour`}</Text>
        <TextInput required label="Size in GB" />
      </Collapse>
    </div>
  );
}
