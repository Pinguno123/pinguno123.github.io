import java.util.Scanner;
public class Ejercicio6 {
    public static void main(String[] arg) {
        Scanner teclado = new Scanner(System.in);

        System.out.print("Ingrese un número : ");
        double n = teclado.nextDouble();

        for (int contador = 1; contador <= 10; contador++) {
            double v = n * contador;
        System.out.println(n+" x "+contador+" es : "+v);
        }
    }
}
