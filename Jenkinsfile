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
            sh 'npx playwright install'
            sh 'npx playwright test'
         }
         post {
            always {
               publishHTML([allowMissing: false, alwaysLinkToLastBuild: true, icon: '', keepAll: false, reportDir: 'reports-e2e/html/', reportFiles: 'index.html', reportName: "Playwright HTML Report", reportTitles: '', useWrapperFilesDirectly: true])
            }
         }
      }
   }
}
