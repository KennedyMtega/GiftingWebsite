import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { categories } from '@/data/categories'

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-primary mb-8">Gift Categories</h1>
      <div className="space-y-12">
        {categories.map((category) => (
          <div key={category.id}>
            <h2 className="text-3xl font-semibold mb-4">{category.name}</h2>
            <p className="text-muted-foreground mb-6">{category.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.packages.map((pkg) => (
                <Card key={pkg.id}>
                  <CardHeader>
                    <CardTitle>{pkg.name}</CardTitle>
                    <Badge variant="secondary" className="mt-2">
                      ${pkg.price.toFixed(2)}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-1">
                      {pkg.products.map((product, index) => (
                        <li key={index} className="text-sm text-muted-foreground">
                          {product}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-4" asChild>
                      <Link href={`/gift-packages/${pkg.id}`}>
                        View Package
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

