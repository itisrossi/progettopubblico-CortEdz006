using System;
using System.Collections.Generic;
using System.Text;

namespace TestFrazioni
{
    class CHugeNumber
    {
        // 1. definisco variabili di istanza
        private const int N = 300;
        private int[] mCifre;

        public int[] Cifre
        {
            get { return mCifre; }
            set { mCifre = value; }
        }

        public CHugeNumber()
        {
            Cifre = new int[N];
        }

        public CHugeNumber(string numero)
        {
            Cifre = new int[N];
            if (numero.Length < N)
            {
                for (int i = 0; i < numero.Length; i++)
                {
                    Cifre[N - i - 1] = numero[numero.Length - i - 1] - '0';
                }
            }
            else
            {
                throw new InvalidOperationException();
            }
        }

        public override string ToString()
        {
            string risultato = "";
            for (int i = 0; i < N; i++)
            {
                risultato += this.Cifre[i];
            }
            return risultato.TrimStart('0');
        }

        public static CHugeNumber operator +(CHugeNumber n1, CHugeNumber n2)
        {
            CHugeNumber risultato = new CHugeNumber();
            for (int i = N - 1; i > 0; i--)
            {
                risultato.Cifre[i] += n1.Cifre[i] + n2.Cifre[i];
                if (risultato.Cifre[i] >= 10)
                {
                    risultato.Cifre[i] -= 10;
                    risultato.Cifre[i - 1] = 1;
                }

            }
            return risultato;
        }

        private CHugeNumber comp()
        {
            CHugeNumber risultato = new CHugeNumber();
            CHugeNumber uno = new CHugeNumber("1");
            for (int i = N - 1; i > 0; i--)
            {
                risultato.Cifre[i] = 9 - this.Cifre[i];
            }
            return risultato + uno;
        }
        public static CHugeNumber operator -(CHugeNumber n1, CHugeNumber n2)
        {
            CHugeNumber risultato = new CHugeNumber();
            risultato = n2 + n1.comp();
            if (risultato.Cifre[0] == 1)
            {
                risultato.Cifre[0] = 0;
            }
            else
            {
                risultato = risultato.comp();
                for (int i = 0; risultato.Cifre[i] == 0; i++)
                {
                    if (risultato.Cifre[i + 1] != 0)
                        risultato.Cifre[i + 1] = 0 - risultato.Cifre[i + 1];
                }
            }
            return risultato;
        }
        public static CHugeNumber operator *(CHugeNumber n1, CHugeNumber n2)
        {
            CHugeNumber risultato = new CHugeNumber();
            CHugeNumber uno = new CHugeNumber("1");
            while (n2.ToString() != "")
            {
                risultato += n1; n2 -= uno;
            }
            return risultato;
        }
        public static CHugeNumber operator /(CHugeNumber n1, CHugeNumber n2)
        {
            CHugeNumber risultato = new CHugeNumber();
            do
            {

            }
            while()
            return risultato;
        }
    }
}
