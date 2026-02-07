# Contributing

Thank you for your interest in contributing! This document provides guidelines for contributions.

## How to Contribute

### Reporting Issues

1. Check existing issues before creating a new one
2. Use a clear, descriptive title
3. Include steps to reproduce (if applicable)
4. Specify your environment (OS, Node version, etc.)

### Pull Requests

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/description`
3. Make atomic commits following [Conventional Commits](https://www.conventionalcommits.org/)
4. Ensure tests pass (if applicable)
5. Push to your fork: `git push origin feature/description`
6. Open a Pull Request with a clear description

### Commit Convention

```
type(scope): description

Types:
- feat: New feature
- fix: Bug fix
- refactor: Code refactoring
- style: Code style changes
- docs: Documentation updates
- test: Test additions/modifications
- chore: Maintenance tasks
```

Example: `feat(auth): add SSO login support`

### Code Standards

- Use TypeScript strict mode
- Follow existing code style
- Add comments for complex logic
- Update documentation when needed

## Project Structure Tour

To help you navigate the codebase:

- **`apps/web`**: All Next.js frontend logic.
  - **`src/components/landing`**: Public pages (Hero, Features, Pricing).
  - **`src/components/app`**: Protected dashboard components (Requires Auth).
  - **`src/lib/hooks`**: Custom React hooks.
- **`apps/contracts`**: Solidity Smart Contracts (Hardhat).

## Legal & IP

This project is licensed under **BSL 1.1**.

- You may contribute improvements.
- You may NOT use this code for commercial competing products.
- See `LICENSE` for details.

## Code of Conduct

Be respectful and inclusive. See [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

## Questions?

Open a GitHub Discussion or Issue.
