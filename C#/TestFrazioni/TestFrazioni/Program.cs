using System;

namespace TestFrazioni
{
    class Program
    {
        static void Main(string[] args)
        {
            CFrazioni f1, f2, r;
            f1 = new CFrazioni();
            f2 = new CFrazioni(7, 8);
            Console.WriteLine("Hai creato la frazione {0} e la frazione {1}",f1.ToString(),f2);
            r = CFrazioni.somma(f1, f2);
            r = f1.somma(f2);
            r = f1 + f2; 
        }
    }
}
