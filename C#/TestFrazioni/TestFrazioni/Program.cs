using System;

namespace TestFrazioni
{
    class Program
    {
        static void Main(string[] args)
        {
            CFrazioni f1, f2, f3, f4, f5, r;
            CHugeNumber n1, n2;
            n1 = new CHugeNumber("12345");
            n2 = new CHugeNumber("6");
            n2 -= n1;
            Console.WriteLine("Il risultato è: {0}", n2);
            f1 = new CFrazioni();
            f2 = new CFrazioni(7, 8);
            f3 = new CFrazioni(4, 9);
            f4 = new CFrazioni(34, 78);
            f5 = new CFrazioni(1, 5);
            r = ((f1 + f2) * f3 / (f4 - f5));
            Console.WriteLine("Il risultato è: {0}", r);



        }
    }
}
