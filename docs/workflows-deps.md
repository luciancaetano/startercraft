
# How to Configure and Run the Dependency Workflows

This project provides two main workflows for monitoring and updating dependencies using npm-check-updates (ncu):

- **deps-report.yml**: Generates a weekly report of outdated dependencies and saves it as an artifact.
- **pr-ncu-comment.yml**: Automatically comments on Pull Requests with the list of dependencies that have new versions available.

---

## 1. GitHub Token Configuration

Both workflows use the default `${{ secrets.GITHUB_TOKEN }}` provided automatically by GitHub Actions. You do not need to manually create or configure a token for basic operation.

If you need additional permissions (e.g., to comment on PRs from forks), you can create a Personal Access Token (PAT) and add it as a secret in your repository:

1. Go to your repository settings on GitHub.
2. Navigate to **Settings > Secrets and variables > Actions**.
3. Click **New repository secret**.
4. Name it `GH_TOKEN` and paste your token value.
5. In the workflow, replace `token: ${{ secrets.GITHUB_TOKEN }}` with `token: ${{ secrets.GH_TOKEN }}`.

> For most cases, the default `GITHUB_TOKEN` is sufficient.

---

## 2. How to Run the Workflows

### a) Weekly Workflow (`deps-report.yml`)

- Runs automatically every Monday at 9:00 AM (Brazil time, 12:00 UTC).
- Can also be triggered manually from the GitHub Actions panel:
  1. Go to the **Actions** tab in your repository.
  2. Select **Weekly Dependency Update Report**.
  3. Click **Run workflow**.
- The generated report will be available as a workflow artifact.

### b) Pull Request Workflow (`pr-ncu-comment.yml`)

- Runs automatically every time a PR is opened, updated, or reopened.
- Comments on the PR with the list of outdated dependencies, using the plain output from the `ncu` command.
- No manual configuration is required to run.

---

## 3. Requirements

- The project must have a valid `package.json` file in the root.
- The workflow uses Node.js 20 and installs `npm-check-updates` globally.

---

## 4. Customization

If you want to change schedules, comment format, or permissions, simply edit the files in `.github/workflows/` as needed.

---

Questions? Open an issue or check the official documentation for [GitHub Actions](https://docs.github.com/actions) and [npm-check-updates](https://www.npmjs.com/package/npm-check-updates).
