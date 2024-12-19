'use client'

import { useState } from 'react'
import { Calendar } from '@/components/ui/calendar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const mockEvents = [
  { id: '1', name: "Mom's Birthday", date: new Date(2023, 4, 15) },
  { id: '2', name: "Wedding Anniversary", date: new Date(2023, 5, 22) },
  { id: '3', name: "Father's Day", date: new Date(2023, 5, 18) },
]

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  const selectedDateEvents = mockEvents.filter(
    (event) => event.date.toDateString() === date?.toDateString()
  )

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div>
        <h1 className="text-4xl font-bold text-primary mb-8">Gift Calendar</h1>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Events on {date?.toDateString()}</h2>
        {selectedDateEvents.length > 0 ? (
          <div className="space-y-4">
            {selectedDateEvents.map((event) => (
              <Card key={event.id}>
                <CardHeader>
                  <CardTitle>{event.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Date: {event.date.toLocaleDateString()}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <p>No events on this date.</p>
        )}
      </div>
    </div>
  )
}

