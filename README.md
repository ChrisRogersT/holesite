# Repo for some hobby dev with the hole

## BitWiki
BitWiki-svelte is a svelte.js implementation of a bitwiki front end. It is deployed to [Vercel](https://vercel.com/) for hosting, currently Chris's account TBD on if there is a need for a team managed org. Data storage TBD, plan is terraform managed gcloud bucket. No current plan for how to automate the pointer to it.

## Terraform
State hosted by [terraform cloud](https://app.terraform.io/), org managed by Chris's account TBD on if there is a need for a team managed org. Plans and Applies are also managed by the same terraform cloud plus integration with github to watch the terraform directory/main branch/PRs to run Plans and Applies.