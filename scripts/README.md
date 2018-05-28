# How to use

1. Download gcloud auth service token to local disk
2. Encrypt file. Just enter password (need to be free from escapable characters) and set them in ENC_PASSWORD vexor variable
```
openssl enc -in gcloud-auth.json -aes-256-cbc -pass stdin > gcloud-auth.json.enc
```
3. Remove plain file
```
rm -f gcloud-auth.json
```
4. Commit changes to repo
5. Profit!!