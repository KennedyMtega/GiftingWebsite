'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ShoppingCart, Calendar, Gift, User, Home, Bell, Settings } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const Navigation = () => {
  const pathname = usePathname()
  const { cartItems } = useCart()

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Categories', href: '/categories', icon: Gift },
    { name: 'Gifts', href: '/gifts', icon: Gift },
    { name: 'Calendar', href: '/calendar', icon: Calendar },
    { name: 'Cart', href: '/cart', icon: ShoppingCart, count: cartItems.length },
    { name: 'Notifications', href: '/notifications', icon: Bell },
    { name: 'Settings', href: '/settings', icon: Settings },
    { name: 'Profile', href: '/profile', icon: User },
  ]

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-primary">
            GiftWise
          </Link>
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant={pathname === item.href ? 'default' : 'ghost'}
                asChild
              >
                <Link href={item.href}>
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.name}
                </Link>
                {item.count > 0 && (
                  <span className="ml-2 rounded-full bg-primary px-2 py-1 text-xs font-bold text-primary-foreground">
                    {item.count}
                  </span>
                )}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

