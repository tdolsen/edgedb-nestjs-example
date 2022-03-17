# NestJS + EdgeDB

## Setup

1. `edgedb project init`
3. `yarn install`
4. `yarn generate:edgeql`
5. `yarn dev`
6. Server should now be running!

## GraphQL

This example uses the `@nestjs/graphql` module, setting up it's own GraphQL endpoint at [localhost:3000/graphql](https://localhost:3000/graphql).

## Generated code path mapping

- `tsconfig.compilerOptions.paths` ensures `generated/edgeql` is available in sources with imports from `~/edgeql`.
- The generated code is placed outside of `src`.
  - It proved more convenient when having to commit the generated code into the repo (of the project making the basis for this example).
    - Specifically for the purpose of building Docker images in CI.
    - And without having a running EdgeDB instance to introspect.
- Child paths immediately inside `src/*` are also available from `~/*`, so beware of conflicts; eg.:
  - `~/edgedb` refers to `src/edgedb`
  - `~/edgeql` refers to `generated/edgeql`

## Docker

Also included in this repo are two `Dockerfile`s (API + EdgeDB), as well as a `docker-compose.yml` configuration for building and instantiating them.

* Simply running `docker-compose up -d` should do the trick.
* Then `docker-compose build` to rebuild upon any changes you make to the code.
