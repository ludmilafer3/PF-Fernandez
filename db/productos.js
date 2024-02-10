export const productos = [
    {id: 1, 
    nombre: "Tableta Alpino", 
    precio: 4200, 
    imagen: "https://acdn.mitiendanube.com/stores/985/835/products/img_0242-11-93a21c0b49903391cc16800328838031-480-0.webp",
    },

    {id: 2, 
    nombre: "Colorante Fleibor En Pasta", 
    precio: 1730, 
    imagen: "https://acdn.mitiendanube.com/stores/985/835/products/dc9dee4e1-3ef654f9f8a53737bd15132776659814-1024-1024-cc9e2fd31a11ba903115861878985857-480-0.webp",
    },

    {id: 3, 
    nombre: "Mangas Descartables x10", 
    precio: 700, 
    imagen: "https://acdn.mitiendanube.com/stores/985/835/products/mangas1-02b9540711e8d9019a15845786197502-480-0.webp",
    },

    {id: 4, 
    nombre: "Ballina Formula H Color", 
    precio: 3275, 
    imagen: "https://acdn.mitiendanube.com/stores/985/835/products/95170513_745602782642352_5815459759725215744_n1-d565ed500e83e323ec16155518388817-480-0.webp",
    },

    {id: 5, 
    nombre: "Azucar Talco", 
    precio: 3270, 
    imagen: "https://acdn.mitiendanube.com/stores/985/835/products/azucar-impalpable-talco-x-2-kg-reposteria-d_nq_np_503001-mla20254297289_032015-f1-729df44e0bb8765b3515857731543872-480-0.webp",
    },    

    {id: 6, 
    nombre: "Lápiz Pastelar", 
    precio: 1479, 
    imagen: "https://acdn.mitiendanube.com/stores/985/835/products/glace-listo-lapiz-pastelar1-8ef1894ef6c4002e5115979527973842-640-01-0ce606ed1637bd38e116083218032500-480-0.webp",
    },    
    

    {id: 7, 
    nombre: "Chips de Chocolate semiamargo Alpino",
    precio: 7935, 
    imagen: "https://acdn.mitiendanube.com/stores/985/835/products/57555463_868191156847510_5107046771591217152_o1-35aa8413090ca36ebc15856815065255-480-0.webp",
    },    
];

JSON.parse(localStorage.getItem("productos")) || localStorage.setItem("productos", JSON.stringify(productos));
