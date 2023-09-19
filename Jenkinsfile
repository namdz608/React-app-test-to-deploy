pipeline{
    agent{
        label "jenkins-agent"
    }
    tools {
        nodejs 'NodeVer16'
    }
    stages{
        stage("Clean up workspace"){
            steps{
                cleanWs()
            }
        }
        stage("Checkout from SCM"){
            steps {
                git branch: 'main', credentialsId: 'github', url: 'https://github.com/namdz608/React-app-test-to-deploy'
            }
        }

        stage("Build Application"){
            steps {
                sh "npm i --force"
            }
        }

        stage("Test Application"){
            steps {
                sh 'npm run build'
            }
        }
        
        stage("Sonarqube Analysis"){
            steps {
                script {
                    withSonarQubeEnv(credentialsId: 'sonar-token') {
                        sh "npm install sonar-scanner"
                        sh "npm run sonar"
                    }
                } 
            }
        }
    }
}