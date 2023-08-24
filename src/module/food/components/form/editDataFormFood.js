import { editFood } from "@/common/query/food";
import { Button, Group, Modal, Select, TextInput, Textarea } from "@mantine/core";
import { useForm } from '@mantine/form';
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { notifications } from '@mantine/notifications';

const handleValidateForm = (data, field) => {
  return (data === '' || data === null ? `${field} must filled` : null)
}

export default function editDataFormFood(props) {
  const {isOpen} = props
  const form = useForm({
    initialValues: {
      title: '',
      description: '',
      category: '',
    },

    validate: {
      title: (value) => handleValidateForm(value, 'Title'),
      description: (value) => handleValidateForm(value, 'Description'),
      category: (value) => handleValidateForm(value, 'Category'),
    },
  });

  /**set data to form when form edit open */
  useEffect(()=>{
    form.setFieldValue('title', props.detailData.title);
    form.setFieldValue('description', props.detailData.description);
    form.setFieldValue('category', props.detailData.category);
  },[isOpen])

  const handleCloseModal = () => {
    props.onClose();
    form.reset();
  }

  const { mutate, isLoading } = useMutation(()=>editFood(props.detailData.id, form.values), {
    onSuccess: (response) => {
      if(response.status === 200) {
        handleCloseModal();
        props.refetch();
        notifications.show({
          title: 'Success',
          message: 'Success edited data!',
        })
      }
    },
    onError: () => {
      notifications.show({
        title: 'Failed',
        message: 'Failed edit data!',
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
        title="Edit Food"
      >
       <form onSubmit={form.onSubmit(() => mutate())}>
          <TextInput
            withAsterisk
            label="Title"
            placeholder="Input your title food"
            {...form.getInputProps('title')}
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