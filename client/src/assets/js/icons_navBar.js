import { ClipboardCheckIcon, ShoppingCartIcon, UserIcon } from "@heroicons/react/outline"

export const icons = [
    {
        title: 'Profilo',
        icon: <UserIcon className="nav-icon" />
    },
    {
        title: 'Ordini',
        icon: <ClipboardCheckIcon className="nav-icon" />
    },
    {
        title: 'Carrello',
        icon: <ShoppingCartIcon className="nav-icon" />
    },
]