# Alexa Skill Template
Simple template hacked together for easily developing and deploying an Alexa skill from the CLI.

## Prerequisites
  -  Node.js (at least 8.x)
  -  Register for an [AWS Account](https://aws.amazon.com/)
  -  Install and Setup [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/installing.html)
  -  Configure a named [AWS CLI Profile](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html#cli-quick-configuration) (ideally called "default")
  -  Register for an [Amazon Developer Account](https://developer.amazon.com/)

## Steps for deploying a new skill
  1. Do changes to code in `src/`
  1. Do changes to model in `models/$locale.json`
  1. Update package name in `package.json`
  1. Update info in `skill.json`
  1. Update uris in `.ask/config`