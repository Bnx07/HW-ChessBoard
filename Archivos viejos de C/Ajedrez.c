#include <stdio.h>
#include <stdlib.h>
#include <time.h>
int main(){
	//Desarrollar un algoritmo para cuadricula en el que asigne 1;0;1;0 y así, despues otro para asignar valores 1,2,3,4,5,3,2,1,6,6,6,6,6,6,6,6,0,0,0,0,0,0,0,0,0,0,0 y así
	srand(time(NULL));
	int j, i, a=1, b=0; //Variables para algoritmos
	int cuadricula[8][8]; //color de la casilla, movimiento y todo para las piezas aparte en otro 8x8 de posiciones y en las mismas piezas
	int cuadricula2[8][8];
	int alfb1[4], alfb2[4], horb1[4], horb2[4], rookb1[4], rookb2[4], queenb[4], kingb[4], pb1[4],pb2[4],pb3[4],pb4[4],pb5[4],pb6[4],pb7[4],pb8[4];
	int alfw1[4], alfw2[4], horw1[4], horw2[4], rookw1[4], rookw2[4], queenw[4], kingw[4], pw1[4],pw2[4],pw3[4],pw4[4],pw5[4],pw6[4],pw7[4],pw8[4];
	for (i = 0; i < 8; i++){
		for (j = 0; j < 8; j++){
			if (a!=0){
				cuadricula[i][j]=1;
				a=0;
			}
			if (a!=1){
				cuadricula[i][j]=2;
				a=1;
			}
			printf("%d	",cuadricula[i][j]);
		}
		printf("\n");
	}
	
	
	
	
	
}
