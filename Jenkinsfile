pipeline {
   agent any
   stages {
      stage('Pull Playwright image') {
            steps {
                sh 'docker pull mcr.microsoft.com/playwright:v1.55.0-noble'
            }
      }
      stage('e2e-tests') {
         steps {
            sh 'npm ci'
            sh 'npx playwright test'
         }
      }
   }
}
