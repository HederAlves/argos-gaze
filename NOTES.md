## Our Standard Branches

Branch names are made up of 3 parts:

1 — branch type or category. The types can be the following:

- `docs/`- documentation changes only.
- `feat/`- a new feature.
- `fix/`- the correction of a bug.
- `perf/`- code change focused on improving performance.
- `refactor/`- code change that does not add functionality and also does not fix a bug.
- `style/`- changes to the code that do not affect its meaning (white space, formatting, semicolons, etc.).
- `test/`- add or correct tests.
- `chore/`- any update on the project (lib, tools, etc.).
- `build:`- build files and dependencies.

2 — what the branch does itself.

3 — Task code in Trello. Ex.: T123.

### Examples of some branch names that may exist in our application:

`docs/readme-T1`

`feat/create-component-input-T2`

`refactor/improve-code-login-T3`

`fix/search-checklists-T4`

`style/format-registration-code-T5`

---

## Our Standard Commits

The semantic commit has the following structural elements (types), which inform the intention of your commit to the user of your code.

- `feat:`- Commits of type feat indicate that your code snippet is including a new feature** (related to the MINOR of semantic versioning).

- `fix:` - Commits of type fix indicate that your committed code snippet is **solving a problem** (bug fix), (related to the PATCH of semantic versioning).

- `docs:` - Commits of type docs indicate that there were **changes in the documentation**, such as in the Readme of your repository. (Does not include code changes).

- `test:` - Commits of type test are used when **changes to tests** are made, whether creating, changing or deleting unit tests. (Does not include code changes)

- `build:` - Commits of type build are used when modifications are made to **build files and dependencies**.

- `perf:` - Commits of type perf are used to identify any code changes that are related to **performance**.

- `style:` - Commits of type style indicate that there were changes regarding **code formatting**, semicolons, trailing spaces, lint... (Does not include code changes).

- `refactor:` - Commits of type refactor refer to changes due to **refactorings that do not change its functionality**, such as a change in the format in which a certain part of the screen is processed, but which maintained the same functionality, or performance improvements due to a code review.

- `chore:` - Chore commits indicate **build task updates**, administrator settings, packages... such as adding a package to gitignore. (Does not include code changes).
  

### Examples of some commits names that may exist in our application:

`docs: improve readme`

`feat: create component input`

`refactor: remove whitespace from login screen code`

`fix: the bug search checklists`

`style: format the registration screen code`


### Avoid writing commits longer than 50 characters

---


### Commit patterns 📜

According to the **[Conventional Commits](https://www.conventionalcommits.org/pt-br)** documentation, semantic commits are a simple convention to be used in commit messages. This convention defines a set of rules for creating an explicit commit history, which makes it easier to create automated tools.

These commits will help you and your team to easily understand what changes were made to the piece of code that was committed.

This identification occurs through a word and emoji that identifies whether the committed commit is a code change, package update, documentation, visual change, test...
