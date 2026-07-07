/* eslint-disable react/no-unescaped-entities */
"use client";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
//   Instagram,
//   Facebook,
} from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="rounded-4xl bg-white p-10 shadow-lg">
      <p className="uppercase tracking-[0.35em] text-pink-500">
        Contact Information
      </p>

      <h2 className="mt-4 text-4xl font-bold text-gray-900">
        We'd Love to Hear From You
      </h2>

      <p className="mt-5 leading-8 text-gray-600">
        Whether you're planning your wedding, engagement, reception, or a
        special event, we're here to help make your day unforgettable.
      </p>

      {/* Contact Details */}

      <div className="mt-10 space-y-8">
        <div className="flex items-start gap-5">
          <div className="rounded-full bg-pink-100 p-3">
            <Phone className="text-pink-500" size={22} />
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">Phone</h3>
            <p className="mt-1 text-gray-600">+977 98XXXXXXXX</p>
          </div>
        </div>

        <div className="flex items-start gap-5">
          <div className="rounded-full bg-pink-100 p-3">
            <Mail className="text-pink-500" size={22} />
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">Email</h3>
            <p className="mt-1 text-gray-600">
              hello@yourstudio.com
            </p>
          </div>
        </div>

        <div className="flex items-start gap-5">
          <div className="rounded-full bg-pink-100 p-3">
            <MapPin className="text-pink-500" size={22} />
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">Studio Address</h3>
            <p className="mt-1 text-gray-600">
              Damauli, Nepal
            </p>
          </div>
        </div>

        <div className="flex items-start gap-5">
          <div className="rounded-full bg-pink-100 p-3">
            <Clock className="text-pink-500" size={22} />
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">Opening Hours</h3>
            <p className="mt-1 text-gray-600">
              Sunday – Friday
            </p>

            <p className="text-gray-600">
              9:00 AM – 7:00 PM
            </p>
          </div>
        </div>
      </div>

      {/* Social */}

      <div className="mt-12">
        <h3 className="font-semibold text-gray-900">
          Follow Us
        </h3>

        <div className="mt-5 flex gap-4">
          <a
            href="#"
            className="rounded-full bg-pink-100 p-3 transition hover:bg-pink-500 hover:text-white"
          >
            {/* <Instagram size={22} /> Insta */}
          </a>

          <a
            href="#"
            className="rounded-full bg-pink-100 p-3 transition hover:bg-pink-500 hover:text-white"
          >
            {/* <Facebook size={22} /> Face book */}
          </a>
        </div>
      </div>
    </div>
  );
}