import DropdownCommon from '@components/Common/DropdownCommon'
import InputDate from '@components/Common/Input/InputDate'
import InputText from '@components/Common/Input/InputText'
import SliderCommon from '@components/Common/SliderCommon'
import JoinedProjectsComponent from '@components/JoinedProjectsComponents'
import JoinedProjectsSkeleton from '@components/Skeleton/JoinedProjectsSkeleton'
import { ENUM_COLOR } from '@constants/enum'
import { convertYearMonthDay } from '@helpers/datatime'
import { TSelects } from '@model/index'
import { TProject, TTask } from '@model/Project/ProjectType'
import { TUser } from '@model/Users/UsersType'
import {
  useCreateMutation,
  useEditMutation,
  useJoinedQuery,
  useRemoveMutation,
} from '@services/modules/project'
import { useReduxSelector } from '@store/index'
import { Formik } from 'formik'
import { Button, Stack } from 'native-base'
import React, { useState } from 'react'
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { IconButton, Modal, Portal } from 'react-native-paper'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { githubValidationSchema } from './githubState'
import { TTaskState } from '../../Services/modules/project/edit'

const initialState: TTaskState = {
  content: '',
  issue: '',
  progress: 0,
  deadline: convertYearMonthDay(new Date()),
}

const Github = () => {
  const { data: joinedPjs, isLoading: loadingJoined } = useJoinedQuery()
  const [isShowModal, setShowModal] = useState<boolean>(false)
  const [taskState, setTaskState] = useState<TTaskState>(initialState)
  const [selectedTask, setSelectedTask] = useState<TTask>()
  const [selectedPj, setSelectedPj] = useState<TProject>()
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
        deadline: task.deadline ?? convertYearMonthDay(new Date()),
        user_id: task.user_id,
        content: task.content ?? '',
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
  }

  const selectAssigneeLists = (): TSelects | [] => {
    if (selectedPj && users) {
      return selectedPj?.current_members?.map(member => ({
        label:
          users.find((user: TUser) => user.id === member.user_id)?.name ?? '',
        value: member.user_id,
      }))
    }
    return []
  }

  return (
    <KeyboardAwareScrollView extraHeight={150}>
      <Portal>
        <Modal
          visible={isShowModal}
          onDismiss={hideModal}
          contentContainerStyle={styles.containerStyle}
        >
          <View style={styles.modalTitle}>
            <Text numberOfLines={1} style={styles.taskName}>
              {selectedTask?.name}
            </Text>
            <IconButton
              icon="close"
              size={20}
              onPress={() => {
                hideModal()
              }}
              style={styles.closeModal}
            />
          </View>
          <KeyboardAvoidingView behavior="padding">
            <Formik
              validationSchema={githubValidationSchema}
              initialValues={taskState}
              onSubmit={async (values: TTaskState) => {
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
                      value={!values.user_id ? null : values.user_id}
                      errors={errors.user_id}
                      setFieldValue={setFieldValue}
                      name="user_id"
                    />
                  </Stack>
                  <Stack>
                    <InputText
                      placeholder="Description"
                      handleBlur={handleBlur('content')}
                      value={values.content}
                      errors={errors.content}
                      mode="outlined"
                      label="Description"
                      multiline
                      numberOfLines={3}
                      setChangeValue={handleChange('content')}
                    />
                  </Stack>
                  <Stack>
                    <InputText
                      placeholder="Issue"
                      handleBlur={handleBlur('issue')}
                      value={values.issue}
                      errors={errors.issue}
                      mode="outlined"
                      label="Issue"
                      multiline
                      numberOfLines={3}
                      setChangeValue={handleChange('issue')}
                    />
                  </Stack>
                  <Stack>
                    <InputDate
                      valueDate={values.deadline}
                      setValueDate={newValue =>
                        setFieldValue('deadline', newValue)
                      }
                      handleBlur={handleBlur('deadline')}
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
                  <Stack style={styles.buttonWrap}>
                    <Button
                      style={styles.button}
                      size="sm"
                      onPress={() => {
                        handleSubmit()
                      }}
                      disabled={!isValid}
                    >
                      Sửa task
                    </Button>
                    {selectedTask && (
                      <Button
                        style={styles.button}
                        size="sm"
                        onPress={() => {
                          if (selectedPj && selectedTask) {
                            remove({
                              id: selectedTask?.id,
                              pjId: selectedPj?.id,
                            })
                            hideModal()
                          }
                        }}
                      >
                        Xóa task
                      </Button>
                    )}
                  </Stack>
                </>
              )}
            </Formik>
          </KeyboardAvoidingView>
        </Modal>
      </Portal>
      <ScrollView
        style={styles.projectWrap}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.pjTitle}>Joined Projects</Text>
        {loadingJoined &&
          // eslint-disable-next-line react/no-array-index-key
          [...Array(5)].map((x, i) => <JoinedProjectsSkeleton key={i} />)}
        {joinedPjs?.data?.projects &&
          joinedPjs?.data?.projects.map((joinedPj: TProject) => (
            <JoinedProjectsComponent
              key={joinedPj.id}
              joinedPj={joinedPj}
              openModal={openModal}
            />
          ))}
      </ScrollView>
    </KeyboardAwareScrollView>
  )
}
export default Github

const styles = StyleSheet.create({
  taskName: {
    width: '90%',
  },
  pjTitle: {
    fontSize: 16,
    marginBottom: 5,
  },
  projectWrap: {
    padding: 20,
  },
  containerStyle: {
    backgroundColor: ENUM_COLOR.white,
    marginLeft: 20,
    marginRight: 20,
    padding: 20,
  },
  modalTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    marginTop: 0,
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
  closeModal: {
    marginRight: -10,
  },
})
