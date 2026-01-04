BookEasy is a simple booking system built with Laravel, Inertia.js, React, and TypeScript.
It allows users to create and manage bookings while enforcing basic business rules such as preventing duplicate bookings on the same date.

The project focuses on date-based validation, booking status management, and clean server-driven logic without user authentication.

Features

- Create bookings with a selected date
- Prevent multiple active bookings on the same date
- Update booking status (Pending, Confirmed, Cancelled)
- Cancel bookings to free up the selected date
- Display booking status with clear visual indicators
- Clean navigation and user feedback with toast notifications

Tech Stack

- Laravel
- Inertia.js
- React
- TypeScript
- MySQL
- Tailwind CSS

Pages / Flow

- Landing page
- Booking list
- Create booking page
- Booking details page

Validation Rules

- Booking date is required
- Booking date cannot be in the past
- Only one active booking is allowed per date
- Cancelled bookings do not block the date

What This Project Demonstrates

- Implementing business rules in backend logic
- Date-based validation and comparison
- Server-driven filtering and state management
- Clean separation between backend and frontend responsibilities
- Building a focused system without unnecessary complexity

Limitations

- Single-user only
- No authentication
- One booking per day
- No time-slot selection