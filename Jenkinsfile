pipeline {
    agent any
triggers {
    GenericTrigger causeString: 'Generic Cause',
                    genericVariables: [
                    [defaultValue: '', key: 'URL', regexpFilter: '', value: ''],
                    [defaultValue: '', key: 'TARGET_URL', regexpFilter: '', value: '']
                    ],
                    printContributedVariables: true,
                    regexpFilterExpression: '',
                    regexpFilterText: '',
                    silentResponse: true,
                    token: 'aa123',
                    tokenCredentialId: ''
}
    environment {
        PATH = "$PATH:/DEV"
        }
    stages {
        stage('Lighthouse test'){
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
