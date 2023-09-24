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
git commit -m "Add: Reset password prompt"
git push -u origin main
git tag -a v0.1.36 -m "Add: Reset password prompt"
git push origin v0.1.36

```
