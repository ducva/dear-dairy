import React from 'react';
import { Textarea, Checkbox, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import '@mantine/dates/styles.css';
import { DatePickerInput } from '@mantine/dates';
import { rem } from '@mantine/core';
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

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    const icon = <IconCalendar style={{ width: rem(18), height: rem(18) }} stroke={1.5} />;
    return (
        <Box maw={340} mx="auto">
            <form onSubmit={form.onSubmit((values) => console.log(values))}>
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
