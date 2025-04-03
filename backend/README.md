# Association & Population Data Platform - Backend

This is the Django backend for the Association & Population Data Platform.

## Setup

1. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Create a `.env` file in the root directory with the following variables:
```
DEBUG=True
DJANGO_SECRET_KEY=your-secret-key-here
```

4. Run migrations:
```bash
python manage.py makemigrations
python manage.py migrate
```

5. Create a superuser:
```bash
python manage.py createsuperuser
```

## Running the Server

```bash
python manage.py runserver
```

The server will run at `http://localhost:8000`

## API Endpoints

- Users: `/api/users/`
- Associations: `/api/associations/`
- Activities: `/api/activities/`
- Access Requests: `/api/access-requests/`
- Memberships: `/api/memberships/`

## Authentication

The API uses session authentication. You can log in at `/api/auth/login/` and log out at `/api/auth/logout/`.

## Features

- User management with extended profile fields
- Association management
- Activity tracking
- Access request system
- Membership management
- Arabic language support
- CORS enabled for frontend integration 