# Medical UI Components

## Usage

### `.yarnrc`` Configuration:

Specifies the registry for the @agileventures scope to use GitHub Packages:

```bash
"@agileventures:registry" "https://npm.pkg.github.com"
```

### `.npmrc`` Configuration:

Includes an authentication token, which appears to be necessary even for public packages in this case:

```bash
//npm.pkg.github.com/:\_authToken=token
```

The token provides authentication for operations against the GitHub Packages registry.
