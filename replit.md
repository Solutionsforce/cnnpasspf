# CNN Brasil Website

## Overview

This is a Flask-based web application that replicates the CNN Brasil news website interface. The project is currently in its initial setup phase, featuring a responsive header with navigation elements and styling that matches the CNN Brasil brand identity.

## System Architecture

### Frontend Architecture
- **Template Engine**: Jinja2 (Flask's default templating engine)
- **UI Framework**: Bootstrap 5.3.0 for responsive design and components
- **Icons**: Font Awesome 6.4.0 for scalable vector icons
- **Typography**: Google Fonts integration (CNN Sans and Arial fallbacks)
- **Styling**: Custom CSS with modern flexbox layouts and responsive design patterns

### Backend Architecture
- **Framework**: Flask (Python web framework)
- **Structure**: Simple single-file application with modular potential
- **Configuration**: Environment-based secret key management
- **Routing**: Basic route handling with template rendering

## Key Components

### Application Structure
- `app.py`: Main Flask application with route definitions
- `main.py`: Application entry point and runner
- `templates/index.html`: Main page template with responsive header
- `static/css/style.css`: Custom styling for CNN Brasil brand identity
- `static/js/script.js`: Interactive JavaScript for menu functionality

### Header Component
- Fixed-position navigation bar with CNN Brasil branding
- Responsive hamburger menu for mobile devices
- Search functionality with interactive button
- Clean, professional styling matching CNN's visual identity

### Interactive Features
- Animated hamburger menu transformation
- Search button with placeholder functionality
- Responsive design adapting to different screen sizes

## Data Flow

Currently, the application follows a simple request-response pattern:
1. User requests the root URL (`/`)
2. Flask routes the request to the `index()` function
3. Template engine renders `index.html` with static assets
4. Browser loads CSS and JavaScript for interactive features

## External Dependencies

### CDN Resources
- **Bootstrap 5.3.0**: UI components and responsive grid system
- **Font Awesome 6.4.0**: Icon library for navigation elements
- **Google Fonts**: Typography (CNN Sans and Arial)

### Python Dependencies
- **Flask**: Web framework for handling HTTP requests and responses
- **Jinja2**: Template engine (included with Flask)

## Deployment Strategy

### Development Setup
- Application runs on host `0.0.0.0` port `5000`
- Debug mode enabled for development
- Session secret configurable via environment variable

### Heroku Deployment
- **Procfile**: Configured with `web: gunicorn main:app`
- **Runtime**: Python 3.11.6 specified in runtime.txt
- **Port Configuration**: Dynamic port assignment via `PORT` environment variable
- **Debug Mode**: Disabled for production (`debug=False`)
- **Dependencies**: Managed through pyproject.toml with Flask and Gunicorn

### Production Considerations
- Environment variable `SESSION_SECRET` should be set for security
- Debug mode disabled in production
- Static file serving optimized for web deployment
- Git repository configured with appropriate .gitignore

## User Preferences

Preferred communication style: Simple, everyday language.
All changes must be implemented for both desktop and mobile versions, with mobile being the priority.

## Changelog

- June 29, 2025: Heroku deployment preparation
  - Created Procfile for Gunicorn configuration
  - Added runtime.txt specifying Python 3.11.6
  - Configured dynamic port assignment for production
  - Disabled debug mode for production deployment
  - Added comprehensive README.md with deployment instructions
  - Created .gitignore for proper version control
- June 28, 2025: Initial setup