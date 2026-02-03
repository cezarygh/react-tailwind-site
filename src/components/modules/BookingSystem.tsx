import { useState } from "react"

// Dummy data til tider og adresser
const availableTimes = ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00"]
const availableLocations = ["Copenhagen Office", "Aarhus Cafe", "Odense Studio"]

interface BookingData {
  date?: string
  time?: string
  location?: string
  company?: string
  firstName?: string
  lastName?: string
  phone?: string
  email?: string
}

const BookingSystem = () => {
  const [step, setStep] = useState(1)
  const [booking, setBooking] = useState<BookingData>({})

  // Opdater booking state
  const updateBooking = (field: keyof BookingData, value: string) => {
    setBooking((prev) => ({ ...prev, [field]: value }))
  }

  // Send email - placeholder, du skal forbinde til backend
  const handleSubmit = () => {
    console.log("Booking submitted:", booking)
    alert("Booking submitted! (Check backend to send email)")
    setStep(1)
    setBooking({})
  }

  return (
    <div className="max-w-md mx-auto mt-12 p-6 rounded-xl border border-slate-300 bg-white shadow-sm">
      <h2 className="text-xl font-semibold text-slate-900 mb-4">Book cafe møde</h2>

      {/* Stepper */}
      <div className="flex justify-between mb-6">
        {[1, 2, 3, 4].map((s) => (
          <div
            key={s}
            className={`flex-1 h-1 mx-1 rounded ${
              s <= step ? "bg-blue-600" : "bg-slate-200"
            }`}
          />
        ))}
      </div>

      {/* Step 1: Vælg dato + tid */}
      {step === 1 && (
        <div className="space-y-4">
          <label className="block font-medium text-slate-700">Vælg dato:</label>
        <input
          type="date"
          value={booking.date || ""}
          onChange={(e) => updateBooking("date", e.target.value)}
          className="w-full border border-slate-300 rounded px-4 py-2 
                    appearance-none bg-white"
        />

          <label className="block font-medium text-slate-700">Vælg tidspunkt:</label>
          <div className="grid grid-cols-3 gap-2">
            {availableTimes.map((time) => (
              <button
                key={time}
                className={`px-3 py-2 rounded border ${
                  booking.time === time
                    ? "bg-blue-600 text-white"
                    : "bg-slate-100 hover:bg-slate-200"
                }`}
                onClick={() => updateBooking("time", time)}
              >
                {time}
              </button>
            ))}
          </div>

          <button
            disabled={!booking.date || !booking.time}
            onClick={() => setStep(2)}
            className="mt-4 w-full bg-blue-600 text-white py-2 rounded disabled:opacity-50"
          >
            Næste
          </button>
        </div>
      )}

      {/* Step 2: Vælg adresse */}
      {step === 2 && (
        <div className="space-y-4">
          <label className="block font-medium text-slate-700">Vælg adresse:</label>
          <div className="grid grid-cols-1 gap-2">
            {availableLocations.map((loc) => (
              <button
                key={loc}
                className={`px-4 py-2 rounded border w-full text-left ${
                  booking.location === loc
                    ? "bg-blue-600 text-white"
                    : "bg-slate-100 hover:bg-slate-200"
                }`}
                onClick={() => updateBooking("location", loc)}
              >
                {loc}
              </button>
            ))}
          </div>

          <div className="flex justify-between mt-4">
            <button
              onClick={() => setStep(1)}
              className="px-4 py-2 rounded border hover:bg-slate-100"
            >
              Tilbage
            </button>
            <button
              disabled={!booking.location}
              onClick={() => setStep(3)}
              className="px-4 py-2 rounded bg-blue-600 text-white disabled:opacity-50"
            >
              Næste
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Kontaktoplysninger */}
      {step === 3 && (
        <div className="space-y-4">
          <label className="block font-medium text-slate-700">Firmanavn:</label>
          <input
            type="text"
            value={booking.company || ""}
            onChange={(e) => updateBooking("company", e.target.value)}
            className="w-full border border-slate-300 rounded px-4 py-2"
          />

          <label className="block font-medium text-slate-700">Navn:</label>
          <input
            type="text"
            value={booking.firstName || ""}
            onChange={(e) => updateBooking("firstName", e.target.value)}
            className="w-full border border-slate-300 rounded px-4 py-2"
          />

          <label className="block font-medium text-slate-700">Efternavn:</label>
          <input
            type="text"
            value={booking.lastName || ""}
            onChange={(e) => updateBooking("lastName", e.target.value)}
            className="w-full border border-slate-300 rounded px-4 py-2"
          />

          <label className="block font-medium text-slate-700">Telefon:</label>
          <input
            type="tel"
            value={booking.phone || ""}
            onChange={(e) => updateBooking("phone", e.target.value)}
            className="w-full border border-slate-300 rounded px-4 py-2"
          />

          <label className="block font-medium text-slate-700">Email:</label>
          <input
            type="email"
            value={booking.email || ""}
            onChange={(e) => updateBooking("email", e.target.value)}
            className="w-full border border-slate-300 rounded px-4 py-2"
          />

          <div className="flex justify-between mt-4">
            <button
              onClick={() => setStep(2)}
              className="px-4 py-2 rounded border hover:bg-slate-100"
            >
              Tilbage
            </button>
            <button
              disabled={
                !booking.company ||
                !booking.firstName ||
                !booking.lastName ||
                !booking.phone ||
                !booking.email
              }
              onClick={() => setStep(4)}
              className="px-4 py-2 rounded bg-blue-600 text-white disabled:opacity-50"
            >
              Næste
            </button>
          </div>
        </div>
      )}

      {/* Step 4: Bekræftelse */}
      {step === 4 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-slate-900 mb-2">Bekræft dine oplysninger</h3>
          <ul className="text-slate-700 space-y-1">
            <li>
              <strong>Dato:</strong> {booking.date}
            </li>
            <li>
              <strong>Tid:</strong> {booking.time}
            </li>
            <li>
              <strong>Adresse:</strong> {booking.location}
            </li>
            <li>
              <strong>Firmanavn:</strong> {booking.company}
            </li>
            <li>
              <strong>Navn:</strong> {booking.firstName} {booking.lastName}
            </li>
            <li>
              <strong>Telefon:</strong> {booking.phone}
            </li>
            <li>
              <strong>Email:</strong> {booking.email}
            </li>
          </ul>

          <div className="flex justify-between mt-4">
            <button
              onClick={() => setStep(3)}
              className="px-4 py-2 rounded border hover:bg-slate-100"
            >
              Tilbage
            </button>
            <button
              onClick={handleSubmit}
              className="px-4 py-2 rounded bg-blue-600 text-white"
            >
              Bekræft booking
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default BookingSystem