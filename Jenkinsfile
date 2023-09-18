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
    }
}