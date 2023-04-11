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

        }
    }
}
