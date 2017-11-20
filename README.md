# Redshift Challenge - Stuff on Cats
![maxresdefault](https://user-images.githubusercontent.com/11274285/33008911-137d6aca-cd79-11e7-9701-4742fd32db55.jpg)

## Website
http://stuffoncats.s3-website-us-west-2.amazonaws.com/

## Getting Started
-  Ensure that the variables found in `.env.sample` have been set
-  Switch to Node.js version `>=6.10`
- `npm install`
- `npm start`

## Hosting on S3
-  Create a new bucket
-  Update the bucket name in the deploy script
-  Be sure that you have configured your `~/.aws/credentials` file properly
- `npm run deploy:s3`
