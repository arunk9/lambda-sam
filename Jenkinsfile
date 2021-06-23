pipeline {
  agent any
 
  stages {
    stage('deploy') {
      environment {
        STACK_NAME = 'dev-stack'
        S3_BUCKET = 'sam-jenkins-demo'
      }
      steps {
        withAWS(credentials: 'awscred', region: 'us-east-2') {
          sh 'venv/bin/sam deploy --stack-name $STACK_NAME -t template.yaml --s3-bucket $S3_BUCKET --capabilities CAPABILITY_IAM'
        }
      }
    }
  }
}