const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

function names(c)
{
  let z = 0;
  if (entrepreneurs.length === 0)
    {
    return [];
    }
    else
    {
      while(z < entrepreneurs.length)
        {
         console.log(entrepreneurs[z].first, entrepreneurs[z].last);
         z++;
        }
    }
}

function sept(c)
{
  let z = 0
  if (entrepreneurs.length === 0)
  {
    return [];
  }
  else
  {
    while(z < entrepreneurs.length)
    {
      if(entrepreneurs[z].year >= 1970 && entrepreneurs[z].year <=1979)
      {
        console.log(entrepreneurs[z]);
      }
      z = z + 1;
    }
  }
}


function ages(c)
{
  let z = 0;
  if (entrepreneurs.length === 0)
    {
    return [];
    }
    else
    {
      while(z < entrepreneurs.length)
        {
         console.log(entrepreneurs[z].first, entrepreneurs[z].last, 2019-entrepreneurs[z].year);
         z++;
        }
    }
}

function push(c)
{
  let z = 0;
  let arr = [];
  if (entrepreneurs.length === 0)
    {
    return [];
    }
    else
    {
      while(z < entrepreneurs.length)
        {
        arr.push(entrepreneurs[z].last);
        z++;
        }
    }
    console.log(arr.sort());
}

sept(entrepreneurs);
names(entrepreneurs);
ages(entrepreneurs);
push(entrepreneurs);
