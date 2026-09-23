"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [["/","Inicio"],["/servicios","Servicios"],["/proyectos","Proyectos"],["/sobre-nosotros","Sobre nosotros"],["/contacto","Contacto"]];
export function Header(){const[open,setOpen]=useState(false);return <header className="header"><div className="container header-inner"><Link href="/" className="brand"><span>RI</span><div>Reformas Iker<small>Espacios con oficio</small></div></Link><nav className={open?"nav open":"nav"}>{links.map(([href,label])=><Link key={href} href={href} onClick={()=>setOpen(false)}>{label}</Link>)}</nav><Link className="button header-cta" href="/contacto">Pedir presupuesto</Link><button className="menu" onClick={()=>setOpen(!open)} aria-label="Abrir menú">{open?<X/>:<Menu/>}</button></div></header>}
