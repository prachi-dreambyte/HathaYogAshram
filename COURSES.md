# Dynamic Courses – What Was Done & How To Use

This document explains the new dynamic courses system, how it powers the site, and how to test it.

## What Was Implemented

1. **Backend models**
- `Course`, `CourseBatch`, `CourseBooking`
- Courses hold all content + home card data
- Batches hold date ranges + seat capacity
- Bookings reduce available seats per batch

2. **Backend APIs**
- `GET /api/courses` (filters + optional `withBatches=true`)
- `GET /api/courses/slug/:slug`
- `GET /api/courses/:id/batches`
- `POST /api/course-bookings` (validates seats)

3. **Frontend dynamic pages**
- `YogaCourse100` is fully dynamic from `/api/courses/slug/100-hour-yttc`
- `Form100` loads batches dynamically and shows availability
- Home sections read courses dynamically:
  - `Explore Our Top Courses`
  - `Yoga Teacher Training Certification*`
  - `Yoga Meditation Retreat in Rishikesh`
  - `200 Hour Hatha Kundalini Yoga Teacher Training Course`
  - `Discover Ayurveda Courses`
- Booking form pulls courses + batches dynamically and creates bookings

4. **Seeder**
- `npm run db:seed` seeds founders, courses, and batches
- Uses current static data as the seed

## How To Run

### 1) Seed the database

```bash
cd /Users/shubham/Development/Prachi/HathaYogAshram_NodeJs
npm install
npm run db:seed
```

### 2) Start backend

```bash
npm run dev
```

Backend runs at `http://localhost:8000`.

### 3) Start frontend

```bash
cd /Users/shubham/Development/Prachi/HathaYogAshram
npm install
npm start
```

Frontend runs at `http://localhost:3000`.

## Where Data Comes From

### Course detail page
- `/YogaCourse100` → data comes from `/api/courses/slug/100-hour-yttc`

### Home – Explore Our Top Courses
- `GET /api/courses?homeSection=top-courses&withBatches=true`
- Uses `course.card` and next batch availability

### Home – Teacher Training Certification*
- `GET /api/courses?homeSection=teacher-training`
- Uses `course.teacherTraining`

### Home – Kundalini section
- `GET /api/courses?homeSection=kundalini`
- Uses `course.kundalini`

### Home – Retreat section
- `GET /api/courses?homeSection=retreat`
- Uses `course.retreat`

### Home – Ayurveda section
- `GET /api/courses?homeSection=ayurveda`
- Uses `course.ayurveda`

### Booking Form
- `GET /api/courses?withBatches=true`
- `POST /api/course-bookings` for booking
- Seat availability = `capacity - confirmed bookings`

## How To Make A Course Show On Each Section

Update `homeSections` in the course document:
- `top-courses`
- `teacher-training`
- `kundalini`
- `retreat`
- `ayurveda`

Example:

```json
{
  "homeSections": ["top-courses", "teacher-training"]
}
```

## API Smoke Tests

```bash
# All top courses
curl http://localhost:8000/api/courses?homeSection=top-courses

# Full detail by slug
curl http://localhost:8000/api/courses/slug/100-hour-yttc

# Batches for a course
curl http://localhost:8000/api/courses/<courseId>/batches

# Create a booking
curl -X POST http://localhost:8000/api/course-bookings \
  -H 'Content-Type: application/json' \
  -d '{"name":"Test User","email":"test@example.com","phone":"123","course":"<courseId>","batch":"<batchId>","seats":1}'
```

## Notes
- Batches control seat availability.
- If you want different price types or per-room pricing, update `CourseBatch` prices.
- You can replace images with uploads later; currently seeded with external URLs.
