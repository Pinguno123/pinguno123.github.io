import java.util.Scanner;
public class Ejercicio4 {
    public static void main(String[] arg) {
        Scanner teclado = new Scanner(System.in);

        int off = 0;

        while (off==0){

        System.out.println("Opción 1 : Sumar dos digitos");
        System.out.println("Opción 2 : Restar dos digitos");
        System.out.println("Opción 3 : Dividir dos digitos");
        System.out.println("Opción 4 : Multiplicar dos digitos");
        System.out.print("Ingrese una opción : ");
        int op = teclado.nextInt();

        double result;

        switch (op) {
            case 1:
                System.out.print("Ingrese el primer digito : ");
                double num1 = teclado.nextDouble();
                System.out.print("Ingrese el segundo digito : ");
                double num2 = teclado.nextDouble();
                result = num1 + num2;
                System.out.println("El resultado de la suma es : " + result);
                off = 1;
                break;
            case 2:
                System.out.print("Ingrese el primer digito : ");
                double num3 = teclado.nextDouble();
                System.out.print("Ingrese el segundo digito : ");
                double num4 = teclado.nextDouble();
                result = num3 - num4;
                System.out.println("El resultado de la resta es : " + result);
                off = 1;
                break;
            case 3:
                System.out.print("Ingrese el primer digito : ");
                double num5 = teclado.nextDouble();
                System.out.print("Ingrese el segundo digito : ");
                double num6 = teclado.nextDouble();
                result = num5 * num6;
                System.out.println("El resultado de la multiplicación es : " + result);
                off = 1;
                break;
            case 4:
                System.out.print("Ingrese el primer digito : ");
                double num7 = teclado.nextDouble();
                System.out.print("Ingrese el segundo digito : ");
                double num8 = teclado.nextDouble();
                result = num7 / num8;
                System.out.println("El resultado de la división es : " + result);
                off = 1;
                break;
            default:
                System.out.println("Ingrese una opción correcta");
                break;
        }
        }
    }
}

