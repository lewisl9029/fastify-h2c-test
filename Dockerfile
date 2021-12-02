FROM node:16.13-alpine3.14

EXPOSE 58080

WORKDIR /app

# Prefer not to run as root.
USER node

# Give ownership of files to user
USER root
RUN chown -R node /app
RUN corepack enable
USER node
COPY --chown=node ./ /app/

ENTRYPOINT [ "yarn" ]
CMD ["start"]