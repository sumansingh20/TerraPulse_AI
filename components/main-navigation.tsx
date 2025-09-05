"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import {
  Leaf,
  Menu,
  Home,
  User,
  Building2,
  BarChart3,
  Satellite,
  CreditCard,
  Phone,
  Settings,
  Info,
  DollarSign,
  Computer,
  Palette,
  ChevronDown,
  FileText,
  GraduationCap,
  Shield,
  BookOpen,
} from "lucide-react"

export function MainNavigation() {
  const pathname = usePathname()

  const navigationLinks = [
    {
      title: "Platform",
      links: [
        { href: "/", label: "Home", icon: Home },
        { href: "/about", label: "About", icon: Info },
        { href: "/technology", label: "Technology", icon: Computer },
        { href: "/pricing", label: "Pricing", icon: DollarSign },
      ]
    },
    {
      title: "NABARD Services",
      links: [
        { href: "/schemes", label: "Credit Schemes", icon: CreditCard },
        { href: "/training", label: "Training Programs", icon: GraduationCap },
        { href: "/government-services", label: "Government Services", icon: Shield },
        { href: "/reports", label: "Reports & Analytics", icon: FileText },
      ]
    },
    {
      title: "Portals",
      links: [
        { href: "/farmer-portal", label: "Farmer Portal", icon: User },
        { href: "/nabard-dashboard", label: "NABARD Dashboard", icon: Building2 },
        { href: "/demo", label: "Live Demo", icon: Satellite },
      ]
    },
    {
      title: "Support",
      links: [
        { href: "/contact", label: "Contact", icon: Phone },
        { href: "/get-started", label: "Get Started", icon: Settings },
        { href: "/theme-demo", label: "Theme Demo", icon: Palette },
      ]
    }
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="glass hover:bg-white/20">
          <Menu className="h-4 w-4 mr-2" />
          Navigation
          <ChevronDown className="h-4 w-4 ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64 glass">
        {navigationLinks.map((section, index) => (
          <div key={section.title}>
            <DropdownMenuLabel className="flex items-center gap-2">
              {section.title}
            </DropdownMenuLabel>
            {section.links.map((link) => {
              const Icon = link.icon
              const isActive = pathname === link.href
              return (
                <DropdownMenuItem key={link.href} asChild>
                  <Link 
                    href={link.href}
                    className={`flex items-center gap-2 ${isActive ? 'bg-primary/10 text-primary' : ''}`}
                  >
                    <Icon className="h-4 w-4" />
                    {link.label}
                  </Link>
                </DropdownMenuItem>
              )
            })}
            {index < navigationLinks.length - 1 && <DropdownMenuSeparator />}
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
