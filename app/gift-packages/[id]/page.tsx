import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { categories } from '@/data/categories'

export default function GiftPackagePage({ params }: { params: { id: string } }) {
  const giftPackage = categories.flatMap(category => category.packages).find(pkg => pkg.id === params.id)

  if (!giftPackage) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">{giftPackage.name}</CardTitle>
          <CardDescription>Gift Package Details</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <Image
            src="/placeholder.svg?height=300&width=400"
            alt={giftPackage.name}
            width={400}
            height={300}
            className="w-full h-auto rounded-lg"
          />
          <div>
            <h3 className="text-xl font-semibold mb-2">Included Products:</h3>
            <ul className="list-disc list-inside space-y-1">
              {giftPackage.products.map((product, index) => (
                <li key={index} className="text-muted-foreground">{product}</li>
              ))}
            </ul>
          </div>
          <p className="text-2xl font-bold text-primary">${giftPackage.price.toFixed(2)}</p>
        </CardContent>
        <CardFooter>
          <Button className="w-full" size="lg">Add to Cart</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

