# cdn

```sh
git tag -a v1.0.0 -m "Version 1.0.0"
```

```sh
git push origin v1.0.0
```

```sh
git log --pretty=format:%s <last release>...HEAD --no-merges
```

```sh
git tag -a <tag name> -m"$(git log --pretty=format:%s <last release>...HEAD --no-merges)"
```

```sh
git add .
git commit -m "Add cvs js files"
git push -u origin main
git tag -a v0.1.16 -m"Auto click biometric if password is not entered in the login-id screen"
git push origin v0.1.16

```