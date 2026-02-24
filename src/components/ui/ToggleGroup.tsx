'use client'

import { cn } from '@/lib/utils'

interface ToggleGroupProps<T extends string> {
  options: readonly T[]
  value: T
  onChange: (value: T) => void
  size?: 'sm' | 'md'
  className?: string
}

const sizeCls = {
  sm: 'px-3 py-1.5 text-[10px] gap-1.5',
  md: 'px-4 py-2 text-[10px] gap-2',
}

export function ToggleGroup<T extends string>({
  options,
  value,
  onChange,
  size = 'sm',
  className,
}: ToggleGroupProps<T>) {
  return (
    <div className={cn('flex flex-wrap gap-1', className)}>
      {options.map(option => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={cn(
            'font-mono font-bold uppercase tracking-widest border transition-colors duration-200',
            sizeCls[size],
            value === option
              ? 'bg-surface-inverse text-ink-inverse border-border-strong'
              : 'bg-transparent text-ink-muted border-border-default hover:border-border-strong hover:text-ink-primary'
          )}
        >
          {option}
        </button>
      ))}
    </div>
  )
}
