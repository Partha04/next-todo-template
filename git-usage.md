# Commit

## Commit Syntax

```git
[commit type]:<commit message>
```

## Commit types

- `feat`: New feature
- `fix`: Bug fix
- `chore`: Routine task or maintenance
- `refactor`: Code refactoring
- `docs`: Documentation changes
- `style`: Code styling and formatting
- `test`: Test-related changes
- `perf`: Performance-related changes
- `ci`: Continuous integration system-related changes
- `build`: Build process-related changes
- `revert`: Reverting a previous commit

# Checkout new branch

```git
git checkout -b [branch type]/<branch name>
```

## Branch Types

| Branch | Name | Notes |
|---|---|---|
| Stable | main | Accepts merges from Release and Hotfix branches only.|
| Development | develop | Accepts merges from Feature/Bugfix, Release and Hotfix | 
| Features/Bugfix | feat-* / bug-* | Always branch off HEAD of develop |
| Hotfix | hotfix-* | Always branch off master. Merges back into master and develop.|
| Release | release-* | Always branches off develop. Last minute  changes for release.|

