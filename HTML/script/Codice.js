function in_out_put()
{
    // Input

    let cognome = document.getElementById("cognome").value;
    let nome = document.getElementById("nome").value;
    let data = document.getElementById("data").value;
    let comune = document.getElementById("comune").value;
    let codicefiscale = calcolo(cognome,nome,data,comune);

    // Output
    
    document.getElementById("demo").innerHTML= codicefiscale;
    
}

function calcolo(cognome, nome, data, comune)
    {   
        nome = Nome(nome);
        cognome = Cognome(cognome);
        data = Anno(data) + Mese(data) + Giorno(data);
        comune = Città(comune);
        let risultato = cognome + nome + data + comune;
        controllo = check(risultato);
        risultato += controllo; 
        if (nome.length<3||cognome.length<3||data.length<5||comune.length<4||controllo.length<1)
        {
            risultato = "Errore, controlla di aver inserito tutti i dati o di averli inseriti correttamente."
        }
        return risultato;
    }

function vocale (nome)
    {
        let risultato = false;
        switch(nome)
        { 
            case 'A': case 'E': case 'I': case 'O': case 'U':
            risultato = true;
            break;
            default:
            risultato = false;
            break;
        }        
            return risultato;

    }

function Cognome(nome)
    {
        let risultato = [];
        let a = 0;
        nome = nome.toUpperCase(); 
        if (nome.length == 1)
        {
            nome = "Cognome invalido";
            risultato = nome.split("");
            a=3;
        }
        if(nome.length == 2)
        {
            if (vocale(nome.charAt(1))==false)
            {
                risultato[0]=nome.charAt(1);
                risultato[1]=nome.charAt(0);
            }
            risultato.push("X");
            nome += "X";
            a=3;
        }
        for (let i=0; i<nome.length; i++)
        {
            if ( vocale(nome.charAt(i))==false && a<3)
            {
                risultato[a] = nome.charAt(i);
                a++;
            } 
        }
        if (risultato.length<3)
        {
            if(risultato.length == 2)
            {
                i=2;a=0;
                    if (vocale(nome.charAt(a))==true)
                    {
                        risultato[i] = nome.charAt(a);
                    } 
            }
            else
            {   a=1;
                for (i=0; i!=3; i++)
                if (vocale(nome.charAt(i))==true)
                {   
                    risultato[a]=nome.charAt(i);
                    a++;
                }
            }
        }
    risultato= risultato.join("");
    return risultato; 
    }

function Nome(nome)
    {
        let risultato = [];
        let a = 0;
        nome = nome.toUpperCase();
        if (nome.length == 1)
        {
            nome = "Nome invalido";
            risultato = nome.split("");
            a=4;
        }
        if (nome.length == 2)
        {   
            if (vocale(nome.charAt(1))==false)
            {
                risultato[0]=nome.charAt(1);
                risultato[1]=nome.charAt(0);
            }
            risultato.push("X");
            nome += "X";
            a=4;
        }
        for (let i=0; i<nome.length; i++)
        {
            if (vocale(nome.charAt(i))==false && a<4)
            {
                risultato[a] = nome.charAt(i);
                a++;
            }
            if (risultato.length==4)
            {
                risultato.splice(1, 1);
            }
        }
        if (risultato.length<3)
        {
        if(risultato.length == 2)
        {
            i=2;
            for(a=0; a<nome.length && risultato.length<3 ; a++)
            {
                if (vocale(nome.charAt(a))==true)
                {
                    risultato[i] = nome.charAt(a);
                } 
            }
        }
        else
        {   a=1;
            for (i=0; i!=3; i++)
            if (vocale(nome.charAt(i))==true)
            {   
                risultato[a]=nome.charAt(i);
                a++;
            }
        }
    }
    risultato= risultato.join("");
    return risultato;   
    }

function Anno(anno)
    {
        let risultato = anno.slice(2,4);
        return risultato;
    }

function Mese(mese)
    {
        mese = mese.slice(5,7);
        let risultato = "";
        switch(mese)
        {
            default: risultato = "errore"; break; 
            case "01": risultato = "A"; break; case "02": risultato = "B"; break; case "03": risultato = "C"; break; case "04": risultato = "D"; break; case "05": risultato = "E"; break; case "06": risultato = "H"; break; 
            case "07": risultato = "L"; break; case "08": risultato = "M"; break; case "09": risultato = "P"; break; case "10": risultato = "R"; break; case "11": risultato = "S"; break; case "12": risultato = "T"; break;
        }
    return risultato;
    }

function Giorno (gg)
    {
        gg = gg.slice(8,10);
        if (document.getElementById("sesso1").checked == true)
        {
            gg = + gg + 40;
        }
        else if (document.getElementById("sesso").checked == false && document.getElementById("sesso1").checked == false)
        {
            gg ="";
            return gg;
        }
    return gg;
    }
 

function Città(comune)
    {
        comune = comune.toUpperCase();
        let j = 0 ;
        let i = 0;
        let risultato = "";

        while (j!=3)
        {
            if (Righe [i] === comune)
            {
                risultato = Righe [i-1];
                j=3;
            }
            else if (i>19500)
            {
                j=3;
            }
            i++;

        }
        return risultato;
    }
    
function check (codice)
    {
        const tabC = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
        const tabD = [1,0,5,7,9,13,15,17,19,21,2,4,18,20,11,3,6,8,12,14,16,10,22,25,24,23];
        const tabE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let somma = 0;
        let i = 0;
        let posizione = 0;
        
        for (i=0; i<codice.length;i++)
        {
            let carattere = codice[i];
            posizione = tabE.indexOf(carattere);
            
            if (posizione>25)
            {
                posizione -= 26;
            }

            if ((i+1)%2==0)
            {
                somma += tabC[posizione]
            }
            else
            {
                somma += tabD[posizione]
            }

        }
        let resto = somma % 26;
        controllo = tabE[resto];
        return controllo;
    }