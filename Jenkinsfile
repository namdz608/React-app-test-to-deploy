pipeline{
    agent{
        label "jenkins-agent"
    }
    tools {
        nodejs 'NodeVer16'
    }
    environment {
        APP_NAME = "complete-production"
        RELEASE = "1.0.0"
        DOCKER_USER = "brucewyane"
        DOCKER_PASS = "docker-hub"
        IMAGE_NAME = "${DOCKER_USER}" + "/" + "${APP_NAME}"
        IMAGE_TAG = "${RELEASE}-${BUILD_NUMBER}"
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
        
        // stage("Sonarqube Analysis"){
        //     steps {
        //         script {
        //             withSonarQubeEnv(credentialsId: 'sonar-token') {
        //                 sh "npm install sonar-scanner --force"
        //                 sh "npm run sonar-scanner"
        //             }
        //         } 
        //     }
        // }

         stage("Build and push docker"){
            // steps {
            //     script {
            //         docker.withRegistry('',DOCKER_PASS){
            //             docker_image = docker.build "${IMAGE_NAME}"
            //     }
            //         docker.withRegistry('',DOCKER_PASS){
            //             docker_image.push("${IMAGE_TAG}")
            //             docker_image.push("latest")
            //     }
            //     }
                
            // }
            steps {
                sh 'cd /home/jenkins/workspace/complete-production'
                sh 'docker build -t brucewyane/react:latest .'
            }
        }

        stage("Docker Push"){
            steps {
                sh "docker login -u brucewyane -p vukhanhnam123"
                sh 'docker push brucewyane/react:latest'
            }
        }

        stage("Deploy K8s"){
            steps {
                sh "cd /home/jenkins/workspace/complete-production"
                sh "ls"
                // sh "kubectl apply -f ./deployment_service.yaml"
                sh "kubectl get svc"
            }
        }
    }
}