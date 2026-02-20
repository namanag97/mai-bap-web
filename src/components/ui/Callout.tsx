import { Info, AlertTriangle, CheckCircle, Lightbulb } from 'lucide-react'
import { cn } from '@/lib/utils'

type CalloutType = 'note' | 'warning' | 'tip' | 'error'

const config: Record<
  CalloutType,
  { icon: React.ElementType; label: string; cls: string; iconCls: string }
> = {
  note: {
    icon: Info,
    label: 'Note',
    cls: 'border-braun-900 bg-braun-50 text-braun-600',
    iconCls: 'text-braun-400',
  },
  warning: {
    icon: AlertTriangle,
    label: 'Warning',
    cls: 'border-data-negative bg-rose-50 text-rose-700',
    iconCls: 'text-data-negative',
  },
  tip: {
    icon: Lightbulb,
    label: 'Tip',
    cls: 'border-data-positive bg-emerald-50 text-emerald-700',
    iconCls: 'text-data-positive',
  },
  error: {
    icon: AlertTriangle,
    label: 'Error',
    cls: 'border-data-negative bg-rose-50 text-rose-800',
    iconCls: 'text-data-negative',
  },
}

interface CalloutProps {
  type?: CalloutType
  title?: string
  children: React.ReactNode
  className?: string
}

export function Callout({ type = 'note', title, children, className }: CalloutProps) {
  const { icon: Icon, label, cls, iconCls } = config[type]

  return (
    <div className={cn('border-l-2 px-4 py-3.5', cls, className)}>
      <div className="flex items-start gap-3">
        <Icon size={13} className={cn('mt-0.5 shrink-0', iconCls)} />
        <div className="flex-1 min-w-0">
          <div className="text-[9px] font-mono uppercase tracking-widest mb-1.5 opacity-70">
            {title ?? label}
          </div>
          <div className="text-sm leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  )
}
