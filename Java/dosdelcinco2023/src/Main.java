// Press Shift twice to open the Search Everywhere dialog and type `show whitespaces`,
// then press Enter. You can now see whitespace characters in your code.
import javax.sound.sampled.Line;
import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        String  nombre;
        float nota1;
        float nota2;
        float nota3;
        float suma;
        float division;
    System.out.print("Ingrese su nombre completo : ");
    nombre= teclado.nextLine();
    System.out.print("Ingrese su primera nota : ");
    nota1= teclado.nextFloat();
    System.out.print("Ingrese su segunda nota : ");
    nota2= teclado.nextFloat();
    System.out.print("Ingrese su tercera nota : ");
    nota3= teclado.nextFloat();
    suma= nota1 + nota2 + nota3;
    division= suma / 3;
    System.out.println("El promedio de " + nombre + " es de : " + division);
    }
    }