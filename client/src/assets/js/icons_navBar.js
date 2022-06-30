import {
  ClipboardCheckIcon,
  ShoppingCartIcon /*, UserIn */,
} from "@heroicons/react/outline";
import Profilo from "../../components/layout/Profilo";

export const icons = [
  {
    title: "Profilo",
    icon: <Profilo className="nav-icon" />,
  },
  {
    title: "Ordini",
    icon: <ClipboardCheckIcon className="nav-icon" />,
  },
  {
    title: "Carrello",
    icon: <ShoppingCartIcon className="nav-icon" />,
  },
];
 
    

export const links = [
  { link: "/", nome: "Home" },
  { link: "/products", nome: "Prodotti" },
  { link: "/catalogo", nome: "Catalogo" },
];
