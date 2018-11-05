pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'npm install --silent'
      }
    }
    stage('Test') {
      steps {
        sh 'npm test'
      }
    }
  }
  post {
    always {
      sh 'echo "This will always run"'

    }

  }
  options {
    buildDiscarder(logRotator(numToKeepStr: '10'))
  }
}