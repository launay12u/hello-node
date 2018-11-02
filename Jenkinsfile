pipeline {
  agent any
  options {
    buildDiscarder(logRotator(numToKeepStr:"5"))
  }
  stages {
    stage('Docker build') {
      steps {
        sh 'docker -v'
        sh 'Whoiam'
        sh 'docker ps'
      }
    }
    stage('Running test') {
      steps {
        sh 'npm run test'
      }
    }
  }
  post {
    always {
      sh 'echo "This will always run"'
    }
  }
}