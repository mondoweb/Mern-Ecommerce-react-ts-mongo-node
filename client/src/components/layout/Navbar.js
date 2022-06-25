import Searchbar from "./Searchbar"
// import Logo from "../../assets/logo/logo_transparent.png"
import { logo } from "../../assets/js/logo"
import { ClipboardCheckIcon, ShoppingCartIcon, UserIcon } from "@heroicons/react/outline"
import { Link } from "react-router-dom"
import './styles/Navbar.css'

// import { icons } from "../../assets/logo/js/icons_navBar"

//  const Logo2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAArlBMVEX39/c1Njr////5+fn39/j8/PwyMzc2NzspKi/39/UwMTYrLDA1Njn49vkkJSr19fWWl5i1truLi4zAwMCwsLLv7+8AAADm5uZDREeVlZbCwsM6Oz9YWVuioqPl5eVJSkzZ2dloaGtycnMYGiCfn6CBgYMfISZGR0rS0tIABBDKysxVVVd6e30ZGx4QEhpfYGJtbnINDhhTVVQdHCTBwMVjZGkNDxMmJi8bHR4TFR6IjLnrAAARh0lEQVR4nO1bCXubOBPGEsIcDtgcMQZz2mAbSJxu2+zm//+xb0YCHzkcp8l299tH73bbxIhBr2Y0l7CiSEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISPybYaj/9Az+FlByAKP/9GT+BlASuOGAmcoMw1D+QzypE/i3d5Y2wP7WBo7xT8/qC8GCRLNH49ERY3MUsX96Wl8GSrddrY1OAWT1ktH/iJWqir/UgZJl23ZtmwNJs6TKf8SjkiQ2R5ptdxGgKW1B0gzztzT4+uef0zf9CiFvgHmaNrHjKJ8zRJp74cqa1FZ6YRu+M5F/mXGTzNQe14FDxa6jjAZptWoCR/nXTfXXwPaWtd8SiBfid0cxMPQD3b+V3q8J/4W7VOqFdkXYMYf5kiD46kx6z/yb7eKGJj9d4myj+Zc8+BeF0Bc/fBUM9UYJchKs21XUC7+cqamUgb7hz+uhkjK8eGoRZ5fEPqeEnQ1gsCWGIQSvvfl0If416W/CUFSDsrSrzXpGjf6j13FzYxiU0O10sVjA/0nOSD+2j5kgiAQzfnHhzwl7JojMFtMtTI2xBgYsIiDCR+DvbkApCE/XC37p5gVHVaGqwUia8AHTRmUf8hLkwR6NbF+9rDxVVUjulktLB1j6aF9OA3pkSBWDbLuHDb+ox0W3JafiqOOGur1mIKNsbRjRdj5fIRpUrf6tAcU2XTGyUXhbuuQ5R5gcmZU/x7plWbrVlovg+nSLEtfCFG3tXL7FYGoSaiZPBsYTSAiscXiyd2GF3dCy+tRPM61Nd2pM8BBtZE8ZmWa6Nsas19LWoGbqtKY2tiMS7ENLZFNjzTKLnChnmxLqnjLUTS5em2imFqZXMoQCiexNfGJ5+RaV5mN8gKbh3xOepOvLw6pQ1rQ6XjbNgaTeEqy/OFiimbiKpNIPA3QXFEXnK/xxul2ZUNCYQ8Zohf7ZbChLLHMQP+Hi7y8lJGcUFVKgXG2UXjRtlj/CDCwrbvfL2LJGE3iOvXCGGVBvZGrwcbbfZ6bF5zCx1+TAcKHjvBcL2wr3GVeWGftMVZlXc0Y1yEbRI6FIzfqjOSFAlfVKA/GTFsRrFgoHsu8YXQ/cXZwhbMRLls3yHRpPVSWpmvpVFcJeMh8OVkob3bSyrlpAJtS4VYx2PzmxJDIFhpOJVWfd7KapivGfdpYQeDib2UJpoxJE36SLaqkLDVeBMfgwqiQrzc6qapo7XLww1opdUxjc3NCeIVAkb1PMQ9PskhycucoDhj913eRI0NnbretBGIBVAo/vP1h82uUgkU35vPWHiDIYkPrraUOUI8O69ANsnICE7U9+72jl9QTAySQrfb/wsLVCMdZMRemzZ8qN+q4eYQgy5KWvnURM9GdeLA2r6jBK+/ka6FdYEBw9Cc1vHxqHiVADN7Mmw2U2i+CMoV6mfUhkPOrd9AzNOpkfVpfle7E83bCAsFf1bmsMVqsqDkobm8s5vbl5jyDoEB4yPviGDkyFiABsnHoyp11w/d0g+s9Or8+bnE/AEFCdBFWjbWb9tPg+NEuYM4pQefBRB4b20lNAHQP65RnZef8I5tsQX8WkOFjEpWcNu3nfTFVccWsk/BNscBO2+74CVRqnAVsNUoUul0nwlkAwnuEGPqSfpbU4YWjvHdTgmQjK/Pq7O6dn2QEruEnX0bANg5ylVXv09SzSOcOIXVmg0+BeGx1Igs8yx7HvnKdGLLLMen3J6J97d+48XTIwtPWO0Je+jOb3C2KcPQtYxyKaHGzcSHSIDicMuQ7b7XUhEROpPLROujTgiTX7cZ2SftroANYQ7PQEzPQqmRgAdZBjuYMOE3Cd83kgpJ09HnxLcXvsJqBRETSA8Ujv8xbqPEBIsZFhn9hy92Tu+Qq8x7K/ZV7E+rNOlHmXO0O1Q/MlBuzkihirqgeGoyNDBTb3dvP9FQHUSZ7MOjqdp0E2fC53vashfj2ZmCXwMYRCtrHwY+T96fSTwmai727sQxNKZA1jfC7fIcTVUbH+JYY4kPtInvuTxOIMj5bl3Zn69BUByR3ox6PHHaUapOQ5Q8/QUO3JaKL7Dt/qEKq8gjsO07u62YnCKVEi399btq2bE56wgIisb5jSoINHasvmkkUYPPdHrCOocPwRt9LBjpgH666vX8yJBt9GzxhCgrjlic6d2IcswYXXE37kAKpIJiZmD/biQvh+FRQUkDdNlGR3tmA4tvq9TJslmIVVXUiTMPf33QcsDXS7rWYEvMXkqEPatNroVYZ5LRieS7vHfdLrkLQ8q2wrF1B1sc6jd/3wgerijCUN0tzfibQC0hw+JeaPtdNN9QoMtsXcvw+s9oNzzpBNLXQdzxgecprnDNmT2IdcMln2qaqFpRO6xMlksvPnjvJRHFIwStOuzxa7lD8wwXU7uP7XCU5E5aFpwpE/Y7jQxy91+CZDsjqx0p7hEaZpx9Evd+OFR2a45nzhGgxVB8f4ZpOKNjte+2yyDVQHmtk2z3XIs7ZnDG/eZPh4xhArLg4TYMXZz+ZFhfxBGI6aY9E4gtKUuwmeg4EO32JI59bYjItykTv5oixDe5l/kuH46EuJW/5cttlmk7X7oizLGSRw6uc7gkTk73XP8LIOKXFtq0iCvvAAl5OwFwwnH2F4d8IQYmmQN5HneU3uEPJRD3qCw/S5h8/R+Z0xNLvgVeHYJrgN1zkZoicYufIZhkavwzroC5HE930vwPYeHhUZx1n+KkMO3tsAhsaBoZa9HmIx2bcblXfJD3jJ8HorNdDTTMbavo+Ha1u37fH2bS/wawCGsI51g+1TmC6vFN7M2mhOtkWZf4rhKUfuS+3EOcTDyaiefYbNazUI6nAMDLnJNkuRVrwZLug6tv7afokO8SfOsN6K0SJa6NXre+Ra8LpmyLP5X8JKbd4PwqyNu5rgeX038PnxNJrU2xMzvYrhMR6eZd6w8zCn0Xub6Lssq5Qepve8QHkXBpvnc3peinCGZpH3DptvRB3z1FcVfjsRa35MtK9hiBcEw9MuGCSAwWo8scp577ciZDiBDXO+DB8gSKn3s36YodUfMyEVbcPuu5ZsLVIcN1BOU2Q6HDGQ70IRH9ThgaFVnpfbvj0erSLR9zFUIvIkzTmxNBx17fEFpUHyaI70euowBxk66JaZH2pQTfRbi6Z7XrHVa+dkjmzrC9+jcobHvhP4pisZqsgQypZ7NtzJXenSnID5GIKhQkLRt0nISWeNpL7HTz7ebWQYlGCXCK0MKgIOL2EGqWDn2YfSgHR9Lj7l+RLlbXZ/WVvoe1T0DOh4PR6NqUocP+Du9wXDc1cF9khzXBy8QkXGiHaBNX6dHKJD3zUew0e8fYSDyKxbLck1DA2FpeCN8SBipG+6rqq6Lsu2LIXtbe4PrRGa9l1Ys4vEMjiLh9DcNWJeJMaDAS1biGtumTW81/K+ldL5d/FmizsX984rqBVDTS/nR8ei9icaWoc6gKRJ8bvQ0tbkqvJCpc7SGkp7ntla5p4SqDrNOKcHEWS2Eg+xwiVHO7K0b7PeO9EtT7O0Cb+01/R2YDj0aThD+3mND7cGO97L1LS2l1snZKGZoXdwW7CIW/Rk+DpM//Al8LM215UX6g22ts7LE0ixfUszJ6dHNWin/EQGD0dMfjxj6v5hEk5m9YUNQtM7whnqi6HXhgy1cPYyZaAzWzSINHGvCTVpoZvr4dBUrG8zDOJPx+db4ZUJKjCkJM9OWm2mVZAGKrD2WcOcrTeWNpkchkESd7QSdX7s1k1MvWMUimYLlupYH2poVi8nQIPFaaPPHCekWmXnI8FzNaF50ikzraygHymg2LzMbDy9gqWx9xVRo6JLXgQc1nSZbvFKzdTtwt2eBkeadxvbEpceoMyiTWuWi+PZk6/FZULOvD3P2alBSFTGeCvMW9c7H0qTcntCsI9XTbWBEh8fbv2pt11zLb/BFNRouijCOCun05w4RhBQoj7LxR2F0Wi67rI4zqrpVBxiHB0ZdWZTt43Dkl+CZNyDauqgYxr4fvDapOCCN6f+erGM47Zarw1GVXawv4N4VWXMm07LTIxq2LXd7iPgljzyopRCLDT6LO61USRtoE6bv/KiAp7iN16Ui0AMFJ81spnymudj251ZNow4WxAbsLPddwLI7wwQkUb4cIKJxq8kqcPLEv0BycsB/I1aSt9+FwKvUW58YrhylgG9hMhLNSubBvzWy81KSsUUfy0B/1Tafi5HNL0NccB9oaSjx8xbs4ezmcP0X53Qp2f5TmJ7mP21uDyYnlRP9cVe8/lNn6N5+W7K1/jaJ9ALpwq9qt7sJn41hhLh/WSdpvnwkzijeOMGVaXz7fZNh0WDlPdhb1TjFxl+zJPS1OPnE8zzRDVoDK86ieRePX7G3IzdiGts7nnerCHDyejhfBSNGXvKj7cBDbYpPRx9H2fHvIKfELxkeC3RDzL07A1aFIl1nwfxc4YGD4z8iwkGKW85Q4hZUfV9t9tlfmCIVyYOY/EFLcVI7qvEodsNSMRTb/T2/D8O5o+WDr3QTfxi0GjUEn4uOYb5YL+TYNeTH17y8x7uFvEnSE53vUE3m/uy+fFD5wURhDGKhQ2OYWjsNKjqhhgk3/n8di6G8miD4iET/q0MmQcMlZ6hQbyHoozSCiqndOkHi31R4W4jaVEUM2TIDYS0VhUwytJvY5847pJ4yxmjzkNRJOq6VebL0Fzu1WJvtkUXKEpawd1z/pCkKLrci5d4HPxbGOKyRuOWUJVyhmRt1o/3Vvlzl7L0tnIfH5/+7EAv69C+v1/9AIa8gRpZLfcyLL+tmFOsEnO3Jk1r3z/eTYudOr81J/Utfaw1+zEOWGrCzffhlOA7dKv7+7gIf58OYY8wsFInCAIFGBJ/pW0JycPwLmXz1Z9gZMSypizY1yWeU+srzpB0ekXEoS9Yn1NYZuGl9GG1hwq2s1YGDTp9SxxupUwJbkMPSmYrS8l0NQkIaeLxb7RSKPKj2NwhzBgYPvnoUWb6X8Dw20IF3c5WLnFtNGTmbe4Fw31/ps97tk5Rz/DUN6zBFFhaPBrgSnXI/un2W8LwhZIp7uiF7VL3KYfshSX272YYLlzXXcSxbyTf8NUfFm3uUjrfTfH9yGC3IO6Kd/RxH6LbIYU1FQEdM3Wn2BFFJYv6JzpLUu0MOu8Z7mAhSDuuILL8SHbdvHvC8MF887cy5PsQAVaqTHdbeqOypkUr3S2YoQqGTycMYVEWUCbzvNPxG2D4iApe1CXGBc4QdUgPDM0yWa/Xid+kZc9Q4wzVoZt4/i7GFxM0RLRQhC8lybeIwiw9izOc4rtxc2RoF1A2AnFhpXSuhw3BPl333SVch9ghNTHEBOW3gaG6fQSGbGpP8d3wZOoZ7hO+FUp6K1UGht/f/HbOp4EZCUMdDgz9ukVPsx//dcYwX9bgdNKi9zQGcb+3M0KC7mmZMqFDJSjqCj5axE9HHT4m4InS230OLsiMI7JY7cHTRH+YZwz1dv73fb+K61DrGU58Qqv7MMsmy5+PEC04Q9iOLiPVX+M/2knyIKIFaGp/F2dZZlsNU4UOQYm6lWVxueQ6tPk+fIyzfUCjx3DZblYFo0FxB3fFWbjE938MZFhr9TI3LpRZnwPl+zDcc4btBiO+G4fxOi0s8DT45jkwtGE7klkcjxPS2SIPdSjJ4zCM/8DWi1PaeL9Bb+ATV3VtyLurGAsi1oQY28kWxk5ygq96lnG8mXmbwhEMVdXc+ET96rPBZ8AWq4K9eTylVsSXgPEwmYr3AcQ/mG0RhRxLIoN7J4W33ftPRXLG+K3ivJSKU2lxQemTP9yUpK/0KP0dXzmmz389K7T5vhuW2Di5YtChWjy8PAnRk54PVETZbJx02T5WRktISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEj8P+B/p0VNDxLDs+0AAAAASUVORK5CYII=";

const icons = [
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
];


// const menu = [
//     {
//         title : "/" ,
//         name: "Home"
//     },

//     {
//       title:  "/Products",
//       name: "Prodotti"
//     } ,
// ]


const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="nav-Link" >

                <nav className="navbar-link">

                    {/* <Link 
                      to={menu.title}  key={menu.title} > {menu.name}
                </Link> */}
                    <Link to="/">  Home  </Link>
                    <Link to="/products">  Prodotti   </Link>
                </nav>
            </div>
            <div className="nav-item">
                <Searchbar />
            </div>
            <div className="nav-btns-container">
                {
                    icons.map(i => (
                        <button title={i.title} key={i.title} className="nav-btn">
                            {i.icon}
                        </button>
                    ))
                }
            </div>
        </div>
    )
}

export default Navbar
