FROM oven/bun:1


WORKDIR /app

ARG DATABASE_URL
# Copy package.json and package-lock.json
COPY ./packages ./packages
COPY ./bun.lock ./bun.lock

COPY ./package.json ./package.json
COPY ./turbo.json ./turbo.json

COPY ./apps/ws ./apps/ws
# Install dependencies





RUN bun install
RUN bun run db:generate


EXPOSE 8000

CMD ["bun","run","start:ws"]


