function pyramide(nb)
{
  let i = 1;
  noQ = nb
  str = ""
  if(nb>=1 && nb <= 25)
  {
    while(noQ>1)
    {
    for (let pas = 0; pas < nb-i; pas++){ str= str+("  "); }
    for (let pas = 0; pas < i; pas++) { str=str+("#"); }
    str = str + "\n";
     i++;
     noQ--;
    }
    for (let pas = 0; pas < nb; pas++){ str=str+("#"); }
  }
  else
  {
    console.log("Un nombre entre 1 & 25 stp");
  }
  console.log(str);
}

let ansi = "";
while(ansi == "")
{
  ansi = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
}
pyramide(ansi);
