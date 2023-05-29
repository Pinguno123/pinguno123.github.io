import java.util.Scanner;
public class Ejercicio5 {
    public static void main(String[] arg) {
        Scanner teclado = new Scanner(System.in);

        System.out.print("Escribe un valor : ");

        int producto = teclado.nextInt();
        int valor;

        switch (producto){

            case 0:
                valor = 25;
                System.out.println("El valor del producto es de "+valor);break;

            case 1:
                valor = 15;
                System.out.println("El valor del producto es de "+valor);break;

            case 2:
                valor = 10;
                System.out.println("El valor del producto es de "+valor);break;

            default:
                valor = 12;
                System.out.println("El valor del producto es de "+valor);break;
        }
    }
}
