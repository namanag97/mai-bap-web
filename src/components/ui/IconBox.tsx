import { cn } from '@/lib/utils'

interface IconBoxProps {
  icon: React.ElementType
  size?: number
  interactive?: boolean
  className?: string
}

export function IconBox({
  icon: Icon,
  size = 15,
  interactive = true,
  className,
}: IconBoxProps) {
  return (
    <div
      className={cn(
        'w-9 h-9 border border-border-default flex items-center justify-center',
        interactive && 'group-hover:border-braun-900 group-hover:bg-braun-900 transition-colors duration-300',
        className
      )}
    >
      <Icon
        size={size}
        className={cn(
          'text-braun-500',
          interactive && 'group-hover:text-white transition-colors duration-300'
        )}
      />
    </div>
  )
}
