/* eslint-disable camelcase */
import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const JoinedProjectsComponent = () => {
  return (
    <View style={styles.containerContent}>
      <View style={styles.projectTitleTop}>
        <View style={styles.projectImage}>
          <Image
            // eslint-disable-next-line global-require, import/extensions
            source={require('../../assets/project.png')}
          />
          <View style={styles.projectName}>
            <Text style={styles.bottomText}>BMM</Text>
            <Text style={styles.bottomText}>Hệ thống quản lý nhiệm vụ</Text>
          </View>
        </View>
        <Text style={styles.bottomText}>+</Text>
      </View>
      <View style={styles.projectTitleBottom}>
        <Text style={styles.bottomText}>Total: 7/10</Text>
        <Text style={styles.bottomText}>List users</Text>
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
  },
  projectTitleBottom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
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
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.12)',
    flex: 1,
  },
  bottomText: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    color: '#6D6D6D',
  },
})
