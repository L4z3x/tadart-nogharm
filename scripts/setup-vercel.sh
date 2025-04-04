#!/bin/bash

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "Vercel CLI is not installed. Installing..."
    npm install -g vercel
fi

# Check if user is logged in to Vercel
vercel whoami &> /dev/null
if [ $? -ne 0 ]; then
    echo "You are not logged in to Vercel. Please log in:"
    vercel login
fi

# Link the project to Vercel
echo "Linking project to Vercel..."
vercel link

# Deploy to Vercel
echo "Deploying to Vercel..."
vercel --prod

echo "Deployment complete! Your project is now live on Vercel."
echo "To set up GitHub Actions deployment, you need to add the following secrets to your GitHub repository:"
echo "- VERCEL_TOKEN: Get this from your Vercel account settings"
echo "- VERCEL_ORG_ID: Get this from your Vercel project settings"
echo "- VERCEL_PROJECT_ID: Get this from your Vercel project settings" 