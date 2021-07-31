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

            sh 'rm -r lighthouse-report1'
            sh 'rm lighthouse-report.zip'
            sh 'mkdir lighthouse-report'
            sh 'lighthouse --throttling.cpuSlowdownMultiplier=5 --chrome-flags="--disable-gpu --headless --enable-logging --no-sandbox" --output json --output html --output-path lighthouse-report/report.json http://test.tiendaluzsavinon.com:9091/ '
            script{ zip zipFile: 'lighthouse-report.zip', archive: false, dir: 'lighthouse-report' }
            archiveArtifacts artifacts: 'lighthouse-report.zip', fingerprint: true
            }
        }
        stage('Produccion') {
            steps {
                echo 'Test'
            }
        }
    }

}