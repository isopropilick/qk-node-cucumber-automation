pipeline {
    agent any
    stages {
        stage('Build') {
            steps {

                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'export PATH=$PATH:/DEV'
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
}