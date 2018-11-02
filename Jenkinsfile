pipeline {
  agent any
  stages {
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
  options {
    buildDiscarder(logRotator(numToKeepStr: '5'))
  }
}