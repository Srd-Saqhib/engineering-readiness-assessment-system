# Use official Python image
FROM python:3.13-slim

# Prevent Python from writing .pyc files
ENV PYTHONDONTWRITEBYTECODE=1

# Print logs immediately
ENV PYTHONUNBUFFERED=1

# Set working directory
WORKDIR /app

# Copy requirements first
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the project
COPY . .

# Cloud Run provides PORT environment variable
ENV PORT=8080

# Expose the port
EXPOSE 8080

# Start the application
CMD ["gunicorn", "--bind", "0.0.0.0:8080", "app:app"]