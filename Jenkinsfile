pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'export PATH=$PATH:/DEV'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Produccion') {
            steps {
                echo 'Test'
            }
        }
    }
}