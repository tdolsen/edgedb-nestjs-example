# NestJS + EdgeDB

## Setup

1. `edgedb project init`
2. `edgedb migrate`
3. `yarn install`
4. `yarn generate:edgeql`
5. `yarn dev`
6. Server should now be running!

### GraphQL

This repo uses the `@nestjs/graphql` module, setting up it's own GraphQL endpoint at [localhost:3000/graphql][graphql].

[graphql]: https://localhost:3000/graphql

### Generated code path mapping

- `tsconfig.compilerOptions.paths` ensures `generated/edgeql` is available in sources through imports from `̃~/edgeql`.
- The generated code is placed outside of `src`. (As that proved more convenient for committing it into the source, for
  the purpose of building Docker images in CI without having a running EdgeDB instance to introspect.)
- Paths immediately inside `src/*` are also available from `~/*`, so beware of conflicts - `~/edgedb != ~/edgeql`.

### Docker

Also included in this repo are two `Dockerfile`s, (for API and EdgeDB servers), as well as a `docker-compose.yml`
configuration for building and instantiating them.
