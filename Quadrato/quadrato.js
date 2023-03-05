function Quadrato(n)
{
    if(n === 0)
    {
        return;
    }
    let matrix =Array(n)
    .fill()
    .map(() => Array(n).fill(0)) 
    let num =n*n;
    let righe = 0;
    let colonne = 0; 
    let ver=0;
    let orizz= 0;
    let numero = n;
    while (num != 0)
    {
        ver = righe;
        for (let i = 0; i<=n-1; i++) // righe
        {
            matrix[colonne][righe]=n;
            righe ++; 
        }
        righe =ver;
        orizz = colonne;
        for (let i = 0; i<=n-1; i++) // colonne
        {
            matrix[colonne][righe]=n;
            colonne ++; 
        }
        colonne = orizz +1;
        righe = ver +1;
        num --;
        n--;
    }
    righe = 0;
    colonne = 0;
    while (colonne<numero)
    {
        righe = 0;
        for (let i =0; i< (numero*2-1); i++)
        {
            document.write(matrix[colonne][righe]+" ");
            if (i>=numero-1)
            {
                righe--;
            }
            else
            {
                righe++;
            }
        }
        document.write("<br>")
        colonne ++;
    }
    colonne -= 2;
    while (colonne>=0)
    {
        righe = 0;
        for (let i =0; i< (numero*2-1); i++)
        {
            document.write(matrix[colonne][righe]+" ");
            if (i>=numero-1)
            {
                righe--;
            }
            else
            {
                righe++;
            }
        }
        document.write("<br>")
        colonne --;
    }
}

function bho()
{
    let n = parseInt(document.getElementById("demo").value);
    return Quadrato(n);
}