/* eslint-disable react/no-unescaped-entities */
"use client";

import { CalendarDays, Clock, Sparkles } from "lucide-react";

export default function BookingForm() {
  return (
    <div className="rounded-[32px] bg-white p-10 shadow-lg">
      <p className="uppercase tracking-[0.35em] text-pink-500">
        Book Appointment
      </p>

      <h2 className="mt-4 text-4xl font-bold text-gray-900">
        Reserve Your Beauty Session
      </h2>

      <p className="mt-5 text-gray-600">
        Fill out the form below and we'll contact you shortly to confirm your
        appointment.
      </p>

      <form className="mt-10 space-y-6">
        {/* Name */}

        <div>
          <label
            htmlFor="name"
            className="mb-2 block font-medium text-gray-700"
          >
            Full Name
          </label>

          <input
            id="name"
            type="text"
            placeholder="Enter your full name"
            className="w-full rounded-2xl border border-pink-200 px-5 py-4 outline-none transition focus:border-pink-500"
          />
        </div>

        {/* Contact */}

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="phone"
              className="mb-2 block font-medium text-gray-700"
            >
              Phone Number
            </label>

            <input
              id="phone"
              type="tel"
              placeholder="+977..."
              className="w-full rounded-2xl border border-pink-200 px-5 py-4 outline-none transition focus:border-pink-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block font-medium text-gray-700"
            >
              Email Address
            </label>

            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-2xl border border-pink-200 px-5 py-4 outline-none transition focus:border-pink-500"
            />
          </div>
        </div>

        {/* Service */}

        <div>
          <label
            htmlFor="service"
            className="mb-2 block font-medium text-gray-700"
          >
            Service Required
          </label>

          <select
            id="service"
            className="w-full rounded-2xl border border-pink-200 px-5 py-4 outline-none transition focus:border-pink-500"
            defaultValue=""
          >
            <option value="" disabled>
              Select a service
            </option>

            <option>Bridal Makeup</option>
            <option>Engagement Makeup</option>
            <option>Reception Makeup</option>
            <option>Party Makeup</option>
            <option>Photoshoot Makeup</option>
            <option>Hair Styling</option>
            <option>Other</option>
          </select>
        </div>

        {/* Date & Time */}

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="date"
              className="mb-2 flex items-center gap-2 font-medium text-gray-700"
            >
              <CalendarDays size={18} />
              Preferred Date
            </label>

            <input
              id="date"
              type="date"
              className="w-full rounded-2xl border border-pink-200 px-5 py-4 outline-none transition focus:border-pink-500"
            />
          </div>

          <div>
            <label
              htmlFor="time"
              className="mb-2 flex items-center gap-2 font-medium text-gray-700"
            >
              <Clock size={18} />
              Preferred Time
            </label>

            <input
              id="time"
              type="time"
              className="w-full rounded-2xl border border-pink-200 px-5 py-4 outline-none transition focus:border-pink-500"
            />
          </div>
        </div>

        {/* Message */}

        <div>
          <label
            htmlFor="message"
            className="mb-2 block font-medium text-gray-700"
          >
            Additional Notes
          </label>

          <textarea
            id="message"
            rows={5}
            placeholder="Tell us about your event or any special requests..."
            className="w-full resize-none rounded-2xl border border-pink-200 px-5 py-4 outline-none transition focus:border-pink-500"
          />
        </div>

        {/* Submit */}

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-pink-500 px-8 py-4 text-lg font-semibold text-white transition hover:bg-pink-600"
        >
          <Sparkles size={20} />
          Send Booking Request
        </button>
      </form>
    </div>
  );
}