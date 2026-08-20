FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# next.config.mjs sets output: "export", so the build produces a static
# /out directory, not a .next/standalone server. Serve it with nginx.
FROM nginx:alpine AS runner
COPY --from=builder /app/out /usr/share/nginx/html

EXPOSE 80
