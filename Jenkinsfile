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
            post {
                  always {
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
        stage('Produccion') {
            steps {
                echo 'Test'
            }
        }
    }

}