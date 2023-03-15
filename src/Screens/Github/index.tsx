import JoinedProjectsComponent from '@components/JoinedProjectsComponents'
import { TProject, TTask } from '@model/Project/ProjectType'
import {
  useCreateMutation,
  useEditMutation,
  useJoinedQuery,
  useRemoveMutation,
} from '@services/modules/project'
import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Modal, Portal } from 'react-native-paper'
import { Button, Input, Stack } from 'native-base'
import { Formik } from 'formik'
import DropDownPicker from 'react-native-dropdown-picker'
import { DateTimePickerEvent } from '@react-native-community/datetimepicker'
import { AntDesign } from '@expo/vector-icons'
import { TSelects } from '@model/index'
import { converYearMonthDay } from '@helpers/datatime'
import JoinedProjectsSekeleton from '@components/Sekeleton/JoinedProjectsSekeleton'
import { useReduxSelector } from '@store/index'
import { TUser } from '@model/Users/UsersType'
import InputCommon from '@components/Common/InputCommon'
import DropdownCommon from '@components/Common/DropdownCommon'
import SliderCommon from '@components/Common/SliderCommon'
import { githubValidationSchema } from './githubState'

type TTaskState = {
  task_id: string
  issue?: string
  progress: number
  deadline?: string
  user_id?: number
}

const initialState: TTaskState = {
  task_id: '',
  issue: '',
  progress: 0,
  deadline: converYearMonthDay(new Date()),
}

const Github = () => {
  const { data: joinedPjs, isLoading: loadingJoined } = useJoinedQuery()
  const [isShowModal, setShowModal] = useState<boolean>(false)
  const [taskState, setTaskState] = useState<TTaskState>(initialState)
  const [selectedTask, setSelectedTask] = useState<TTask>()
  const [selectedPj, setSelectedPj] = useState<TProject>()
  const [show, setShow] = useState(false)
  const { users } = useReduxSelector(state => state.users)

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
        user_id: task.user_id,
      })
    } else {
      setTaskState(initialState)
    }
    setSelectedPj(project)
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

  const selectAssigneeLists = (): TSelects | [] => {
    if (selectedPj) {
      return selectedPj?.current_members?.map(member => ({
        label:
          users.find((user: TUser) => user.id === member.user_id)?.name ?? '',
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
      setShow(false)
      setTaskState({ ...taskState, deadline: converYearMonthDay(date) })
    }
  }

  let submitAction: string | undefined

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
          <Formik
            validationSchema={githubValidationSchema}
            initialValues={taskState}
            onSubmit={async (values: TTaskState) => {
              if (submitAction === 'editTask') {
                if (selectedPj) {
                  if (selectedTask) {
                    edit({
                      pjId: selectedPj.id,
                      id: selectedTask.id,
                      ...values,
                    })
                  } else {
                    create({
                      pjId: selectedPj.id,
                      ...values,
                    })
                  }
                }
              } else if (selectedPj?.id && selectedTask?.id) {
                remove({
                  id: selectedTask?.id,
                  pjId: selectedPj?.id,
                })
              }
              hideModal()
            }}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              isValid,
              setFieldValue,
            }) => (
              <>
                <Stack>
                  <DropdownCommon
                    items={selectAssigneeLists()}
                    label="Assignee"
                    value={values.user_id ?? null}
                    errors={errors.user_id}
                    setFieldValue={setFieldValue}
                    name="assignee"
                  />
                </Stack>
                <Stack>
                  <InputCommon
                    placeholder="Task id"
                    handleChange={handleChange('task_id')}
                    handleBlur={handleBlur('task_id')}
                    value={values.task_id}
                    errors={errors.task_id}
                    label="Task id"
                  />
                </Stack>
                <Stack>
                  <InputCommon
                    placeholder="Issue"
                    handleChange={handleChange('issue')}
                    handleBlur={handleBlur('issue')}
                    value={values.issue ?? ''}
                    errors={errors.issue}
                    label="Issue"
                  />
                </Stack>
                <Stack>
                  <SliderCommon
                    setFieldValue={setFieldValue}
                    value={values.progress}
                    name="progress"
                    errors={errors.progress}
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
                    />
                  )}
                </Stack>

                <Stack style={styles.buttonWrap}>
                  <Button
                    style={styles.button}
                    size="sm"
                    onPress={() => {
                      submitAction = 'editTask'
                      handleSubmit()
                    }}
                  >
                    {selectedTask ? 'Sửa task' : 'Tạo task'}
                  </Button>
                  {selectedTask && (
                    <Button
                      style={styles.button}
                      size="sm"
                      onPress={() => {
                        submitAction = 'removeTask'
                        handleSubmit()
                      }}
                    >
                      Xóa task
                    </Button>
                  )}
                </Stack>
              </>
            )}
          </Formik>
        </Modal>
      </Portal>
      {/* <ModalTask isShowModal={isShowModal} setShowModal={setShowModal} /> */}
      <ScrollView
        style={styles.projectWrap}
        showsVerticalScrollIndicator={false}
      >
        {loadingJoined &&
          // eslint-disable-next-line react/no-array-index-key
          [...Array(5)].map((x, i) => <JoinedProjectsSekeleton key={i} />)}
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
