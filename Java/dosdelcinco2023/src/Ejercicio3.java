import java.util.Scanner;
public class Ejercicio3 {
    public static void main(String[] arg) {
        Scanner teclado = new Scanner(System.in);
        String nombre;
        String dui;
        int edad;
        int res1;
        int sueldonuevo;
        float sueldo;

        System.out.print("Ingrese su nombre completo : ");
        nombre = teclado.nextLine();
        System.out.print("Ingrese su número de DUI : ");
        dui = teclado.nextLine();
        System.out.print("Ingrese su edad : ");
        edad = teclado.nextInt();
        if (edad < 18) {
            System.out.print("Edad no valida");
        } else {
            System.out.print("Ingrese sueldo : ");
            sueldo = teclado.nextFloat();
            if (sueldo > 500) {
                res1 = (int) (sueldo * 0.03);
                sueldonuevo = (int) (sueldo - res1);
                System.out.print("Su sueldo aplica en el rango de descuentos por lo que su sueldo nuevo es de : " + sueldonuevo + "$");
            } else System.out.print(sueldo);
        }
    }
}
