import java.util.Scanner;
public class Ejercicio7 {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        System.out.println("Ingrese una opción : ");
        System.out.println("Ingresar notas : ");
        System.out.println("Ingresar falta : ");
        System.out.println("Ingresar inasistencia:");
        int op = teclado.nextInt();

        String nombre;

        switch (op){
            case 1:
                System.out.println("Nombre del alumno : ");
                 nombre = teclado.nextLine();

        }
    }
}
