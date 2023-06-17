#!/bin/bash

echo "VERCEL_GIT_COMMIT_AUTHOR_LOGIN: $VERCEL_GIT_COMMIT_AUTHOR_LOGIN"

if [[ "$VERCEL_GIT_COMMIT_AUTHOR_LOGIN" == "dependabot[bot]" || "$VERCEL_GIT_COMMIT_AUTHOR_LOGIN" == "github-actions[bot]" ]] ; then
  # Don't build
  echo "🛑 - Build cancelled"
  exit 1;

else
  echo "✅ - Build can proceed"
  exit 0;
fi