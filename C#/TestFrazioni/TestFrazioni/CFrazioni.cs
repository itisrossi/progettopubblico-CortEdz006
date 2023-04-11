using System;
using System.Collections.Generic;
using System.Text;
using System.Text.Json;

namespace TestFrazioni
{
    class CFrazioni
    {
        // 1. Dichiarare le variabili di istanza
        private int mNumeratore;
        private int mDenominatore;

        // 2. Dichiaro le property
        public int Numeratore
        {
            get
            {
                return mNumeratore;
            }
            set
            {
                mNumeratore = value;
            }
        }
        public int Denominatore
        {
            get
            {
                return mDenominatore;
            }
            set
            {
                if (value != 0)
                {
                    mDenominatore = value;
                }
                else
                {
                    mDenominatore = 1;
                }
            }
        }

        // 3. Definire i costruttori.
        public CFrazioni() //costruttore di default
        {
            Numeratore = 0;
            Denominatore = 0;
        }

        //Overloading costruttore
        public CFrazioni(int Numeratore, int Denominatore)
        {
            this.Numeratore = Numeratore;
            this.Denominatore = Denominatore;
        }

        // Overloading dei metodi
        public override string ToString()
        {
            string risultato = "";
            risultato = this.Numeratore.ToString() + "/" + this.Denominatore.ToString();
            return risultato;
        }

        public string ToString(bool json)
        {
            string risultato = "";
            if (json)
                risultato = JsonSerializer.Serialize(this);
            else
                risultato = ToString();
            return risultato;
        }

        public static CFrazioni somma(CFrazioni f1, CFrazioni f2)
        {
            CFrazioni risultato = new CFrazioni();
            risultato.Denominatore = f1.Denominatore * f2.Denominatore;
            risultato.Numeratore = (risultato.Denominatore / f1.Denominatore * f1.Numeratore + risultato.Denominatore / f2.Denominatore * f2.Numeratore);
            return risultato;
        }

        public static CFrazioni sottrazione(CFrazioni f1, CFrazioni f2)
        {
            CFrazioni risultato = new CFrazioni();
            risultato.Denominatore = f1.Denominatore * f2.Denominatore;
            risultato.Numeratore = (risultato.Denominatore / f1.Denominatore * f1.Numeratore - risultato.Denominatore / f2.Denominatore * f2.Numeratore);
            return risultato;
        }
        public static CFrazioni moltiplicazione(CFrazioni f1, CFrazioni f2)
        {
            CFrazioni risultato = new CFrazioni();
            risultato.Denominatore = f1.Denominatore * f2.Denominatore;
            risultato.Numeratore = f1.Numeratore * f2.Numeratore;
            return risultato;
        }
        public static CFrazioni divisione(CFrazioni f1, CFrazioni f2)
        {
            CFrazioni risultato = new CFrazioni();
            int a;
            a = f2.Numeratore;
            f2.Numeratore = f2.Denominatore;
            f2.Denominatore = a;
            risultato = CFrazioni.moltiplicazione(f1, f2);
            return risultato;
        }
        public CFrazioni somma(CFrazioni f1)
        {
            CFrazioni risultato = new CFrazioni();
            risultato = CFrazioni.somma(this, f1);
            return risultato;
        }

        public CFrazioni sottrazione(CFrazioni f1)
        {
            CFrazioni risultato = new CFrazioni();
            risultato = CFrazioni.sottrazione(this, f1);
            return risultato;
        }

        public CFrazioni moltiplicazione(CFrazioni f1)
        {
            CFrazioni risultato = new CFrazioni();
            risultato = CFrazioni.moltiplicazione(this, f1);
            return risultato;
        }
        public CFrazioni divisione(CFrazioni f1)
        {
            CFrazioni risultato = new CFrazioni();
            risultato = CFrazioni.divisione(this, f1);
            return risultato;
        }

        public static CFrazioni operator +(CFrazioni f1, CFrazioni f2)
        {
            CFrazioni risultato = new CFrazioni();
            risultato = CFrazioni.somma(f1, f2);
            return risultato;
        }
        public static CFrazioni operator -(CFrazioni f1, CFrazioni f2)
        {
            CFrazioni risultato = new CFrazioni();
            risultato = CFrazioni.sottrazione(f1, f2);
            return risultato;
        }
        public static CFrazioni operator *(CFrazioni f1, CFrazioni f2)
        {
            CFrazioni risultato = new CFrazioni();
            risultato = CFrazioni.moltiplicazione(f1, f2);
            return risultato;
        }
        public static CFrazioni operator /(CFrazioni f1, CFrazioni f2)
        {
            CFrazioni risultato = new CFrazioni();
            risultato = CFrazioni.divisione(f1, f2);
            return risultato;
        }
        public CFrazioni semplifica()
        {
            int mcd = 0;
            mcd = MCD(this.Numeratore, this.Denominatore);
            this.Numeratore /= mcd;
            this.Denominatore /= mcd;
            return this;
        }
    }
}
