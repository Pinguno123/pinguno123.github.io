import java.util.Scanner;
public class Ejercicio8 {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        System.out.println("Introduzca su nombre: ");
        String entrada = teclado.nextLine();
        while (!(entrada.equals("fin"))) {
            System.out.println("Hola "+entrada);
            System.out.println("Introduzca otro nombre: ");
            entrada = teclado.nextLine();
        }
    }
}


