# Association & Population Data Platform

A modern web application for managing associations and population data, built with Next.js and TailwindCSS.

## Features

- Association Management
  - View association details and activities
  - Manage association members
  - Track association activities

- User Profiles
  - Create and edit user profiles
  - Manage private and public profile fields
  - Link profiles to associations

- Access Control
  - Request access to associations
  - Admin approval workflow
  - Role-based permissions

- Notifications
  - Real-time notifications for access requests
  - Activity updates
  - System alerts

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: TailwindCSS
- **State Management**: React Context API
- **API**: Mock API (simulating Django backend)

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── associations/      # Association pages
│   ├── profiles/          # Profile pages
│   ├── requests/          # Access request pages
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
├── lib/                   # Utility functions and API
└── types/                 # TypeScript type definitions
```

## Development

- Run the development server: `npm run dev`
- Build for production: `npm run build`
- Start production server: `npm start`
- Lint code: `npm run lint`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 