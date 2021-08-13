pipeline {
    agent any
triggers {
    GenericTrigger( genericVariables: [
                   [defaultValue: '', key: 'URL', regexpFilter: '', value: ''],
                   [defaultValue: '', key: 'TARGET_URL', regexpFilter: '', value: '']
                   ],
                    causeString: 'Generic Cause',
                    printContributedVariables: true,
                    regexpFilterExpression: '',
                    regexpFilterText: '',
                    silentResponse: true,
                    token: 'aa123',
                    tokenCredentialId: '')
}
    environment {
        PATH = "$PATH:/DEV"
        }
    stages {
        stage('Lighthouse test'){
            steps {
                sh 'echo $PATH'
            }
        }
        stage('Produccion') {
            steps {
                echo 'Test'
            }
        }
    }
}
