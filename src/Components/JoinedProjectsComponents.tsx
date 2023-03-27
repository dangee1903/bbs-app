/* eslint-disable camelcase */
import { ENUM_COLOR } from '@constants/enum'
import { TProject, TTask } from '@model/Project/ProjectType'
import { useCreateMutation, useOvewiewQuery } from '@services/modules/project'
import React, { useEffect, useState } from 'react'
import {
  ActivityIndicator,
  Image,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'
import {
  Checkbox,
  IconButton,
  MD3Colors,
  ProgressBar,
  TextInput,
} from 'react-native-paper'
import TaskSekeleton from './Sekeleton/TaskSekeleton'

type TProps = {
  joinedPj: TProject
  openModal: (idPj: TProject, task?: TTask | undefined) => void
}

const JoinedProjectsComponent = ({ joinedPj, openModal }: TProps) => {
  const [showCreateTask, setShowCreateTask] = useState<boolean>(false)
  const [getedTask, setGetedTask] = useState<boolean>(false)
  const [pjState, setPjState] = useState<any>()
  const [idPj, setIdPj] = useState<number | undefined>()
  const [taskId, setTaskId] = useState<string>('')
  const [taskSelected, setTaskSelected] = useState<TTask>()

  const {
    data: listTask,
    refetch,
    isFetching: fetchingTask,
  } = useOvewiewQuery(idPj, { skip: !idPj })

  const [create, { isLoading: createTaskLoading }] = useCreateMutation()

  const getListTask = async (id: number) => {
    if (!idPj) {
      setIdPj(id)
    } else {
      refetch()
    }
  }

  useEffect(() => {
    if (listTask) {
      setPjState(listTask)
    }
  }, [listTask])

  const createTask = (): void => {
    if (taskId) {
      create({
        pjId: joinedPj?.id,
        task_id: taskId,
      })
      setIdPj(joinedPj?.id)
      setTaskId('')
      setTaskSelected(undefined)
      setShowCreateTask(false)
    } else {
      setShowCreateTask(false)
    }
  }

  const getColorTask = (task: TTask): StyleProp<ViewStyle> => {
    if (task.deadline) {
      const today = new Date()
      const deadline = new Date(task.deadline)

      if (
        today.getMonth() + 1 === deadline.getMonth() + 1 &&
        today.getDay() === deadline.getDay() &&
        today.getFullYear() === deadline.getFullYear()
      ) {
        return {
          backgroundColor: 'rgba(234, 126, 0, 0.37)',
        }
      }
      if (deadline < today) {
        return {
          backgroundColor: 'rgba(255, 0, 0, 0.2)',
        }
      }
    }
    return {}
  }

  return (
    <View style={styles.containerContent}>
      <View style={styles.projectTitleTop}>
        <View style={styles.projectImage}>
          <Image
            // eslint-disable-next-line global-require, import/extensions
            source={require('../../assets/project.png')}
          />
          <View style={styles.projectName}>
            <TouchableOpacity>
              <Text style={styles.bottomTextTitle}>{joinedPj?.name}</Text>
              <Text style={styles.bottomText}>{joinedPj?.customer}</Text>
            </TouchableOpacity>
          </View>
        </View>
        {getedTask ? (
          <IconButton
            icon="plus"
            size={20}
            iconColor="black"
            onPress={() => {
              setShowCreateTask(true)
            }}
          />
        ) : (
          <IconButton
            icon="equal"
            size={20}
            iconColor="black"
            onPress={() => {
              getListTask(joinedPj?.id)
              setGetedTask(true)
            }}
          />
        )}
      </View>
      <View style={styles.projectTitleBottom}>
        <Text style={styles.bottomText}>Total: 7/10</Text>
        <Text style={styles.bottomText}>List users</Text>
      </View>
      <View style={styles.listTasks}>
        {pjState &&
          pjState?.data?.project?.tasks.length > 0 &&
          pjState?.data?.project?.tasks.map((task: TTask) => {
            return taskSelected?.id === task.id && fetchingTask ? (
              <View style={styles.loadingSekeleton} key={task.id}>
                <TaskSekeleton />
              </View>
            ) : (
              <View key={task.id} style={getColorTask(task)}>
                <TouchableOpacity
                  onPress={() => {
                    openModal(joinedPj, task)
                    setIdPj(joinedPj.id)
                    setTaskSelected(task)
                  }}
                >
                  <View style={styles.taskWrap}>
                    <View style={styles.taskLeft}>
                      <Text numberOfLines={2} style={styles.taskContent}>
                        {task.task_id}
                      </Text>
                    </View>
                    <View style={styles.taskRight}>
                      <Checkbox.Android
                        status={
                          Number(task.progress) === 100
                            ? 'checked'
                            : 'unchecked'
                        }
                      />
                    </View>
                  </View>
                  <ProgressBar
                    progress={task.progress / 100}
                    color={MD3Colors.error50}
                  />
                </TouchableOpacity>
              </View>
            )
          })}
        {fetchingTask && !taskSelected && (
          <View style={styles.loadingSekeleton}>
            <TaskSekeleton />
          </View>
        )}
        {listTask && listTask?.data?.project?.tasks.length === 0 && (
          <View>
            <Text style={styles.noData}>Bạn chưa có task nào cả</Text>
          </View>
        )}
        {(showCreateTask || createTaskLoading) && (
          <View style={styles.createTaskContainer}>
            <TextInput
              onChangeText={text => setTaskId(text)}
              value={taskId}
              allowFontScaling={false}
              placeholder="Input text"
              style={styles.createTask}
              onSubmitEditing={createTask}
            />
            {createTaskLoading && (
              <View style={styles.loading}>
                <ActivityIndicator size="small" color="#0000ff" />
              </View>
            )}
          </View>
        )}
      </View>
    </View>
  )
}

export default JoinedProjectsComponent

const styles = StyleSheet.create({
  projectTitleTop: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: 'rgba(33, 33, 33, 0.08)',
    borderBottomWidth: 1,
    padding: 10,
  },
  projectTitleBottom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingLeft: 10,
    paddingRight: 10,
  },
  projectName: {
    marginLeft: 10,
  },
  projectImage: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerContent: {
    backgroundColor: 'rgba(0, 0, 0, 0.12)',
    flex: 1,
    marginBottom: 15,
  },
  bottomText: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    color: '#6D6D6D',
  },
  bottomTextTitle: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    color: 'black',
  },
  listTasks: {
    marginTop: 10,
  },
  taskWrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  taskLeft: {
    width: '80%',
    textAlign: 'justify',
  },
  createTask: {
    backgroundColor: ENUM_COLOR.drakWhite,
    fontSize: 14,
    height: 40,
    flex: 1,
    borderBottomColor: '#E8E8E8',
  },
  taskRight: {},
  createTaskContainer: {
    flexDirection: 'row',
    borderColor: ENUM_COLOR.black,
  },
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
    color: ENUM_COLOR.black,
  },
  noData: {
    marginLeft: 15,
    marginBottom: 10,
  },
  taskContent: {
    marginLeft: 15,
  },
  loadingSekeleton: {
    padding: 10,
  },
})
