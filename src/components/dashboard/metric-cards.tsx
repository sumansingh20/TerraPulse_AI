"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { useAdvancedThemeSafe } from "@/src/components/theme/advanced-theme-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Advanced3DCardProps {
  title: string
  description?: string
  value: string | number
  unit?: string
  trend?: "up" | "down" | "stable"
  trendValue?: string
  icon?: React.ReactNode
  className?: string
  children?: React.ReactNode
  variant?: "default" | "glass" | "gradient" | "elevated"
  size?: "sm" | "md" | "lg"
}

export function Advanced3DCard({
  title,
  description,
  value,
  unit,
  trend,
  trendValue,
  icon,
  className,
  children,
  variant = "default",
  size = "md",
  ...props
}: Advanced3DCardProps) {
  const { enableGlassMorphism, theme, themeAnimation } = useAdvancedThemeSafe()
  const [isHovered, setIsHovered] = React.useState(false)

  const sizeStyles = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8"
  }

  const variantStyles = {
    default: "bg-background border",
    glass: enableGlassMorphism ? "glass" : "bg-background/80 border",
    gradient: `bg-gradient-to-br from-primary/10 to-secondary/10 border`,
    elevated: "card-elevated bg-background border"
  }

  const trendColors = {
    up: "text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900/20",
    down: "text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900/20",
    stable: "text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/20"
  }

  const trendIcons = {
    up: "↗",
    down: "↘",
    stable: "→"
  }

  return (
    <div
      className={cn(
        "group relative transition-all duration-300 transform-gpu",
        isHovered && "scale-105",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3D Shadow Layer */}
      <div
        className={cn(
          "absolute inset-0 rounded-lg transition-all duration-300",
          variant === "glass" && enableGlassMorphism && "glass opacity-50",
          variant === "elevated" && "shadow-xl",
          isHovered && "translate-x-1 translate-y-1 scale-105"
        )}
        style={{
          background: variant === "gradient" 
            ? `linear-gradient(135deg, var(--color-theme-primary), var(--color-theme-secondary))`
            : undefined,
          opacity: 0.1,
          zIndex: -1
        }}
      />

      <Card
        className={cn(
          "relative overflow-hidden transition-all duration-300",
          variantStyles[variant],
          sizeStyles[size],
          themeAnimation,
          isHovered && "shadow-2xl border-primary/20"
        )}
        {...props}
      >
        {/* Background Pattern Overlay */}
        <div 
          className={cn(
            "absolute inset-0 opacity-5 pattern-organic",
            theme === "earth" && "pattern-soil"
          )}
        />

        <CardHeader className={cn("relative z-10", size === "sm" && "pb-2")}>
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <CardTitle className={cn(
                "flex items-center gap-2 text-foreground",
                size === "sm" && "text-sm",
                size === "lg" && "text-xl"
              )}>
                {icon && (
                  <span className={cn(
                    "transition-all duration-300",
                    isHovered && "animate-glow scale-110"
                  )}>
                    {icon}
                  </span>
                )}
                {title}
              </CardTitle>
              {description && (
                <CardDescription className={cn(
                  size === "sm" && "text-xs",
                  size === "lg" && "text-base"
                )}>
                  {description}
                </CardDescription>
              )}
            </div>
            {trend && trendValue && (
              <Badge
                variant="secondary"
                className={cn(
                  "flex items-center gap-1 text-xs",
                  trendColors[trend]
                )}
              >
                <span>{trendIcons[trend]}</span>
                {trendValue}
              </Badge>
            )}
          </div>
        </CardHeader>

        <CardContent className={cn("relative z-10", size === "sm" && "pt-0")}>
          <div className="space-y-2">
            <div className={cn(
              "font-bold text-foreground transition-all duration-300",
              size === "sm" && "text-lg",
              size === "md" && "text-2xl",
              size === "lg" && "text-3xl",
              isHovered && "scale-110"
            )}>
              {value}
              {unit && (
                <span className={cn(
                  "ml-1 font-normal text-muted-foreground",
                  size === "sm" && "text-sm",
                  size === "md" && "text-lg",
                  size === "lg" && "text-xl"
                )}>
                  {unit}
                </span>
              )}
            </div>
            {children}
          </div>
        </CardContent>

        {/* Hover Glow Effect */}
        <div
          className={cn(
            "absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none",
            isHovered && "opacity-20"
          )}
          style={{
            background: `radial-gradient(circle at center, var(--color-theme-primary), transparent 70%)`
          }}
        />
      </Card>
    </div>
  )
}

// Specialized card variants
export function MetricCard(props: Omit<Advanced3DCardProps, "variant">) {
  return <Advanced3DCard variant="elevated" {...props} />
}

export function GlassCard(props: Omit<Advanced3DCardProps, "variant">) {
  return <Advanced3DCard variant="glass" {...props} />
}

export function GradientCard(props: Omit<Advanced3DCardProps, "variant">) {
  return <Advanced3DCard variant="gradient" {...props} />
}

// Grid layout for cards
interface CardGridProps {
  children: React.ReactNode
  cols?: 1 | 2 | 3 | 4
  gap?: "sm" | "md" | "lg"
  className?: string
}

export function CardGrid({ 
  children, 
  cols = 3, 
  gap = "md", 
  className 
}: CardGridProps) {
  const gapStyles = {
    sm: "gap-4",
    md: "gap-6", 
    lg: "gap-8"
  }

  const colStyles = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
  }

  return (
    <div className={cn(
      "grid w-full",
      colStyles[cols],
      gapStyles[gap],
      className
    )}>
      {children}
    </div>
  )
}
