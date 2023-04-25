/* eslint-disable camelcase */
import { ENUM_COLOR } from '@constants/enum'
import {
  TCurrentMembers,
  TProject,
  TTask,
  TUserOff,
} from '@model/Project/ProjectType'
import { useCreateMutation, useOvewiewQuery } from '@services/modules/project'
import React, { useEffect, useRef, useState } from 'react'
import {
  ActivityIndicator,
  Image,
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
  StyleSheet,
  TextInput as RNTextInput,
} from 'react-native'
import {
  Avatar,
  Checkbox,
  IconButton,
  MD3Colors,
  ProgressBar,
  TextInput,
} from 'react-native-paper'
import TaskSkeleton from './Skeleton/TaskSkeleton'
import { useReduxSelector } from '../Store'
import { TUser } from '../Models/Users/UsersType'
import { convertUrl } from '../Helpers/url'

type TProps = {
  joinedPj: TProject
  openModal: (idPj: TProject, task?: TTask | undefined) => void
}

const defaultPjImage = require('../../assets/project.png')

const JoinedProjectsComponent = ({ joinedPj, openModal }: TProps) => {
  const [showCreateTask, setShowCreateTask] = useState<boolean>(false)
  const [getedTask, setGetedTask] = useState<boolean>(false)
  const [pjState, setPjState] = useState<any>()
  const [idPj, setIdPj] = useState<number | undefined>()
  const [taskName, setTaskName] = useState<string>('')
  const [taskSelected, setTaskSelected] = useState<TTask>()
  const refInput = useRef<RNTextInput | null>(null)
  const { users } = useReduxSelector(state => state.users)

  const {
    data: listTask,
    refetch,
    isFetching: fetchingTask,
  } = useOvewiewQuery(idPj, { skip: !idPj })

  const [create, { isLoading: createTaskLoading }] = useCreateMutation()

  useEffect(() => {
    if (refInput) refInput.current?.focus()
  }, [showCreateTask])

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
    if (taskName) {
      create({
        pjId: joinedPj?.id,
        name: taskName,
      })
      setIdPj(joinedPj?.id)
      setTaskName('')
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

  const genUsersAvatar = () => {
    return joinedPj.current_members?.length
      ? joinedPj.current_members.map((member: TCurrentMembers) => {
          const avatar = users.find((user: TUser) => member.user_id === user.id)
          const userOff = joinedPj.userInfo.off.find(
            (user: TUserOff) => user.user_id === member.user_id,
          )

          return (
            <View style={styles.avatar} key={member.user_id}>
              <Avatar.Image
                size={20}
                source={{
                  uri: convertUrl(avatar?.avatar),
                }}
                style={{ backgroundColor: '#ffffff' }}
              />
              {userOff && userOff.status === 1 ? (
                <View
                  style={{ ...styles.avatarStatus, backgroundColor: 'red' }}
                />
              ) : (
                <View
                  style={{ ...styles.avatarStatus, backgroundColor: '#11D660' }}
                />
              )}
            </View>
          )
        })
      : ''
  }

  return (
    <View style={styles.containerContent}>
      <View style={styles.projectTitleTop}>
        <View style={styles.projectImage}>
          <Image
            style={{ width: 100, height: 60 }}
            source={{ uri: convertUrl(joinedPj.image_url) }}
            defaultSource={defaultPjImage}
          />
          <View style={styles.projectName}>
            <Text style={styles.bottomTextTitle} numberOfLines={1}>
              {joinedPj?.name}
            </Text>
            <Text style={styles.bottomText}>{joinedPj?.customer}</Text>
          </View>
        </View>
        {getedTask ? (
          <IconButton
            icon="plus"
            size={20}
            iconColor="black"
            onPress={() => {
              if (refInput) refInput.current?.focus()
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
        <Text style={styles.bottomText}>
          Total:
          {joinedPj.total_closed}/{joinedPj.total}
        </Text>
        <Text style={styles.bottomText}>{genUsersAvatar()}</Text>
      </View>
      <View style={styles.listTasks}>
        {pjState &&
          pjState?.data?.project?.tasks.length > 0 &&
          pjState?.data?.project?.tasks.map((task: TTask) => {
            return taskSelected?.id === task.id && fetchingTask ? (
              <View style={styles.loadingSkeleton} key={task.id}>
                <TaskSkeleton />
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
                      <Text numberOfLines={1} style={styles.taskContent}>
                        {task.name}
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
          <View style={styles.loadingSkeleton}>
            <TaskSkeleton />
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
              onChangeText={text => setTaskName(text)}
              value={taskName}
              allowFontScaling={false}
              placeholder="Input text"
              style={styles.createTask}
              onSubmitEditing={createTask}
              ref={refInput}
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
    padding: 5,
    paddingBottom: 0,
  },
  projectTitleBottom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
  },
  projectName: {
    marginLeft: 10,
    marginBottom: 10,
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
    width: 150,
    fontWeight: '400',
    fontSize: 16,
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
    backgroundColor: 'rgba(224, 224, 224, 0.3)',
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
  loadingSkeleton: {
    padding: 10,
  },
  avatar: {
    position: 'relative',
    paddingLeft: 5,
  },
  avatarStatus: {
    width: 5,
    height: 5,
    borderRadius: 50,
    position: 'absolute',
    top: 0,
    right: 0,
  },
})
