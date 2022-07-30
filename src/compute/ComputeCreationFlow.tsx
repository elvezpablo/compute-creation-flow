import * as React from 'react';
import {
  Container,
  Collapse,
  Box,
  Group,
  Stack,
  Select,
  Button,
  Title,
  Text,
  TextInput,
  SegmentedControl,
  Grid,
  Paper,
  Anchor,
  Textarea,
  SimpleGrid,
  Slider,
} from '@mantine/core';
import CostSummary from '../components/CostSummary';

export default function ComputeCreationFlow() {
  return (
    <Container>
      <Title order={2}>Deploy Compute</Title>
      <Grid>
        <Grid.Col span={8}>
          <Stack>
            <TextInput
              required
              label="Name"
              description="Name of the compute resouce"
            />
            <Box>
              <Textarea
                label="SSH Key"
                description="Paste in an SSH key for the user of this VM."
                autosize
                required
                minRows={8}
                maxRows={10}
                placeholder="ssh-key"
              />
            </Box>

            <Title order={3} sx={{ borderBottom: '1px solid #333' }}>
              Compute Resource
            </Title>

            <Box>
              <Stack mb={'md'}>
                <SegmentedControl
                  data={[
                    {
                      label: 'GPU',
                      value: 'GPU',
                    },
                    {
                      label: 'CPU',
                      value: 'CPU',
                    },
                  ]}
                />

                <SegmentedControl
                  data={[
                    {
                      label: 'A100',
                      value: 'A100',
                    },
                    {
                      label: 'A40',
                      value: 'A40',
                    },
                  ]}
                />
              </Stack>
              <Group>
                <Paper p="md" sx={{ width: '200px' }}>
                  <Group position="apart">
                    <Title order={5}>Nvidia A100</Title>
                    <Title order={5}>40GB</Title>
                  </Group>

                  <Group
                    sx={{ borderBottom: '1px solid #999' }}
                    position="apart"
                  >
                    <Text size="sm">GPUs</Text>
                    <Text size="sm">1</Text>
                  </Group>
                  <Group
                    sx={{ borderBottom: '1px solid #999' }}
                    position="apart"
                  >
                    <Text size="sm">vCPUs</Text>
                    <Text size="sm">8</Text>
                  </Group>
                  <Group
                    sx={{ borderBottom: '1px solid #999' }}
                    position="apart"
                  >
                    <Text size="sm">RAM</Text>
                    <Text size="sm">64 GB</Text>
                  </Group>
                  <Group
                    sx={{ borderBottom: '1px solid #999' }}
                    position="apart"
                  >
                    <Text size="sm">NVMe SSD</Text>
                    <Text size="sm">2.5TB</Text>
                  </Group>
                </Paper>
                <Paper p="md" sx={{ width: '200px' }}>
                  <Group position="apart">
                    <Title order={5}>Nvidia A100</Title>
                    <Title order={5}>80GB</Title>
                  </Group>
                  <Group>
                    <Paper>1X</Paper>
                    <Paper>2X</Paper>
                    <Paper>4X</Paper>
                    <Paper>8X</Paper>
                  </Group>
                  <Group
                    sx={{ borderBottom: '1px solid #999' }}
                    position="apart"
                  >
                    <Text size="sm">GPUs</Text>
                    <Text size="sm">1</Text>
                  </Group>
                  <Group
                    sx={{ borderBottom: '1px solid #999' }}
                    position="apart"
                  >
                    <Text size="sm">vCPUs</Text>
                    <Text size="sm">8</Text>
                  </Group>
                  <Group
                    sx={{ borderBottom: '1px solid #999' }}
                    position="apart"
                  >
                    <Text size="sm">RAM</Text>
                    <Text size="sm">64 GB</Text>
                  </Group>
                  <Group
                    sx={{ borderBottom: '1px solid #999' }}
                    position="apart"
                  >
                    <Text size="sm">NVMe SSD</Text>
                    <Text size="sm">2.5TB</Text>
                  </Group>
                </Paper>
              </Group>
            </Box>
            <Title order={3} sx={{ borderBottom: '1px solid #333' }}>
              Storage
            </Title>

            <Title order={4}>Operating System</Title>

            <Group>
              <Paper p="sm" sx={{ minWidth: '160px' }}>
                <Title order={5}>Ubuntu</Title>
                <Text mb="sm">Machine Learning</Text>
                <Group position="apart">
                  <Text size="sm">TensorFlow</Text>
                  <Text size="sm">12.0.1</Text>
                </Group>
              </Paper>
              <Paper p="sm" sx={{ minWidth: '160px' }}>
                <Title order={5}>Windows</Title>
                <Text mb="sm">Machine Learning</Text>
                <Group position="apart">
                  <Text size="sm">TensorFlow</Text>
                  <Text size="sm">12.0.1</Text>
                </Group>
              </Paper>
              <Paper p="sm" sx={{ minWidth: '160px' }}>
                <Title order={5}>Ubuntu</Title>
                <Text mb="sm">Video</Text>
                <Group position="apart">
                  <Text size="sm">FFMPEG</Text>
                  <Text size="sm">10.0.1</Text>
                </Group>
              </Paper>
            </Group>

            <Title order={4}>Disk Size</Title>
            <Collapse in={true}>
              <Text>Attached Storage: 80GB @ $0.073/GB/month</Text>
              <Slider
                mx={'sm'}
                my={'lg'}
                defaultValue={80}
                radius="xs"
                marks={[
                  { value: 10, label: '10GB' },
                  { value: 50, label: '50GB' },
                  { value: 100, label: '100GB' },
                ]}
              />
            </Collapse>

            <Title order={3} sx={{ borderBottom: '1px solid #333' }}>
              Networking
            </Title>
            <Collapse in={true}>
              <Select
                label="IP Address"
                placeholder="Static or Dynamic IP Address"
                onChange={(val) => console.log('value')}
                value={'dynamic'}
                data={[
                  {
                    value: 'dynamic',
                    label: 'Dynamic IP',
                  },
                  {
                    value: 'static',
                    label: 'Static IP',
                  },
                ]}
              />
            </Collapse>

            <Title order={3}>Miscellaneous</Title>
            <Collapse in={true}>
              <Box>
                <Title order={4}>Lifecycle Scripts</Title>
                <Textarea
                  autosize
                  minRows={8}
                  maxRows={10}
                  label="Lifecyle scripts run when your VM boots"
                  placeholder="#!/bin/bash"
                />
              </Box>
            </Collapse>
            <SimpleGrid cols={2}>
              <Stack>
                <Title order={6}>Capy CLI</Title>
                <Text size="sm">
                  Copy this configuration to use in the CLI.
                </Text>
                <Anchor size="sm">COPY</Anchor>
              </Stack>
              <Stack>
                <Title order={6}>Share Configuration</Title>
                <Text size="sm">Share your configuration.</Text>
                <Anchor size="sm">SHARE</Anchor>
              </Stack>
            </SimpleGrid>
            <Button>Create</Button>
          </Stack>
        </Grid.Col>
        <Grid.Col span={4}>
          <CostSummary />
        </Grid.Col>
      </Grid>
    </Container>
  );
}
