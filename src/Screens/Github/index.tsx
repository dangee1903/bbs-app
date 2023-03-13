import JoinedProjectsComponent from '@components/JoinedProjectsComponents'
import { TProject, TTask } from '@model/Project/ProjectType'
import {
  useCreateMutation,
  useEditMutation,
  useJoinedQuery,
  useRemoveMutation,
} from '@services/modules/project'
import React, { useState } from 'react'
import {
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  Text,
  TextInputChangeEventData,
  TouchableOpacity,
  View,
} from 'react-native'
import Slider from '@react-native-community/slider'
import { Modal, Portal } from 'react-native-paper'
import { Button, FormControl, Input, Stack } from 'native-base'
import DropDownPicker from 'react-native-dropdown-picker'
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker'
import { AntDesign } from '@expo/vector-icons'
import { TSelect, TSelects } from '@model/index'

type TTaskState = {
  task_id: string
  issue?: string
  progress?: number
  deadline?: string
  user_id?: number
}

const initialState: TTaskState = {
  task_id: '',
  issue: '',
  progress: 0,
  deadline: '',
}

const Github = () => {
  const { data: joinedPjs } = useJoinedQuery()
  const [isShowModal, setShowModal] = useState<boolean>(false)
  const [taskState, setTaskState] = useState<TTaskState>(initialState)
  const [selectedTask, setSelectedTask] = useState<TTask>()
  const [selectedPj, setSelectedPj] = useState<TProject>()
  const [show, setShow] = useState(false)

  const [create] = useCreateMutation()
  const [edit] = useEditMutation()
  const [remove] = useRemoveMutation()

  const openModal = (project: TProject, task?: TTask) => {
    setShowModal(true)
    if (task) {
      setSelectedTask(task)
      setTaskState({
        task_id: task.task_id,
        issue: task.issue,
        progress: task.progress,
        deadline: task.deadline ?? '',
      })
    } else {
      setTaskState(initialState)
    }
    setSelectedPj(project)
  }

  const onChangeText = (
    { nativeEvent: { text } }: NativeSyntheticEvent<TextInputChangeEventData>,
    name: string,
  ) => {
    setTaskState(pre => ({ ...pre, [name]: text }))
  }

  const hideModal = () => {
    setShowModal(false)
    setSelectedTask(undefined)
    setSelectedPj(undefined)
    setTaskState({
      task_id: '',
      issue: '',
      progress: 0,
    })
  }

  const submit = () => {
    if (selectedPj) {
      if (selectedTask) {
        edit({
          pjId: selectedPj.id,
          id: selectedTask.id,
          ...taskState,
        })
      } else {
        create({
          pjId: selectedPj.id,
          ...taskState,
        })
      }
    }
    hideModal()
  }

  const removeTask = () => {
    if (selectedPj?.id && selectedTask?.id) {
      remove({
        id: selectedTask?.id,
        pjId: selectedPj?.id,
      })
      hideModal()
    }
  }

  const changeProgress = (value: number) => {
    setTaskState({ ...taskState, progress: Number(value.toFixed()) })
  }

  const selectAssigneeLists = (): TSelects | [] => {
    if (selectedPj) {
      return selectedPj?.current_members?.map(member => ({
        label: String(member.user_id),
        value: member.user_id,
      }))
    }
    return []
  }

  const onChangeDate = (
    event: DateTimePickerEvent,
    date?: Date | undefined,
  ) => {
    if (date) {
      const newDate = `${date.getFullYear()}/${
        date.getMonth() + 1
      }/${date.getDate()}`
      setShow(false)
      setTaskState({ ...taskState, deadline: newDate })
    }
  }

  return (
    <>
      <Portal>
        <Modal
          visible={isShowModal}
          onDismiss={hideModal}
          contentContainerStyle={styles.containerStyle}
        >
          <View style={styles.modalTitle}>
            <Text>{selectedTask ? selectedTask.task_id : 'Tạo mới task'}</Text>
            <Text onPress={hideModal}>X</Text>
          </View>
          <FormControl isRequired>
            <Stack>
              <Text style={styles.formTitle}>Assignee</Text>
              <DropDownPicker
                items={selectAssigneeLists()}
                containerStyle={{ height: 40 }}
                onChangeItem={(item: TSelect) =>
                  setTaskState({ ...taskState, user_id: item.value })
                }
              />
            </Stack>
            <Stack>
              <Text style={styles.formTitle}>Task id</Text>
              <Input
                onChange={e => onChangeText(e, 'task_id')}
                type="text"
                placeholder="Task id"
                defaultValue={taskState.task_id}
              />
            </Stack>
            <Stack>
              <Text style={styles.formTitle}>Issue</Text>
              <Input
                onChange={e => onChangeText(e, 'issue')}
                type="text"
                placeholder="Issue"
                defaultValue={taskState.issue}
              />
            </Stack>
            <Stack>
              <Text style={styles.formTitle}>
                Progress
                {`(${taskState.progress?.toFixed()}%)`}
              </Text>
              <Slider
                style={{ height: 40 }}
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor="#751FF0"
                maximumTrackTintColor="#CBAAFA"
                thumbTintColor="#751FF0"
                onSlidingComplete={changeProgress}
                value={taskState.progress}
              />
            </Stack>
            <Stack>
              <Text style={styles.formTitle}>Deadline</Text>
              <TouchableOpacity
                style={styles.datePicker}
                onPress={() => setShow(!show)}
              >
                <Text>{taskState.deadline}</Text>
                <AntDesign name="calendar" size={24} color="black" />
              </TouchableOpacity>
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={
                    !taskState.deadline
                      ? new Date()
                      : new Date(taskState.deadline)
                  }
                  is24Hour
                  onChange={onChangeDate}
                  style={{ width: 320, backgroundColor: 'white' }}
                />
              )}
            </Stack>
            <Stack style={styles.buttonWrap}>
              <Button style={styles.button} size="sm" onPress={submit}>
                {selectedTask ? 'Sửa task' : 'Tạo task'}
              </Button>
              {selectedTask && (
                <Button style={styles.button} size="sm" onPress={removeTask}>
                  Xóa task
                </Button>
              )}
            </Stack>
          </FormControl>
        </Modal>
      </Portal>
      {/* <ModalTask isShowModal={isShowModal} setShowModal={setShowModal} /> */}
      <ScrollView
        style={styles.projectWrap}
        showsVerticalScrollIndicator={false}
      >
        {joinedPjs?.data?.projects &&
          joinedPjs?.data?.projects.map((joinedPj: TProject) => (
            <JoinedProjectsComponent
              key={joinedPj.id}
              joinedPj={joinedPj}
              openModal={openModal}
            />
          ))}
      </ScrollView>
    </>
  )
}
export default Github

const styles = StyleSheet.create({
  projectWrap: {
    padding: 20,
  },
  containerStyle: {
    backgroundColor: 'white',
    marginLeft: 20,
    marginRight: 20,
    padding: 20,
  },
  modalTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
    width: 80,
  },
  formTitle: {
    paddingTop: 10,
  },
  buttonWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  datePicker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})
