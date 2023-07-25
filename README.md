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