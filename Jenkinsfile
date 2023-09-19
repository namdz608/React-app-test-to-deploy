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
        DOCKER_PASS = "dockerhub"
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

        stage("Test Application"){
            steps {
                sh 'npm run build'
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
            steps {
                docker.withRegistry('',DOCKER_PASS){
                    docker_image = docker.build "${IMAGE_NAME}"
                }
                docker.withRegistry('',DOCKER_PASS){
                    docker_image.push("${IMAGE_TAG}")
                    docker_image.push("latest")
                }
            }
        }
    }
}