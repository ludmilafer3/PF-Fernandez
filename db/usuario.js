export let dBusuarios = [
    {
      id: 1,
      user: "Ludmila",
      pass: "545454",
      admin: true,
    },
  ];

 
JSON.parse(localStorage.getItem("usuarios")) || localStorage.setItem("usuarios", JSON.stringify(dBusuarios));

