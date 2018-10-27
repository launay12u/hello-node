pipeline {
  agent any
  stages {
    stage('Docker -v') {
      steps {
        sh '''docker -v
'''
        sh 'Whoiam'
        sh 'docker ps'
      }
    }
  }
}