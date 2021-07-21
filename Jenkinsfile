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
        stage('Integration Test') {
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
        stage('Lighthouse test'){
            steps{
            sh 'mkdir lighthouse-report'
            sh 'lighthouse --chrome-flags="--disable-gpu --headless --enable-logging --no-sandbox" --output json --output html --output-path lighthouse-report/report.json http://test.tiendaluzsavinon.com:9091/ '
            }
             post {
                    always {
                        archiveArtifacts artifacts: 'lighthouse-report/*', onlyIfSuccessful: true
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