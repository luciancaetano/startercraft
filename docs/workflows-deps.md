
# GitHub Workflows

This project provides four GitHub Actions workflows:

| Workflow | File | Trigger |
|----------|------|---------|
| **CI** | `ci.yml` | Push/PR to `main` |
| **Release** | `release.yml` | Manual dispatch |
| **Weekly Dependency Report** | `deps-report.yml` | Weekly (Mon 9AM BRT) or manual |
| **PR Dependency Comment** | `pr-ncu-comment.yml` | PR opened/updated/reopened |

---

## 1. CI (`ci.yml`)

Runs on every push or pull request to `main`. Steps:

1. Checkout and setup Node.js 22
2. `npm ci`
3. `npm run build`
4. `npm run test`
5. `npm run lint`

No configuration required.

---

## 2. Release (`release.yml`)

Manual workflow for creating releases. Triggered via the Actions tab with a `release_type` input (`patch`, `minor`, `major`, or `pre`).

Steps:

1. Lint, build, and test the project
2. Bump version in `package.json` using `npm version`
3. Push commit and tag to `main`
4. Create a GitHub Release with auto-generated release notes

Only runs when triggered from the `main` branch.

---

## 3. Weekly Dependency Report (`deps-report.yml`)

- Runs automatically every Monday at 9:00 AM (Brazil time, 12:00 UTC).
- Can also be triggered manually from the GitHub Actions panel:
  1. Go to the **Actions** tab in your repository.
  2. Select **Weekly Dependency Update Report**.
  3. Click **Run workflow**.
- The generated report will be available as a workflow artifact.

---

## 4. PR Dependency Comment (`pr-ncu-comment.yml`)

- Runs automatically every time a PR is opened, updated, or reopened.
- Comments on the PR with the list of outdated dependencies, using the plain output from the `ncu` command.
- No manual configuration is required.

---

## GitHub Token Configuration

All workflows use the default `${{ secrets.GITHUB_TOKEN }}` provided automatically by GitHub Actions. You do not need to manually create or configure a token for basic operation.

If you need additional permissions (e.g., to comment on PRs from forks), you can create a Personal Access Token (PAT) and add it as a secret in your repository:

1. Go to your repository settings on GitHub.
2. Navigate to **Settings > Secrets and variables > Actions**.
3. Click **New repository secret**.
4. Name it `GH_TOKEN` and paste your token value.
5. In the workflow, replace `token: ${{ secrets.GITHUB_TOKEN }}` with `token: ${{ secrets.GH_TOKEN }}`.

> For most cases, the default `GITHUB_TOKEN` is sufficient.

---

## Requirements

- The project must have a valid `package.json` file in the root.
- The dependency workflows use Node.js 20 and install `npm-check-updates` globally.
- The CI workflow uses Node.js 22.

---

## Customization

If you want to change schedules, comment format, or permissions, simply edit the files in `.github/workflows/` as needed.

---

Questions? Open an issue or check the official documentation for [GitHub Actions](https://docs.github.com/actions) and [npm-check-updates](https://www.npmjs.com/package/npm-check-updates).
