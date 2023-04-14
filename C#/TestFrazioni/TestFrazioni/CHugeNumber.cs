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
            if(numero.Length<N)
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

        public static CHugeNumber operator + (CHugeNumber n1, CHugeNumber n2)
        {

        }
    }
}}
