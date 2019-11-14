function fact(nb)
{
  let u = nb;
  while(nb > 1)
  {
    u = u * (nb-1);
    nb--;
  }
  return u;
}

let ans = "";
while(ans == "")
{
  ans = prompt("De quel nombre veux-tu calculer la factorielle ?");
}

if(ans == 0)
{
  u = 1;
  console.log(`sa factorielle est ${1}`);
}
else
{
  console.log(`sa factorielle est ${(fact(ans))}`);
}
