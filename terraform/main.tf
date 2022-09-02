terraform {
  required_providers {
    google = {
      source = "hashicorp/google"
      version = "4.34.0"
    }
  }
}

provider "google" {
  project = "holesite"
  region = "us-west1"
  zone = "us-west1-b"
}

resource "google_storage_bucket" "bit_wiki" {
  name = "bit_wiki"
  location = "us-west1"
  lifecycle_rule {
    action {
      type = "Delete"
    }
    condition {
      num_newer_versions = 3
      days_since_noncurrent_time = 14
    }
  }
  versioning {
    enabled = true
  }
}