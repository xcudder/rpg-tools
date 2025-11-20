> **Disclaimer:** This README was 100% AI generated.

# Character Sheet Application

A full-stack web application for creating and managing character sheets with D&D-style attribute point allocation. Built with Rails 7, React, TypeScript, and Docker.

## Tech Stack

### Backend
- **Ruby 3.3.1** - Programming language
- **Rails 7.1.6** - Web framework
- **PostgreSQL 16** - Database
- **Puma** - Web server

### Frontend
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **esbuild** - JavaScript bundler
- **Sass** - CSS preprocessor

### Infrastructure
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration
- **Traefik** - Reverse proxy and load balancer

## Prerequisites

- Docker and Docker Compose installed
- (Optional) Ruby 3.3.1 and Node.js for local development

## Getting Started

### Using Docker (Recommended)

1. **Clone the repository** (if applicable) or navigate to the project directory

2. **Start the services:**
   ```bash
   docker compose up
   ```

   This will:
   - Build the Rails application container
   - Start PostgreSQL database
   - Start Redis (if needed)
   - Start Traefik reverse proxy
   - Run the Rails server and JavaScript watcher

3. **Set up the database:**
   ```bash
   docker compose exec app bin/rails db:create db:migrate
   ```

4. **Access the application:**
   - Application: http://exercises.localhost
   - Traefik Dashboard: http://localhost:8080

### Local Development (Without Docker)

1. **Install dependencies:**
   ```bash
   bundle install
   yarn install
   ```

2. **Set up the database:**
   ```bash
   bin/rails db:create db:migrate
   ```

3. **Start the development servers:**
   ```bash
   bin/dev
   ```
   
   This uses `Procfile.dev` to run:
   - Rails server on port 3000
   - JavaScript/CSS watcher (esbuild)

4. **Access the application:**
   - http://localhost:3000

## Project Structure

```
app/
├── app/
│   ├── controllers/
│   │   ├── home_controller.rb      # Home page controller
│   │   └── sheets_controller.rb    # CRUD operations for character sheets
│   ├── models/
│   │   └── sheet.rb                # Character sheet model with validations
│   ├── views/
│   │   ├── layouts/
│   │   │   └── application.html.erb
│   │   └── home/
│   │       └── index.html.erb      # React root container
│   └── javascript/
│       ├── application.tsx         # React entry point
│       └── components/
│           ├── App.tsx             # Main character sheet component
│           ├── App.scss            # Component styles
│           ├── AttributeRow.tsx    # Attribute input component
│           └── NameField.tsx       # Character name input
├── config/
│   ├── routes.rb                   # Rails routes
│   └── application.rb
├── db/
│   ├── schema.rb                   # Database schema
│   └── migrate/                    # Database migrations
├── Dockerfile                       # Docker image definition
├── compose.yml                      # Docker Compose configuration
├── esbuild.config.js               # JavaScript bundler configuration
├── package.json                     # Node.js dependencies
├── Gemfile                          # Ruby dependencies
├── Procfile.dev                     # Development process configuration
└── tsconfig.json                    # TypeScript configuration
```

## Features

### Character Sheet Management
- Create character sheets with a name and six attributes:
  - Strength
  - Intelligence
  - Dexterity
  - Constitution
  - Wisdom
  - Charisma

### Point Allocation System
- Point-based attribute system with cost mapping:
  - Attributes 7-9: Negative point costs
  - Attribute 10: Base (0 cost)
  - Attributes 11-18: Increasing positive costs
- Real-time point calculation as attributes change
- Visual feedback for successful saves and errors

### API Endpoints

- `GET /` - Home page with React application
- `GET /sheets` - List all character sheets
- `POST /sheets` - Create a new character sheet
- `GET /sheets/:id` - Show a specific sheet
- `PATCH/PUT /sheets/:id` - Update a sheet
- `DELETE /sheets/:id` - Delete a sheet

## Development Workflow

### JavaScript/TypeScript Development

The frontend uses esbuild for bundling with watch mode:

```bash
# Build once
yarn build

# Watch mode (auto-rebuild on changes)
yarn build:watch

# Type checking
yarn typecheck
```

The `Procfile.dev` automatically runs the watcher in development.

### Database Migrations

```bash
# Create a new migration
docker compose exec app bin/rails generate migration MigrationName

# Run migrations
docker compose exec app bin/rails db:migrate

# Rollback last migration
docker compose exec app bin/rails db:rollback
```

### Rails Console

```bash
docker compose exec app bin/rails console
```

### Running Tests

```bash
docker compose exec app bin/rails test
```

## Docker Services

### App Service
- Rails application server
- JavaScript/CSS asset compilation
- Port: 3000 (internal)
- Accessible via Traefik at `exercises.localhost`

### PostgreSQL Service
- Database server
- Port: 5432 (internal)
- Database: `exercises_development`
- User: `exercises`
- Password: `sekret`

### Redis Service
- Caching and background jobs (if needed)
- Port: 6379 (internal)

### Traefik Service
- Reverse proxy and load balancer
- Ports: 80 (HTTP), 8080 (Dashboard)
- Routes traffic to the app service

## Configuration

### Environment Variables

The application uses the following environment variables (set in `compose.yml`):

- `DATABASE_URL` - PostgreSQL connection string
- `RAILS_ENV` - Rails environment (development/production)
- `NODE_ENV` - Node environment
- `BIND` - Server bind address

### CSRF Protection

The React application automatically retrieves and includes the CSRF token from the meta tag in the HTML layout for all POST requests.

## Troubleshooting

### Database Connection Issues

If you encounter database connection errors:

```bash
# Check if PostgreSQL is running
docker compose ps

# Restart services
docker compose restart postgres app

# Recreate database
docker compose exec app bin/rails db:drop db:create db:migrate
```

### Asset Compilation Issues

If JavaScript/CSS changes aren't appearing:

```bash
# Rebuild assets
docker compose exec app yarn build

# Or restart the app service to restart the watcher
docker compose restart app
```

### Port Conflicts

If port 80 or 8080 are already in use, modify the port mappings in `compose.yml`:

```yaml
proxy:
  ports:
    - "8081:80"      # Change 80 to another port
    - "8082:8080"    # Change 8080 to another port
```

## License

[Add your license here]

## Contributing

[Add contribution guidelines here]
