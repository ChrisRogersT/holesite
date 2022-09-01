terraform {
  required_providers {
    google = {
      source = "hashicorp/google"
      version = "3.53.0"
    }
  }
}

locals {
    project_id = "holesite"
    region = "us-west1"
    zone = "us-west1-b"
}

provider "google" {
  project = local.project_id
  region  = local.region
  zone    = local.zone
}

module "gcs_buckets" {
  source  = "terraform-google-modules/cloud-storage/google"
  version = "~> 3.3"
  project_id  = local.project_id
  prefix = "bit_wiki"
  names = ["entries"]
  versioning = {
    first = true
  }
}