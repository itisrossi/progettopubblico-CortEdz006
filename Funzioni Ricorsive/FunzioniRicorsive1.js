function selectionSort(v, inizio, fine)
{
    let posMinimo = 0;
    if(inizio === fine)
    {
        return;
    }
    else
    {
        posMinimo = posizioneMinimo(v, inizio, fine);
        scambia (v, inizio, posMinimo);
        selectionSort (v, inizio +1, fine);
    }
}

function posizioneMinimo(v,inizio, posMinimo)
{
    let minimo = v[inizio];
    let pos = inizio; 
    for (let i = inizio +1; i<= fine; i++)
    {
        if (minimo > v[i])
        {
            minimo = v[i];
            pos = 1
        }
    }
    return pos; 
}

function quickSort(v, inizio, fine)
{
    if (inizio === fine)
    {
        return;
    }
    else
    {
        let pivot = v[inizio];
        partition(v, inizio, fine);
        quickSort(v, inizio, posPivot -1);
        quickSort(v, posPivot +1, fine);
    }
}