pipeline {
    agent any
    environment {
        PATH = "$PATH:/DEV"
        }
    stages {
        stage('Build') {
            steps {

                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'echo $PATH'
                sh 'npm test'
            }
        }
        stage('Produccion') {
            steps {
                echo 'Test'
            }
        }
    }
    post {
      always {
        stage('reports') {
            steps {
            script {
                    allure([
                            includeProperties: false,
                            jdk: '',
                            properties: [],
                            reportBuildPolicy: 'ALWAYS',
                            results: [[path: 'allure-results']]
                    ])
            }
            }
        }
      }
    }
}