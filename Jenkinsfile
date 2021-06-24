pipeline {
  agent any
 
  stages {
    stage('deploy') {
      steps {
        samDeploy([credentialsId: 'awscred', kmsKeyId: '', outputTemplateFile: '', region: 'us-east-2', roleArn: '', s3Bucket: 'sam-jenkins-demo', s3Prefix: '', stackName: 'dev-stack', templateFile: 'template.yaml'])
      }
    }
  }
}