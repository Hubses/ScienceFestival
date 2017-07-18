#!/bin/bash

if ([ $TRAVIS_BRANCH == "master" ] && [ $TRAVIS_PULL_REQUEST == "false" ])
then
  cd ./festival/frontend
  npm run build-prod
  cd ..
  ./mvnw com.heroku.sdk:heroku-maven-plugin:1.1.4:deploy-war -Pprod -DskipTests -Dheroku.appName=science-festival
  echo 'Master published successfully.'
fi

if ([ $TRAVIS_BRANCH == "dev" ] && [ $TRAVIS_PULL_REQUEST == "false" ])
then
  cd ./festival/frontend
  npm run build
  cd ..
  ./mvnw com.heroku.sdk:heroku-maven-plugin:1.1.4:deploy-war -DskipTests -Dheroku.appName=science-festival-dev
  echo 'Dev published successfully.'
fi