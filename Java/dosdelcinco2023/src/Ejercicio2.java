import java.util.Scanner;

public class Ejercicio2 {
        public static void main(String[] args) {
            Scanner teclado = new Scanner(System.in);
        int numA;
        int numB;
        System.out.print("Ingrese un número : ");
        numA= teclado.nextInt();
        System.out.print("Ingrese un número : ");
        numB= teclado.nextInt();
            if (numA>numB){
                System.out.print( numA + " Es mayor que " + numB);
            } else System.out.print(numB + " Es mayor que " + numA);
        }

}
