## map-my-news
React app based on an [open-source template](https://www.creative-tim.com/product/blk-design-system-react?ref=blkdsr-index-page-download-section&_ga=2.75311890.1282743534.1668796676-1609137795.1661799698#) that uses a map to help spread global news instantaneously.

## How to deploy to GCP

1. Create a container registry repository with the name `map-my-news`
2. Build Docker image locally:
```
docker build . --tag map-my-news:v0.0.1 
```
2. Push the first image `map-my-news:v1.0.0` built based on your `Dockerfile` to container registry
3. Create a cloud run service based on the pushed `map-my-news:v1.0.0` image
4. Use the `cloudbuild.yaml` in this repo to re-deploy to cloud run
```
gcloud builds submit --substitutions=_LOCATION="us-central1",_REPOSITORY="map-my-news",_IMAGE="map-my-news:v0.0.1" .
```
5. create a cloud build trigger based `cloudbuild.yaml` on release/push to branch, for continuous deployment