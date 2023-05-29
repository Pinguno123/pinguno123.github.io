import java.util.Scanner;
public class Login {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        int login = 0;
        int pass = 0;
        int tryes = 0;
        int max = 0;

        while (((login != 1234) || (pass != 9060))){
            System.out.print("Introduzca un login : ");
            login = teclado.nextInt();
            System.out.print("Introduzca su pass : ");
            pass = teclado.nextInt();

            if (tryes == 3){
                System.out.println("Acceso denegado intente otra vez");
                tryes = tryes-max;
            }
            tryes++;
        }
        System.out.println("Ha ingresado correctamente");
        System.out.println("1: Sumar dos números");
        System.out.println("2: Restar dos números");
        System.out.println("3: Multiplicar dos números");
        System.out.println("4: Dividir dos números");
        System.out.println("5: Funciones academicas");
        System.out.print("Ingrese una opcción : ");
        int op = teclado.nextInt();

        float resultado;
        String nombreDelEstudiante;

            switch (op){
                case 1:
                    System.out.print("Ingrese primer digito : ");
                    float numero1 = teclado.nextFloat();
                    System.out.print("Ingrese segundo digito : ");
                    float numero2 = teclado.nextFloat();
                    resultado = numero1+numero2;
                    System.out.println("Su resultado es : "+resultado);break;

                case 2:
                    System.out.print("Ingrese primero digito : ");
                    numero1 = teclado.nextFloat();
                    System.out.print("Ingrese segundo digito : ");
                    numero2 = teclado.nextFloat();
                    resultado = numero1-numero2;
                    System.out.println("Su resultado es : "+resultado);break;

                case 3:
                    System.out.print("Ingrese primero digito : ");
                    numero1 = teclado.nextFloat();
                    System.out.print("Ingrese segundo digito : ");
                    numero2 = teclado.nextFloat();
                    resultado = numero1*numero2;
                    System.out.println("Su resultado es : "+resultado);break;

                case 4:
                    System.out.print("Ingrese primero digito : ");
                    numero1 = teclado.nextFloat();
                    System.out.print("Ingrese segundo digito : ");
                    numero2 = teclado.nextFloat();
                    resultado = numero1/numero2;
                    System.out.println("Su resultado es : "+resultado);break;

                default:
                    System.out.println("Opcion no encontrada");

                case 5:
                    System.out.println("Funciones academicas");
                    System.out.println("1: Sacar promedio");
                    System.out.println("2: SISE");
                    System.out.println("3: Informe en el SISE");
                    System.out.print("Ingrese una opción : ");
                    int faop = teclado.nextInt();

                    switch (faop){
                        case 1:
                            System.out.print("Ingrese la cantidad de notas a promediar: ");
                            int cantidadNotas = teclado.nextInt();

                            double sumaNotas = 0;

                            for (int i = 0; i < cantidadNotas; i++) {

                                System.out.print("Ingrese la nota " + (i+1) + ": ");

                                double nota = teclado.nextDouble();

                                sumaNotas += nota;
                            }
                            double promedio = sumaNotas / cantidadNotas;
                            System.out.println("El promedio de las " + cantidadNotas + " notas ingresadas es: " + promedio);break;

                        case 2:
                            System.out.println("1: Juega en clase");
                            System.out.println("2: Come en clase");
                            System.out.println("3: Duerme en clase");
                            System.out.println("4: Actos indecorosos en clases");
                            System.out.print("Ingrese numero de falta en el SISE :");
                            int opSise = teclado.nextInt();
                            switch (opSise){
                                case 1:
                                    int juega = 0;
                                    System.out.println("Se ha añadido esta falta al SISE");
                                    juega++;
                                    System.out.println("No de faltas : "+juega);break;

                                case 2:
                                    int come = 0;
                                    System.out.println("Se ha añadido esta falta al SISE");
                                    int come1 = come++;
                                    System.out.println("No de faltas : "+come1);break;

                                case 3:
                                    int duerme = 0;
                                    System.out.println("Se ha añadido esta falta al SISE");
                                    int duerme1 = duerme++;
                                    System.out.println("No de faltas : "+duerme1);break;

                                case 4:
                                    int actos = 0;
                                    System.out.println("Se ha añadido esta falta al SISE");
                                    actos++;
                                    System.out.println("No de faltas : "+actos);break;
                            }


            }
        }
     }
}
        