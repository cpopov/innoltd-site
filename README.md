# Inno Ltd. web site

## Run locally

```bash
jekyll serve
```

## Build

```bash
jekyll build
```

## Deploy to Amazon S3

Install aws cli and set up your credentials. (see http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html)

Then build and use the cli to upload the files


```bash 
aws s3 sync _site s3://www.innoltd.co.uk --cache-control max-age=3600
```

Cleanup:

```bash
aws s3 rm s3://www.innoltd.co.uk --recursive
```
