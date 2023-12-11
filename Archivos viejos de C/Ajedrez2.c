#include <stdio.h>
#include <stdlib.h>
#include <time.h>
int main(){
	//Desarrollar un algoritmo para cuadricula en el que asigne 1;0;1;0 y así, despues otro para asignar valores 1,2,3,4,5,3,2,1,6,6,6,6,6,6,6,6,0,0,0,0,0,0,0,0,0,0,0 y así
	srand(time(NULL));
	int j, i, a=1, b, c=0, d; //Variables para algoritmos
	int cuadricula[8][8]; //color de la casilla, movimiento y todo para las piezas aparte en otro 8x8 de posiciones y en las mismas piezas
	int cuadricula2[8][8];
	int alfilb1[4], alfilb2[4], horb1[4], horb2[4], rookb1[4], rookb2[4], queenb[4], kingb[4], pb1[4],pb2[4],pb3[4],pb4[4],pb5[4],pb6[4],pb7[4],pb8[4];
	int alfilw1[4], alfilw2[4], horw1[4], horw2[4], rookw1[4], rookw2[4], queenw[4], kingw[4], pw1[4],pw2[4],pw3[4],pw4[4],pw5[4],pw6[4],pw7[4],pw8[4];
	for (i=0; i < 8; i++){
		if(c==0){
			for (j=0; j < 8; j++){
				if(a==1){
					cuadricula[i][j]=1;
					b=2;
				}
				if(a==2){
					cuadricula[i][j]=2;
					b=1;
				}
				a=b;
				printf("%d	",cuadricula[i][j]);
			}
			printf("\n");
			d=1;
		}
		if(c==1){
			for (j=0; j < 8; j++){
				if(a==2){
					cuadricula[i][j]=1;
					b=1;
				}
				if(a==1){
					cuadricula[i][j]=2;
					b=2;
				}
				a=b;
				printf("%d	",cuadricula[i][j]);
			}
			printf("\n");
			d=0;
		}
		c=d;
	}
	alfilb1[0]=1, alfilb2[0]=1, rookb1[0]=1, rookb2[0]=1, horb1[0]=1, horb2[0]=1, queenb[0]=1, kingb[0]=1,pb1[0]=1,pb2[0]=1,pb3[0]=1,pb4[0]=1,pb5[0]=1,pb6[0]=1,pb7[0]=1,pb8[0]=1; //Vivo=1 Muerto=0
	alfilw1[0]=1, alfilw2[0]=1, rookw1[0]=1, rookw2[0]=1, horw1[0]=1, horw2[0]=1, queenw[0]=1, kingw[0]=1,pw1[0]=1,pw2[0]=1,pw3[0]=1,pw4[0]=1,pw5[0]=1,pw6[0]=1,pw7[0]=1,pw8[0]=1;
	
	alfilb1[1]=8, alfilb2[1]=8, rookb1[1]=8, rookb2[1]=8, horb1[1]=8, horb2[1]=8, queenb[1]=8, kingb[1]=8,pb1[1]=7,pb2[1]=7,pb3[1]=7,pb4[1]=7,pb5[1]=7,pb6[1]=7,pb7[1]=7,pb8[1]=7; //filas (X)
	alfilw1[1]=1, alfilw2[1]=1, rookw1[1]=1, rookw2[1]=1, horw1[1]=1, horw2[1]=1, queenw[1]=1, kingw[1]=1,pw1[1]=2,pw2[1]=2,pw3[1]=2,pw4[1]=2,pw5[1]=2,pw6[1]=2,pw7[1]=2,pw8[1]=2;
	
	alfilb1[2]=3, alfilb2[2]=6, rookb1[2]=1, rookb2[2]=8, horb1[2]=2, horb2[2]=7, queenb[2]=5, kingb[2]=4,pb1[2]=1,pb2[2]=2,pb3[2]=3,pb4[2]=4,pb5[2]=5,pb6[2]=6,pb7[2]=7,pb8[2]=8; //columnas (Y)
	alfilw1[2]=3, alfilw2[2]=6, rookw1[2]=1, rookw2[2]=8, horw1[2]=2, horw2[2]=7, queenw[2]=5, kingw[2]=4,pw1[2]=1,pw2[2]=2,pw3[2]=3,pw4[2]=4,pw5[2]=5,pw6[2]=6,pw7[2]=7,pw8[2]=8;
	
	alfilb1[3]=1, alfilb2[3]=2, rookb1[3]=3, rookb2[3]=3, horb1[3]=4, horb2[3]=4, queenb[3]=5, kingb[3]=6,pb1[3]=7,pb2[3]=7,pb3[3]=7,pb4[3]=7,pb5[3]=7,pb6[3]=7,pb7[3]=7,pb8[3]=7; //Tipo de pieza
	alfilw1[3]=8, alfilw2[3]=9, rookw1[3]=10,rookw2[3]=10,horw1[3]=11,horw2[3]=11,queenw[3]=12,kingw[3]=12,pw1[3]=13,pw2[3]=13,pw3[3]=13,pw4[3]=13,pw5[3]=13,pw6[3]=13,pw7[3]=13,pw8[3]=13;
	
	for (i=0; i < 8; i++){
		for (j=0; j < 8; j++){
			//Código que compare el valor de i y j con los valores 1 y 2 de las piezas (En el respectivo orden) y cuando las coordenadas sean iguales a una pieza, asignarle a esa posicion de cuadricula2 el tipo de pieza (Valor 3)
		}
	}
	printf("TODO CORRECTO");
	//Código de movimiento según el tipo de pieza
	//Bucle While para mover hasta jaque mate o rendición
}	
