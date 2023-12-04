import React from 'react';
import '@mantine/dates/styles.css';
import { Textarea, Button, Group, Box, rem } from '@mantine/core';
import { useForm } from '@mantine/form';
import { DatePickerInput } from '@mantine/dates';
import { IconCalendar } from '@tabler/icons-react';

const AddNoteForm: React.FC = () => {
  const form = useForm({
    initialValues: {
      eventDate: new Date(),
      note: '',
    },

    validate: {
    },
  });

  const handleSubmit = (values: any) => {
    console.log(values);
  }

  const icon = <IconCalendar style={{ width: rem(18), height: rem(18) }} stroke={1.5} />;
  return (
    <Box maw={340} mx="auto">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <DatePickerInput
          leftSection={icon}
          dropdownType="modal"
          label="Pick date"
          placeholder="Pick date"
          {...form.getInputProps('eventDate')}
        />
        <Textarea
          size="md"
          radius="md"
          label="Note"
          placeholder="Your note"
          {...form.getInputProps('note')}
        />
        <Group justify="flex-end" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
};

export default AddNoteForm;
