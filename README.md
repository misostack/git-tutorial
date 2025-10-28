# Git Tutorial

## Git commit convention

```md
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

- fix: a commit of the type fix patches a bug in your codebase (this correlates with PATCH in Semantic Versioning).
- feat: a commit of the type feat introduces a new feature to the codebase (this correlates with MINOR in Semantic Versioning).
- BREAKING CHANGE: a commit that has a footer BREAKING CHANGE:, or appends a ! after the type/scope, introduces a breaking API change (correlating with MAJOR in Semantic Versioning). A BREAKING CHANGE can be part of commits of any type.
- types other than fix: and feat: are allowed, for example @commitlint/config-conventional (based on the Angular convention) recommends build:, chore:, ci:, docs:, style:, refactor:, perf:, test:, and others.

```sh
git commit -am "feat: #123 - allow provided config object to extend other configs
"
```

## Git rebase

```sh
git checkout ft-branch
git rebase main
```

## One commit

## Feature A ( Ticket 123 )

> Ticket 123, Feature A

> Ticket 123, line 2 of feature a

> Ticket 123, line 3

> Ticket 123, line 4

> Ticket 123, line 5

## References

- https://www.conventionalcommits.org/en/v1.0.0/

## Feature B ( Ticket 345 )

> Ticket 345, Feature B

> Ticket 345, Feature B line 1
