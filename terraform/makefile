clean:
	rm -rf .terraform

.terraform:
	terraform init;

init: .terraform

validate: .terraform
	terraform validate;