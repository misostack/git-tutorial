# Workflows

## Gitflow workflow

![alt text](image.png)

The idea is starting with 2 branches:

- main(master) : production ready state
- develop : latest delivered development state

### Supporting branches

**Feature branches**

- May branch off from: develop
- Must merge back into: develop
- Branch naming convention: feature/

**creating a feature branch**

```sh
git checkout -b feature/fr-001-authentication
```

**create pr**

```sh
gh pr create --base develop  --title "feat(api): #123 secure access for application" --body "
## Issues
    - feat(api) #123 secure access for application
## Impacted packages
    - api
" --assignee "@me,@copilot"
```

**finishing a feature branch**

```sh
git checkout develop
git merge --no-ff feature/fr-001-authentication
```

### Naming conventions

- main : production releases
- develop: next release
- feature branches: feature/
- release branches: release/
- support branches: support/

## References

- https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow
- https://www.atlassian.com/git/tutorials/comparing-workflows
- https://nvie.com/posts/a-successful-git-branching-model/
