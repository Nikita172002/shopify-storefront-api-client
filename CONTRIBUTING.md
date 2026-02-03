# Contributing

Thank you for your interest in contributing to this project! This document provides guidelines and instructions for contributing.

## Getting Started

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/shopify-storefront-api.git
   cd shopify-storefront-api
   ```
3. Install dependencies:
   ```bash
   pnpm install
   ```
4. Create a branch for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Setup

See [DEVELOPMENT.md](./DEVELOPMENT.md) for detailed setup instructions, scripts, and architecture overview.

### Quick Start

```bash
pnpm install          # Install dependencies
pnpm run gen:types    # Generate types from YAML specs
pnpm run check        # Verify TypeScript compiles
pnpm test             # Run tests (requires .env setup)
```

## Making Changes

### Code Style

- Run `pnpm lint:fix` before committing to fix linting issues
- Run `pnpm format` to format code with Prettier
- Follow existing code patterns and naming conventions

### Type Changes

If you're modifying types:

1. Edit the YAML specification in `types/`
2. Run `pnpm run gen:types` to regenerate TypeScript types
3. Update any affected queries in `src/queries/`
4. Fix any TypeScript errors
5. Add or update tests as needed

**Never edit files in `src/generated/` directly** - they are auto-generated.

### Adding New Features

1. **New API methods**: Add to the appropriate file in `src/remote/`
2. **New queries**: Add to `src/queries/` and export from `src/queries/index.ts`
3. **New types**: Add to YAML specs in `types/` and regenerate

### Writing Tests

Tests are in the `test/` directory. When adding tests:

- Follow the existing test framework patterns
- Use `skip()` for tests that depend on store-specific data
- Handle rate limiting gracefully for customer-related tests

## Submitting Changes

### Commit Messages

Use clear, descriptive commit messages:

```
feat: add support for product metafields
fix: handle null price range in decoder
docs: update API reference for cart methods
refactor: simplify executor error handling
```

### Pull Request Process

1. Ensure all tests pass: `pnpm test`
2. Ensure no TypeScript errors: `pnpm run check`
3. Ensure code is formatted: `pnpm format:check`
4. Update documentation if needed
5. Create a pull request with:
   - Clear description of changes
   - Any breaking changes noted
   - Related issue numbers (if applicable)

### Pull Request Checklist

- [ ] Code follows project style guidelines
- [ ] Tests added/updated for changes
- [ ] Documentation updated (if applicable)
- [ ] Types regenerated (if YAML specs changed)
- [ ] All tests pass
- [ ] No TypeScript errors

## Reporting Issues

When reporting issues, please include:

- Description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Node.js version
- Package version
- Relevant code snippets or error messages

## Questions?

Feel free to open an issue for questions or discussions about potential changes before starting work on a large feature.

## License

By contributing, you agree that your contributions will be licensed under the project's ISC license.
