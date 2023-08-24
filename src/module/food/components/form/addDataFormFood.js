import { addFood } from "@/common/query/food";
import { Button, Group, Modal, Select, TextInput, Textarea } from "@mantine/core";
import { useForm } from '@mantine/form';
import { useMutation } from "@tanstack/react-query";
import { notifications } from '@mantine/notifications';

const handleValidateForm = (data, field) => {
  return (data === '' || data === null ? `${field} must filled` : null)
}

export default function AddDataFormFood(props) {
  const form = useForm({
    initialValues: {
      name: '',
      description: '',
      category: '',
      createdBy: '',
    },

    validate: {
      name: (value) => handleValidateForm(value, 'Name'),
      description: (value) => handleValidateForm(value, 'Description'),
      category: (value) => handleValidateForm(value, 'Category'),
      createdBy: (value) => handleValidateForm(value, 'Created By'),
    },
  });

  const handleCloseModal = () => {
    props.onClose();
    form.reset();
  }

  const { mutate, isLoading } = useMutation(addFood, {
    onSuccess: (response) => {
      if(response.status === 201) {
        handleCloseModal();
        props.refetch();
        notifications.show({
          title: 'Success',
          message: 'Success created data!',
        })
      }
    },
    onError: () => {
      notifications.show({
        title: 'Failed',
        message: 'Failed add data!',
        color: 'red'
      })
    }
  });

  return (
    <>
      <Modal
        opened={props.isOpen}
        withCloseButton
        onClose={handleCloseModal}
        size="md"
        radius="md"
        title="Add Food"
      >
       <form onSubmit={form.onSubmit((values) => mutate(values))}>
          <TextInput
            withAsterisk
            label="Name"
            placeholder="Input your name food"
            {...form.getInputProps('name')}
          />
          <Textarea
            style={{marginTop:"10px"}}
            withAsterisk
            label="Description"
            placeholder="Input your description food"
            {...form.getInputProps('description')}
          />
          <Select
            label="Category"
            withAsterisk
            style={{marginTop:"10px"}}
            placeholder="Pick one"
            data={[
              { value: 'snack', label: 'Snack' },
              { value: 'makanan berat', label: 'Makanan berat' },
              { value: 'kue', label: 'Kue' },
            ]}
            {...form.getInputProps('category')}
          />
           <Textarea
            style={{marginTop:"10px"}}
            withAsterisk
            label="Created By"
            placeholder="Input your name"
            {...form.getInputProps('createdBy')}
          />
        <Group align="flex-end" style={{marginTop:"20px"}}>
          <Button
            type="submit"
            loading={isLoading}
          >
            Save
          </Button>
        </Group>
       </form>
      </Modal>
    </>
  )
}