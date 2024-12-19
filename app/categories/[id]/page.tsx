use client
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useCart } from '@/context/CartContext'

const mockCategories = [
  { id: '1', name: 'Birthday Gifts', gifts: [
    { id: 'b1', name: 'Personalized Birthday Cake', price: 39.99, image: '/placeholder.svg?height=200&width=200' },
    { id: 'b2', name: 'Birthday Gift Basket', price: 49.99, image: '/placeholder.svg?height=200&width=200' },
    { id: 'b3', name: 'Custom Birthday Photo Album', price: 29.99, image: '/placeholder.svg?height=200&width=200' },
  ]},
  { id: '2', name: 'Anniversary Gifts', gifts: [
    { id: 'a1', name: 'Couples Spa Day Package', price: 149.99, image: '/placeholder.svg?height=200&width=200' },
    { id: 'a2', name: 'Personalized Anniversary Wine Box', price: 79.99, image: '/placeholder.svg?height=200&width=200' },
    { id: 'a3', name: 'Custom Star Map of Special Date', price: 59.99, image: '/placeholder.svg?height=200&width=200' },
  ]},
  { id: '3', name: 'Wedding Gifts', gifts: [
    { id: 'w1', name: 'Luxury Bedding Set', price: 199.99, image: '/placeholder.svg?height=200&width=200' },
    { id: 'w2', name: 'Personalized Wedding Keepsake Box', price: 89.99, image: '/placeholder.svg?height=200&width=200' },
    { id: 'w3', name: 'Crystal Wine Glasses Set', price: 129.99, image: '/placeholder.svg?height=200&width=200' },
  ]},
  { id: '4', name: 'Graduation Gifts', gifts: [
    { id: 'g1', name: 'Engraved Graduation Watch', price: 149.99, image: '/placeholder.svg?height=200&width=200' },
    { id: 'g2', name: 'Professional Portfolio Briefcase', price: 99.99, image: '/placeholder.svg?height=200&width=200' },
    { id: 'g3', name: 'Inspirational Book Set', price: 59.99, image: '/placeholder.svg?height=200&width=200' },
  ]},
  { id: '5', name: 'Holiday Gifts', gifts: [
    { id: 'h1', name: 'Gourmet Holiday Food Hamper', price: 89.99, image: '/placeholder.svg?height=200&width=200' },
    { id: 'h2', name: 'Festive Scented Candle Collection', price: 49.99, image: '/placeholder.svg?height=200&width=200' },
    { id: 'h3', name: 'Luxury Advent Calendar', price: 129.99, image: '/placeholder.svg?height=200&width=200' },
  ]},
]

export default function CategoryPage({ params }: { params: { id: string } }) {
  const category = mockCategories.find(cat => cat.id === params.id)

  if (!category) {
    notFound()
  }

  const { addToCart } = useCart()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-primary mb-8">{category.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.gifts.map((gift) => (
          <Card key={gift.id}>
            <CardHeader>
              <Image
                src={gift.image}
                alt={gift.name}
                width={200}
                height={200}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-lg">{gift.name}</CardTitle>
              <p className="text-2xl font-bold text-primary mt-2">${gift.price.toFixed(2)}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button asChild variant="outline">
                <Link href={`/gifts/${gift.id}`}>View Details</Link>
              </Button>
              <Button onClick={() => addToCart({ id: gift.id, name: gift.name, price: gift.price, quantity: 1, image: gift.image })}>Add to Cart</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

